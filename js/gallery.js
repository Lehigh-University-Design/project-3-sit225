// Function to open the lightbox with a specific image
function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-image');
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'block';

    // Reduce the size of the clicked image
    var clickedImage = document.querySelector('#gallery img[src="' + imageSrc + '"]');
    clickedImage.style.transform = 'scale(0.95)';
}

// Function to close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';

    // Restore the size of the clicked image
    var clickedImage = document.querySelector('#gallery img');
    clickedImage.style.transform = 'scale(1)';
    
    // Add event listeners back to all images in the gallery to enable hover animation
    var galleryImages = document.querySelectorAll('#gallery img');
    galleryImages.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseout', function() {
            img.style.transform = 'scale(1)';
        });
    });
}
