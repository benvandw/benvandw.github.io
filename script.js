// JS for index.html
document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the data-toggle-target attribute
    document.querySelectorAll('[data-toggle-target]').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.toggleTarget;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Toggle the 'hidden' class on the target element
                targetElement.classList.toggle('hidden');

                // Get the span for text and the SVG for icon rotation
                const span = this.querySelector('span');
                const svg = this.querySelector('svg');

                // Determine the current state and update text/icon accordingly
                if (targetElement.classList.contains('hidden')) {
                    // Content is now hidden, so button should say "Show more"
                    span.textContent = this.dataset.showText || 'Show more';
                    if (svg) {
                        svg.classList.remove('rotate-180'); // Reset rotation (point right/down)
                    }
                } else {
                    // Content is now visible, so button should say "Show less"
                    span.textContent = this.dataset.hideText || 'Show less';
                    if (svg) {
                        svg.classList.add('rotate-180'); // Apply rotation (point left/up)
                    }
                }
            }
        });
    });

    // --- Start of Carousel Initialization Code ---

    function initializeCarousel(containerId, itemsPerSlide = 4, autoRotate = true, intervalTime = 5000) {
        const carouselContainer = document.getElementById(containerId);
        if (!carouselContainer) {
            console.warn(`Carousel container with ID "${containerId}" not found.`);
            return;
        }

        const track = carouselContainer.querySelector('.carousel-track');
        const items = Array.from(track.children);
        const prevBtn = carouselContainer.querySelector('.prev-btn');
        const nextBtn = carouselContainer.querySelector('.next-btn');
        const indicatorsContainer = carouselContainer.querySelector('.carousel-indicators');

        let currentIndex = 0;
        const totalItems = items.length;
        const totalSlides = Math.ceil(totalItems / itemsPerSlide);
        let autoRotateInterval;

        // Ensure each item has the correct width
        items.forEach(item => {
            item.style.width = `${100 / itemsPerSlide}%`;
        });

        // Create indicators
        if (indicatorsContainer) {
            indicatorsContainer.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('indicator-dot', 'w-3', 'h-3', 'bg-zinc-500', 'rounded-full', 'cursor-pointer', 'transition-colors', 'duration-300');
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateCarousel();
                });
                indicatorsContainer.appendChild(dot);
            }
        }

        function updateCarousel() {
            const offset = -currentIndex * (100 / totalSlides);
            track.style.transform = `translateX(${offset}%)`;

            // Update active indicator
            if (indicatorsContainer) {
                const dots = indicatorsContainer.querySelectorAll('.indicator-dot');
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.remove('bg-zinc-500');
                        dot.classList.add('bg-zinc-300');
                    } else {
                        dot.classList.remove('bg-zinc-300');
                        dot.classList.add('bg-zinc-500');
                    }
                });
            }
        }

        if (prevBtn) { // Add null checks for buttons as well
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
                updateCarousel();
            });
        }

        if (nextBtn) { // Add null checks for buttons as well
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
                updateCarousel();
            });
        }


        // Auto-rotate functionality
        function startAutoRotate() {
            if (autoRotate && totalSlides > 1) { // Only auto-rotate if there's more than one slide
                autoRotateInterval = setInterval(() => {
                    if (nextBtn) { // Ensure nextBtn exists before clicking
                        nextBtn.click();
                    }
                }, intervalTime);
            }
        }

        function stopAutoRotate() {
            clearInterval(autoRotateInterval);
        }

        // Pause auto-rotate on hover
        if (carouselContainer) { // Ensure container exists
            carouselContainer.addEventListener('mouseenter', stopAutoRotate);
            carouselContainer.addEventListener('mouseleave', startAutoRotate);
        }


        // Initialize on load
        updateCarousel();
        startAutoRotate();

        // Recalculate on resize (important for responsive carousels)
        window.addEventListener('resize', () => {
            // Re-calculate item widths and update carousel position
            items.forEach(item => {
                item.style.width = `${100 / itemsPerSlide}%`;
            });
            updateCarousel();
        });
    }

    // Initialize each carousel
    initializeCarousel('organisations-carousel', 5); // Example: show 5 organisation logos at once
    initializeCarousel('platforms-carousel', 6);    // Example: show 6 platform logos at once
    initializeCarousel('languages-carousel', 6);    // Example: show 6 language logos at once

    // --- End of Carousel Initialization Code ---

}); // This is the *only* closing brace for the DOMContentLoaded listener.
