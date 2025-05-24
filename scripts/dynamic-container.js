(function () {
    window.Webflow = window.Webflow || [];
    window.Webflow.push(() => {
        if (!gsap.core.globals().ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
        }

        class DynamicContainer {
            constructor(element) {
                this.element = element;
                if (!this.element) {
                    console.error("DynamicContainer: Element not provided or not found.");
                    return;
                }
                this.init();
            }

            init() {
                this.createScrollTrigger();
                // Consider adding a debounced resize listener ifvh/vw units might change behavior significantly
                // window.addEventListener('resize', () => { /* refresh ScrollTrigger or re-init */ });
            }

            createScrollTrigger() {
                console.log("Creating scroll trigger for:", this.element);

                ScrollTrigger.getAll().forEach(trigger => {
                    // More specific check if multiple dynamic containers or triggers exist
                    if (trigger.trigger && (trigger.trigger === this.element || trigger.trigger === this.element.parentElement)) {
                        trigger.kill();
                    }
                });
                gsap.killTweensOf(this.element);

                const isDesktop = window.innerWidth >= 768;

                // Initial state: Full viewport dimensions, but in normal document flow.
                // GSAP will handle keeping it in view via pinning.
                gsap.set(this.element, {
                    width: '100vw',
                    height: '100vh', // Or 'auto' if content defines height and has aspect ratio
                    scale: 1,
                    borderRadius: '0px'
                    // No position:fixed, no top/left/xPercent/yPercent for viewport centering here.
                    // Centering during pin is often handled by pin-spacer or transformOrigin.
                });

                // Animate from full viewport to a smaller, scaled, and rounded card
                gsap.to(this.element, {
                    scrollTrigger: {
                        trigger: this.element.parentElement, // The .dynamic-container-section
                        pin: this.element, // Pin the .dynamic-container itself
                        start: "top top", 
                        end: "+=150%", 
                        scrub: 1.2,
                        // markers: true, // Uncomment for debugging ScrollTrigger points
                    },
                    scale: 0.8, 
                    borderRadius: isDesktop ? '1.5rem' : '0.75rem',
                    // Important: If the element is 100vw, it might overflow its parent when not scaled down.
                    // The pin spacer GSAP creates will try to accommodate this.
                    // We might need to ensure the .dynamic-container's content also scales nicely.
                    ease: 'power1.inOut'
                });
            }
        }

        // Initialize all dynamic containers
        const containers = document.querySelectorAll('.dynamic-container');
        if (containers.length > 0) {
            containers.forEach(container => new DynamicContainer(container));
        } else {
            console.warn("No elements with class .dynamic-container found to initialize.");
        }
    });
})();
