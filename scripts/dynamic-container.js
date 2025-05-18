(function () {
    window.Webflow = window.Webflow || [];
    window.Webflow.push(() => {
        if (!gsap.core.globals().ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger, TextPlugin);
        }

        class DynamicContainer {
            constructor(element) {
                this.element = element;
                this.init();
            }

            init() {
                this.createScrollTrigger();
                window.addEventListener('resize', this.createScrollTrigger.bind(this));
            }

            createScrollTrigger() {
                console.log("Creating scroll trigger for:", this.element);

                // Kill existing triggers on this element
                ScrollTrigger.getAll().forEach(trigger => {
                    if (trigger.trigger === this.element) {
                        trigger.kill();
                    }
                });

                gsap.killTweensOf(this.element);

                // Initial state
                gsap.set(this.element, {
                    y: 30,
                    scale: 0.98
                });

                // Main scroll-triggered animation
                gsap.to(this.element, {
                    scrollTrigger: {
                        trigger: this.element,
                        start: "top bottom",
                        end: "top center",
                        scrub: 1,
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    scale: 1,
                    height: 'auto',
                    ease: "cubic-bezier(0.33, 1, 0.68, 1)",
                    duration: 1
                });

                // Width/border-radius animation
                const resizeTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: this.element,
                        start: "top 65%",
                        end: "top 45%",
                        scrub: 1
                    }
                });

                const isDesktop = window.innerWidth >= 768;
                resizeTimeline.to(this.element, {
                    width: isDesktop ? '75rem' : '90%',
                    borderRadius: isDesktop ? '1rem' : '0.5rem',
                    duration: 1
                });
            }
        }

        // Initialize all dynamic containers
        const containers = document.querySelectorAll('.dynamic-container');
        console.log("Found dynamic containers:", containers.length);
        containers.forEach(container => new DynamicContainer(container));
    });
})();
