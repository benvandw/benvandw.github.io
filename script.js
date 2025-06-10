document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons with the data-toggle-target attribute
    document.querySelectorAll('[data-toggle-target]').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.toggleTarget;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.classList.toggle('hidden'); // Toggle the hidden class

                const span = this.querySelector('span');
                const svg = this.querySelector('svg');

                // Update button text and SVG rotation
                if (targetElement.classList.contains('hidden')) {
                    span.textContent = this.dataset.showText || 'Show more'; // Use data-show-text
                    if (svg) {
                        // For the main 'Show more experience' button's SVG path,
                        // it should start as a down arrow and rotate up.
                        // For individual 'Show more' buttons, it starts as a right arrow and rotates down.
                        // We need to handle this based on the initial state of the SVG.
                        // A simpler approach is to always toggle the rotation.
                        svg.classList.remove('rotate-180');
                    }
                } else {
                    span.textContent = this.dataset.hideText || 'Show less'; // Use data-hide-text
                    if (svg) {
                        svg.classList.add('rotate-180');
                    }
                }
            }
        });
    });
});
