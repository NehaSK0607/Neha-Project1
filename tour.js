document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('tourVideo');
    const sections = {
        welcome: document.getElementById('tour-welcome'),
        notes: document.getElementById('tour-notes'),
        papers: document.getElementById('tour-papers'),
        summaries: document.getElementById('tour-summaries'),
        links: document.getElementById('tour-links')
    };

    // Define the time ranges (in seconds) for each section
    // *** ADJUST THESE TIMES to match your video content ***
    const timeMap = [
        { id: 'welcome', start: 0, end: 5 },
        { id: 'notes', start: 5, end: 15 },
        { id: 'papers', start: 15, end: 25 },
        { id: 'summaries', start: 25, end: 35 },
        { id: 'links', start: 35, end: 45 }
        // Add more sections if needed
    ];

    // Function to remove highlight from all sections
    function removeAllHighlights() {
        Object.values(sections).forEach(section => {
            if (section) { // Check if the element exists
                section.classList.remove('highlight');
            }
        });
    }

    // Event listener for video time updates
    video.addEventListener('timeupdate', () => {
        const currentTime = video.currentTime;
        let activeSectionFound = false;

        removeAllHighlights(); // Clear previous highlights first

        for (const item of timeMap) {
            if (currentTime >= item.start && currentTime < item.end) {
                if (sections[item.id]) { // Check if the section element exists
                    sections[item.id].classList.add('highlight');
                    activeSectionFound = true;
                    break; // Stop checking once the current section is found
                }
            }
        }
    });
});