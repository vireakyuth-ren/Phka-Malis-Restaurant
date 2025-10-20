window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }

});

window.addEventListener("scroll", function() {
    const footerImages = document.querySelectorAll(".footer-image img");
    const footerContents = document.querySelector(".footer-contents");
    const footerSection = document.querySelector(".footer");
    
    // Get the footer position
    const footerTop = footerSection.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    // Check if footer is in view
    if (scrollY + windowHeight >= footerTop) {
        // Disable AOS animations for footer elements
        footerImages.forEach(img => {
            img.setAttribute("data-aos", "");
        });
        footerContents.setAttribute("data-aos", "");
        
        // Make animations static (remove the data-aos attributes that trigger animations)
        footerImages.forEach(img => {
            img.style.opacity = "1";
            img.style.transform = "none";
        });
        footerContents.style.opacity = "1";
        footerContents.style.transform = "none";
    }
});

