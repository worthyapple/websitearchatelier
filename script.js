
// Navbar scroll opacity functionality
const navbar = document.querySelector('.navbar1');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 300;
    const opacity = Math.max(1 - scrollPosition / maxScroll, 0);
    navbar.style.opacity = opacity;
});

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

let lastScrollY = window.scrollY; // Track the last scroll position
const navbarElement = document.getElementById('navbar'); // Get the navbar element

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down - hide the navbar
        navbarElement.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show the navbar
        navbarElement.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY; // Update the last scroll position
});
