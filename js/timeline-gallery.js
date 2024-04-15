document.addEventListener('DOMContentLoaded', function () {
    const timelineItems = document.querySelectorAll('.timeline .card');

    // Add click event listener to each timeline item
    timelineItems.forEach(item => {
        item.addEventListener('click', function () {
            // Get the image path from the data-image attribute
            const imagePath = item.getAttribute('data-image');

            // Open the image in a new tab
            window.open(imagePath, '_blank');
        });
    });
});
