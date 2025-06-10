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
});
