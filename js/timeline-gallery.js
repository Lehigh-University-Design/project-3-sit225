document.addEventListener('DOMContentLoaded', function () {
    const clickableSentences = document.querySelectorAll('.keynote');

    clickableSentences.forEach(sentence => {
        sentence.addEventListener('click', function () {
            // Get the image path from the data-image attribute
            const imagePath = sentence.getAttribute('data-image');

            // Show the modal popup with the image
            showModal(imagePath);
        });
    });

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', closeModal);
});

function showModal(imagePath) {
    // Show the modal overlay
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.style.display = 'block';

    // Set the image source in the modal
    const modalImage = document.querySelector('.modal-image');
    modalImage.src = imagePath;
}

function closeModal() {
    // Hide the modal overlay
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.style.display = 'none';
}
