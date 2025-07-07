


document.addEventListener("DOMContentLoaded", function () {
    const firstThumb = document.querySelector('#thumbnailGallery img');
    const mainImage = document.getElementById("mainImage");

    if (firstThumb && mainImage) {
        mainImage.src = firstThumb.src;
        firstThumb.classList.add("selected");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');

    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});

// Select the hamburger menu and sidebar
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');

// Add a click event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
    // Toggle the 'show' class on the sidebar
    sidebar.classList.toggle('show');
});

// Function to change the main image manually
function changeImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.src;

    // Reset the auto-change index to match the clicked thumbnail
    const thumbnails = document.querySelectorAll(".thumbnail-gallery img");
    currentIndex = Array.from(thumbnails).indexOf(thumbnail);

    // Highlight selected thumbnail
    document.querySelectorAll('#thumbnailGallery img').forEach(img => img.classList.remove('selected'));
    thumbnail.classList.add('selected');
}

// Function to automatically cycle through images
let currentIndex = 0;
function autoChangeImage() {
    const thumbnails = document.querySelectorAll(".thumbnail-gallery img");
    const mainImage = document.getElementById("mainImage");

    if (thumbnails.length > 0) {
        currentIndex = (currentIndex + 1) % thumbnails.length; // Loop back to the first image
        mainImage.src = thumbnails[currentIndex].src;
    }
}

// Start the automatic image change every 3 seconds
setInterval(autoChangeImage, 3000);

function scrollThumbnails(amount) {
    const gallery = document.getElementById("thumbnailGallery");
    gallery.scrollBy({ left: amount, behavior: 'smooth' });
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

