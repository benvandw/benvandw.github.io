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

        // Toggle the 'hidden' class on the content
        const isCurrentlyHidden = content.classList.contains('hidden');
        if (isCurrentlyHidden) {
            content.classList.remove('hidden');
            if (buttonSpan) buttonSpan.textContent = 'Show less';
            if (buttonSvg) buttonSvg.style.transform = 'rotate(90deg)';
        } else {
            content.classList.add('hidden');
            if (buttonSpan) buttonSpan.textContent = 'Show more';
            if (buttonSvg) buttonSvg.style.transform = 'rotate(0deg)';
        }
    };

    // Attach event listeners to all 'Show more/less' buttons
    document.querySelectorAll('button[data-toggle-target]').forEach(button => {
        const targetId = button.getAttribute('data-toggle-target');
        if (targetId) {
            button.addEventListener('click', () => {
                toggleSection(button, targetId);
            });
        }
    });

    // Handle "Show more experience" button specifically (if it toggles a large section)
    const showMoreExperienceButton = document.querySelector('button[data-toggle-target="all-experience-content"]');
    if (showMoreExperienceButton) {
        showMoreExperienceButton.addEventListener('click', () => {
            const content = document.getElementById('all-experience-content');
            if (content) {
                const buttonSpan = showMoreExperienceButton.querySelector('span');
                const buttonSvg = showMoreExperienceButton.querySelector('svg');

                const isCurrentlyHidden = content.classList.contains('hidden');
                if (isCurrentlyHidden) {
                    content.classList.remove('hidden');
                    if (buttonSpan) buttonSpan.textContent = 'Show less experience';
                    if (buttonSvg) buttonSvg.style.transform = 'rotate(180deg)'; /* Rotate down arrow */
                } else {
                    content.classList.add('hidden');
                    if (buttonSpan) buttonSpan.textContent = 'Show more experience';
                    if (buttonSvg) buttonSvg.style.transform = 'rotate(0deg)'; /* Rotate up arrow */
                }
            }
        });
    }
});
