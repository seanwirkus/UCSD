document.addEventListener("DOMContentLoaded", function () {
    const rawFacultyData = window.facultyJson || [];
    const DEFAULT_IMG = "https://cdn.prod.website-files.com/6654eb861fcc442c666a548c/680ae7d8fa435d4844a7d9c0_Profile_avatar_placeholder_large.png";
    const ITEMS_PER_PAGE = 10;
    let currentPage = 1;

    const focusLabels = {}, modalityLabels = {};
    let nextFocusId = 1, nextModalityId = 1;

    rawFacultyData.forEach(m => {
      const focusText = m.focus2 ? `${m.focus1}, ${m.focus2}` : m.focus1;
      if (focusText && !focusLabels[focusText]) focusLabels[focusText] = nextFocusId++;
      if (m.modality && !modalityLabels[m.modality]) modalityLabels[m.modality] = nextModalityId++;
    });

    const focusLookup = Object.fromEntries(Object.entries(focusLabels).map(([k, v]) => [v, k]));
    const modalityLookup = Object.fromEntries(Object.entries(modalityLabels).map(([k, v]) => [v, k]));

    const facultyData = rawFacultyData.map(m => {
      let displayName = m.name;
      if (m.name.includes(",")) {
        const [last, first] = m.name.split(',').map(s => s.trim());
        displayName = `${first} ${last}`.replace(/,/g, ""); // Remove any commas
      }
      const focusText = m.focus2 ? `${m.focus1}, ${m.focus2}` : m.focus1;
      return {
        displayName: displayName.replace(/,/g, ""), // Ensure no commas in the name
        degree: m.degree.replace(/,/g, ""), // Remove commas from the degree(s)
        focus: focusLabels[focusText] || null,
        modality: m.modality ? modalityLabels[m.modality] : null,
        email: m.email.replace(/\.edui$/, ".edu").replace(/@ucsd\.edu$/, "@health.ucsd.edu"),
        imageUrl: m.imageUrl || DEFAULT_IMG,
        profileUrl: m.profileUrl || '#'
      };
    }).filter(f => f.displayName && f.degree && f.email);

    const container = document.getElementById("faculty-results");
    const searchInput = document.getElementById("faculty-search");
    const filterPrimary = document.getElementById("filter-primary");
    const filterDivision = document.getElementById("filter-division");
    const resetButton = document.getElementById("reset-filters");
    const resultsCount = document.createElement("div"); // Create results count element
    resultsCount.id = "results-count";
    resultsCount.className = "results-count";
    resetButton.insertAdjacentElement("afterend", resultsCount); // Place it next to the reset button

    const getFocusLabel = id => focusLookup[id] || "—";
    const getModalityLabel = id => modalityLookup[id] || "—";

    function renderFacultyCards(arr) {
      container.innerHTML = "";

      const totalPages = Math.ceil(arr.length / ITEMS_PER_PAGE);
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      const end = Math.min(start + ITEMS_PER_PAGE, arr.length); // Ensure we don't exceed the array length
      const pageData = arr.slice(start, end);

      // Update results count
      resultsCount.textContent = `Showing ${start + 1}–${end} of ${facultyData.length} results`;

      pageData.forEach(m => {
        const card = document.createElement("a"); // Make the entire card a link
        card.className = "profile-card faculty";
        card.href = m.profileUrl;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const imgWrapper = document.createElement("div");
        imgWrapper.innerHTML = `<img src="${m.imageUrl}" alt="${m.displayName}" class="image-card" />`;
        card.appendChild(imgWrapper);

        const overlay = document.createElement("div");
        overlay.className = "profile-card-overlay";
        overlay.innerHTML = `
          <div class="text-size-small text-height-125">
            ${m.displayName.replace(/,/g, "")}${m.degree ? ", " + m.degree : ""}
          </div>
          <div class="text-size-tiny text-color-secondary">
            ${getFocusLabel(m.focus)}
          </div>
          <div class="text-size-tiny text-style-light text-height-125">
            ${getModalityLabel(m.modality)}
          </div>
          <a href="mailto:${m.email}" class="email-link" style="pointer-events: auto;">
            <div class="text-size-tiny">${m.email}</div>
          </a>
        `;
        card.appendChild(overlay);

        container.appendChild(card);
      });

      document.querySelectorAll('.pagination').forEach(pag => {
        pag.innerHTML = "";
        if (totalPages <= 1) return;
        for (let i = 1; i <= totalPages; i++) {
          const btn = document.createElement("button");
          btn.className = "page-button";
          btn.textContent = i;
          if (i === currentPage) btn.disabled = true;
          btn.addEventListener("click", () => {
            currentPage = i;
            renderFacultyCards(filteredFaculty());

            const directoryEl = document.getElementById("directory");
            if (directoryEl) {
              directoryEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          });
          pag.appendChild(btn);
        }
      });
    }

    function filteredFaculty() {
      const term = searchInput.value.trim().toLowerCase();
      const f = Number(filterPrimary.value);
      const d = Number(filterDivision.value);
      return facultyData.filter(m => {
        const textMatch = !term
          || m.displayName.toLowerCase().includes(term)
          || getFocusLabel(m.focus).toLowerCase().includes(term)
          || getModalityLabel(m.modality).toLowerCase().includes(term);
        const focusMatch = !f || m.focus === f;
        const modalityMatch = !d || m.modality === d;
        return textMatch && focusMatch && modalityMatch;
      });
    }

    Object.entries(focusLookup).forEach(([id, label]) =>
      filterPrimary.insertAdjacentHTML("beforeend", `<option value="${id}">${label}</option>`)
    );
    Object.entries(modalityLookup).forEach(([id, label]) =>
      filterDivision.insertAdjacentHTML("beforeend", `<option value="${id}">${label}</option>`)
    );

    [searchInput, filterPrimary, filterDivision].forEach(el =>
      el.addEventListener("input", () => {
        currentPage = 1;
        renderFacultyCards(filteredFaculty());
      })
    );
    resetButton.addEventListener("click", () => {
      searchInput.value = "";
      filterPrimary.value = "";
      filterDivision.value = "";
      currentPage = 1;
      renderFacultyCards(facultyData);
    });

    renderFacultyCards(facultyData);
  });