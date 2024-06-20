document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('overlay');
    let isOpen = false;

    window.toggleTransition = function(link) {
        if (isOpen) {
            overlay.classList.remove('open');
        } else {
            overlay.classList.add('open');
            openLinkInNewTab(link);
        }
        isOpen = !isOpen;
    };

    // Function to open a new tab with a specified link after 5 seconds
    function openLinkInNewTab(link) {
        setTimeout(() => {
            window.open(link, '_blank');
        }, 1500); // 5000 milliseconds = 5 seconds
    }

   
});