(function() {
    window.Webflow = window.Webflow || [];
    window.Webflow.push(() => {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);
    });
})();
</script>

<script>
// DynamicContainer Class
class DynamicContainer {
    constructor(selector) {
        this.selector = selector;
        console.log("Dynamic container initialized for:", selector);
        this.init();
    }

    init() {
        this.createScrollTrigger();
        window.addEventListener('resize', () => this.createScrollTrigger());
    }

    createScrollTrigger() {
        console.log("Creating scroll trigger for container");
        gsap.killTweensOf(this.selector);

        const settings = {
            scrollTrigger: {
                trigger: this.selector,
                start: "top bottom",
                end: "top center",
                scrub: 1,
                toggleActions: "play none none reverse"
            },
            height: 'auto',
            ease: "cubic-bezier(0.33, 1, 0.68, 1)",
            duration: 1,
            y: 0,
            scale: 1
        };

        // Create a separate timeline for width/border-radius changes
        const resizeTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: this.selector,
                start: "top 65%",
                end: "top 45%",
                scrub: 1
            }
        });

        if (window.innerWidth >= 768) {
            resizeTimeline.to(this.selector, {
                width: '75rem',
                borderRadius: '1rem',
                duration: 1
            });
        } else {
            resizeTimeline.to(this.selector, {
                width: '90%',
                borderRadius: '0.5rem',
                duration: 1
            });
        }

        // Set initial state
        gsap.set(this.selector, {
            y: 30,
            scale: 0.98
        });

        // Animate to final state
        gsap.to(this.selector, settings);
    }
}

// Initialize dynamic containers
const containers = document.querySelectorAll('.dynamic-container');
console.log("Found containers:", containers.length);
containers.forEach(container => {
    new DynamicContainer(container);
});