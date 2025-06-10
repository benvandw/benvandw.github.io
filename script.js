document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle the visibility of content sections
    const toggleSection = (button, contentId) => {
        const content = document.getElementById(contentId);
        if (!content) {
            console.warn(`Content element with ID '${contentId}' not found.`);
            return;
        }

        const buttonSpan = button.querySelector('span'); // The text part of the button
        const buttonSvg = button.querySelector('svg');   // The chevron icon part of the button

        const isCurrentlyHidden = content.classList.contains('hidden');
        const isExperience = contentId === 'all-experience-content';

        // Toggle visibility
        content.classList.toggle('hidden');

        // After toggling, update text and icon based on new visibility state:
        const isNowHidden = content.classList.contains('hidden');

        if (buttonSpan) {
            buttonSpan.textContent = isNowHidden
                ? isExperience ? 'Show more experience' : (button.dataset.showText || 'Show more')
                : isExperience ? 'Show less experience' : (button.dataset.hideText || 'Show less');
        }

        if (buttonSvg) {
            // Rotate icon: 90deg when expanded, 0deg when collapsed
            buttonSvg.style.transform = isNowHidden ? 'rotate(0deg)' : 'rotate(90deg)';
        }
    };

    // Attach event listeners to all buttons with data-toggle-target attribute
    document.querySelectorAll('button[data-toggle-target]').forEach(button => {
        const targetId = button.getAttribute('data-toggle-target');
        if (targetId) {
            button.addEventListener('click', () => {
                toggleSection(button, targetId);
            });
        }
    });
});
