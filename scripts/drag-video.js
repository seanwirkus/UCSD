document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".bt-video video");
    const videoSection = document.querySelector(".bt-video-section");

    if (!video || !videoSection) {
        console.error("Video or video section not found!");
        return;
    }

    // Video settings
    video.muted = true; // Mute to allow autoplay
    video.playsInline = true; // Prevent full-screen default on mobile
    video.preload = "auto"; // Preload for smoother playback

    const frameRate = 29.97; // Video frame rate (fps)
    const frameDuration = 1 / frameRate; // Frame duration in seconds (~0.0334s)
    let lastFrameTime = performance.now();

    function initScrollSync() {
        video.play().then(() => {
            video.pause(); // Pause initially for manual scroll control

            ScrollTrigger.create({
                trigger: videoSection,
                start: "top top",
                end: "bottom top",
                scrub: true, // Smooth scroll progress
                onUpdate: (self) => {
                    if (!video.duration) return;

                    const now = performance.now();
                    const elapsedTime = (now - lastFrameTime) / 1000; // Convert to seconds

                    if (elapsedTime >= frameDuration) {
                        const targetTime = self.progress * video.duration;

                        // Smoothly interpolate to the target time
                        gsap.to(video, {
                            currentTime: targetTime,
                            duration: 0.03, // Keep updates fast for high FPS
                            ease: "none" // Direct interpolation for frame precision
                        });

                        lastFrameTime = now; // Reset frame timing
                    }
                },
                invalidateOnRefresh: true // Recalculate positions on resize
            });
        }).catch(console.error);
    }

    // Ensure video is loaded before initializing scroll sync
    video.addEventListener("loadedmetadata", () => {
        video.currentTime = 0; // Start at the beginning
        video.play().then(() => {
            video.pause(); // Pause after preloading
            initScrollSync(); // Initialize sync
        }).catch(console.error);
    });

    // Handle autoplay restrictions on mobile (e.g., iOS)
    document.addEventListener("touchstart", () => {
        video.play().then(() => video.pause()).catch(console.error);
    }, { once: true });

    // Recalculate ScrollTrigger on window resize
    window.addEventListener("resize", () => ScrollTrigger.refresh());
});