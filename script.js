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

// Dish data with images and descriptions
const dishData = {
    'foie-gras': {
        image: 'foie-gras.jpg',
        title: 'FOIE GRAS',
        description: 'Rich and buttery foie gras served on toasted brioche with cherry reduction and crushed pistachios. A classic French delicacy prepared with precision and elegance.'
    },
    'foie-gras-2': {
        image: 'foie-gras.jpg',
        title: 'FOIE GRAS',
        description: 'Rich and buttery foie gras served on toasted brioche with cherry reduction and crushed pistachios. A classic French delicacy prepared with precision and elegance.'
    },
    'foie-gras-3': {
        image: 'foie-gras.jpg',
        title: 'FOIE GRAS',
        description: 'Rich and buttery foie gras served on toasted brioche with cherry reduction and crushed pistachios. A classic French delicacy prepared with precision and elegance.'
    },
    'kuyteav': {
        image: 'kuyteav.png',
        title: 'KUY TEAV',
        description: 'Crystal clear Cambodia-inspired broth with succulent blue prawns, rice noodle, and fresh herbs. A delicate and umami-rich soup that cleanses the palate.'
    },
    'kuyteav-2': {
        image: 'kuyteav.png',
        title: 'KUY TEAV',
        description: 'Crystal clear Cambodia-inspired broth with succulent blue prawns, rice noodle, and fresh herbs. A delicate and umami-rich soup that cleanses the palate.'
    },
    'kuyteav-3': {
        image: 'kuyteav.png',
        title: 'KUY TEAV',
        description: 'Crystal clear Cambodia-inspired broth with succulent blue prawns, rice noodle, and fresh herbs. A delicate and umami-rich soup that cleanses the palate.'
    },
    'pork': {
        image: 'pork.jpg',
        title: 'PORK TENDERLOIN',
        description: 'Premium pork tenderloin cooked to perfection with Kampot black pepper, steamed bokchoy, and rich sweet-and-sour sauce. A harmonious blend of flavors and textures.'
    },
    'amok': {
        image: 'amok.jpg',
        title: 'FISH AMOK',
        description: 'Exquisite Cambodian Snapper Fish Fillet, served with aromatic Khmer spices, Coconut Cream, Noni Leaves, and Steamed Jasmine Rice. A true taste of Cambodia.'
    },
    'amok': {
        image: 'amok.jpg',
        title: 'FISH AMOK',
        description: 'Exquisite Cambodian Snapper Fish Fillet, served with aromatic Khmer spices, Coconut Cream, Noni Leaves, and Steamed Jasmine Rice. A true taste of Cambodia.'
    },
    'passion': {
        image: 'passion.jpg',
        title: 'PASSION',
        description: 'Light and refreshing passion fruit sorbet with airy coconut espuma and crunchy vanilla crumble. A tropical intermezzo that prepares you for dessert.'
    },
    'passion-2': {
        image: 'passion.jpg',
        title: 'PASSION',
        description: 'Light and refreshing passion fruit sorbet with airy coconut espuma and crunchy vanilla crumble. A tropical intermezzo that prepares you for dessert.'
    },
    'passion-3': {
        image: 'passion.jpg',
        title: 'PASSION',
        description: 'Light and refreshing passion fruit sorbet with airy coconut espuma and crunchy vanilla crumble. A tropical intermezzo that prepares you for dessert.'
    },
    'banana': {
        image: 'banana.webp',
        title: 'BANANA PUDDING',
        description: 'Elegant dessert featuring white coconut milk, rice flour, and fresh wild banana.'
    },
    'banana': {
        image: 'banana.webp',
        title: 'BANANA PUDDING',
        description: 'Elegant dessert featuring white coconut milk, rice flour, and fresh wild banana.'
    },
    'banana': {
        image: 'banana.webp',
        title: 'BANANA PUDDING',
        description: 'Elegant dessert featuring white coconut milk, rice flour, and fresh wild banana.'
    },
    'oyster': {
        image: 'oyster.webp',
        title: 'OYSTER',
        description: 'Fresh oysters topped with premium Oscietra caviar, yuzu pearls, and cauliflower cream. A luxurious beginning to your culinary journey.'
    },
    'oyster-2': {
        image: 'oyster.webp',
        title: 'OYSTER',
        description: 'Fresh oysters topped with premium Oscietra caviar, yuzu pearls, and cauliflower cream. A luxurious beginning to your culinary journey.'
    },
    'duck': {
        image: 'duck.webp',
        title: 'DUCK BREAST',
        description: 'Fresh duck breast served with premium steamed jasmine rice with curry spices, wild root vegetables, and pepper-lime sauce. A delightful fusion of flavors.'
    },
    'tuekrerng': {
        image: 'tuekrerng.jpg',
        title: 'TEUK KRUENG',
        description: 'Pound Fish Fillet blend with Khmer fish paste and served with, coconut Cream, and Seasonal Fresh Vegetables. A harmonious blend of sweet and savory flavors from the river and earth.'
    }
};

// Attach hover/click handlers to dish names to show the preview panel
const previewPanel = document.getElementById('previewPanel');
const previewImage = document.getElementById('previewImage');
const previewTitle = document.getElementById('previewTitle');
const previewDescription = document.getElementById('previewDescription');
document.querySelectorAll('.dish-name').forEach(el => {
    el.addEventListener('mouseenter', () => {
        const key = el.dataset.dish;
        const data = dishData[key];
        if (data) {
            previewImage.src = data.image;
            previewTitle.textContent = data.title;
            previewDescription.textContent = data.description;
            previewPanel.classList.add('active');
        }
    });
    el.addEventListener('mouseleave', () => {
        previewPanel.classList.remove('active');
    });
    // Touch / click support
    el.addEventListener('click', (ev) => {
        const key = el.dataset.dish;
        const data = dishData[key];
        if (data) {
            previewImage.src = data.image;
            previewTitle.textContent = data.title;
            previewDescription.textContent = data.description;
            previewPanel.classList.add('active');
        }
        ev.stopPropagation();
    });
});
// Close preview when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.preview-panel') && !e.target.closest('.dish-name')) {
        previewPanel.classList.remove('active');
    }
});

// test