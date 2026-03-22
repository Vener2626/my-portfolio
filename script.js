// --- TOAST ENGINE ---
function showToast(message, iconClass = 'fa-info-circle') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    // innerHTML allows the Font Awesome <i> tag to render
    toast.innerHTML = `<i class="fas ${iconClass}"></i> ${message}`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

// --- THEME TOGGLE LOGIC ---
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

function updateThemeIcon(isLight) {
    if (!themeIcon) return;
    if (isLight) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-mode');
        updateThemeIcon(isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        showToast(isLight ? "Light Mode Activated" : "Dark Mode Activated", isLight ? "fa-sun" : "fa-moon");
    });
}

// --- PROJECT DATA ---
// Note: Ensure your images are in the 'image/' folder
const projectData = {
    'plotease': {
        title: "Plotease: Faculty Management UI",
        images: ["image/plotease.png", "image/plotease2.png", "image/plotease3.png", "image/plotease4.png"],
        tags: ["Capstone", "UI/UX", "ISO-Compliant"],
        tabs: {
            'about': `<p>Capstone project for ICS - BASU. Focused on UI/UX design.</p>`,
            'general': `<p>Optimizes class schedules and faculty workload.</p>`,
            'specific': `<ul><li>Schedule optimization</li><li>Workload automation</li></ul>`
        }
    },
    'momo': {
        title: "MOMO CART Commercial Kiosk",
        images: ["image/momo-cart.png"], 
        tags: ["3D Visualization", "PHP", "Commercial"],
        description: `<h3>Objective</h3><p>Commercial kiosk project branded as "MOMO CART".</p>`
    },
    'chata': {
        title: "Chata Brews: Modern POS & Inventory",
        images: ["image/chata.png","image/chata2.png","image/chata3.png","image/chata4.png","image/chata5.png","image/chata6.png","image/chata7.png","image/chata8.png"], 
        tags: ["Full-stack", "AJAX", "Chart.js"],
        tabs: {
            'about': `<p>Coffee-themed POS and Inventory system.</p>`,
            'general': `<p>Visualizes dynamic sales charts using Chart.js.</p>`,
            'specific': `<ul><li>AJAX filtering</li><li>CSV/PDF Export</li></ul>`
        }
    }
};

// --- MODAL & CAROUSEL LOGIC ---
let currentProjectId = '';
let currentSlideIndex = 0;
let autoPlayInterval = null;

window.openProjectModal = function(id) {
    currentProjectId = id;
    const project = projectData[id];
    if (!project) return;

    currentSlideIndex = 0;
    document.getElementById('modalTitle').innerText = project.title;
    window.initCarousel(project.images);
    
    document.getElementById('modalTags').innerHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    const tabContainer = document.querySelector('.modal-tabs');
    const contentContainer = document.getElementById('tabContent');

    if (project.tabs) {
        tabContainer.style.display = "flex";
        window.switchTab(null, 'about');
    } else {
        tabContainer.style.display = "none";
        contentContainer.innerHTML = project.description;
    }
    
    document.getElementById('projectModal').style.display = "block";
    document.body.style.overflow = "hidden";
    showToast(`Viewing ${project.title}`, "fa-eye");

    if (project.images.length > 1) startAutoPlay();
};

window.initCarousel = function(images) {
    const slideContainer = document.getElementById('carouselSlides');
    const dotsContainer = document.getElementById('carouselDots');
    slideContainer.innerHTML = images.map(img => `<img src="${img}" alt="Preview" onerror="this.src='image/about-bg.jpg'">`).join('');
    
    if (dotsContainer) {
        dotsContainer.innerHTML = images.length > 1 ? images.map((_, i) => 
            `<span class="dot ${i === 0 ? 'active' : ''}" onclick="setSlide(${i}); stopAutoPlay();"></span>`
        ).join('') : '';
    }
    window.setSlide(0);
};

window.setSlide = function(index) {
    const project = projectData[currentProjectId];
    if (!project) return;
    const images = project.images;
    currentSlideIndex = (index >= images.length) ? 0 : (index < 0 ? images.length - 1 : index);
    const slideContainer = document.getElementById('carouselSlides');
    if (slideContainer) slideContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlideIndex));
};

function startAutoPlay() {
    stopAutoPlay(); 
    autoPlayInterval = setInterval(() => window.setSlide(currentSlideIndex + 1), 3000);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

window.switchTab = function(event, tabKey) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
        showToast(`Details: ${tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}`, "fa-info-circle");
    } else {
        const aboutBtn = document.querySelector(`.tab-btn[onclick*="'about'"]`);
        if (aboutBtn) aboutBtn.classList.add('active');
    }
    
    const contentContainer = document.getElementById('tabContent');
    const project = projectData[currentProjectId];
    if (contentContainer && project && project.tabs) {
        contentContainer.innerHTML = project.tabs[tabKey];
    }
};

window.closeModal = function() {
    stopAutoPlay();
    document.getElementById('projectModal').style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (e) => {
    if (e.target.id == 'projectModal') window.closeModal();
};

// --- GLOBAL NAVIGATION & FORM LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const allNavLinks = document.querySelectorAll('.nav-links a');
    const allSections = document.querySelectorAll('section');
    const menuToggle = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');

    // 1. Theme Initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        updateThemeIcon(true);
    }

    // 2. Mobile Menu
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            const toggleIcon = menuToggle.querySelector('i');
            toggleIcon.classList.toggle('fa-bars');
            toggleIcon.classList.toggle('fa-times');
        });
    }

    // 3. Navigation Links
    allNavLinks.forEach((link) => {
        link.addEventListener('click', function() {
            navLinksList.classList.remove('active');
            if (menuToggle) {
                const toggleIcon = menuToggle.querySelector('i');
                toggleIcon.classList.add('fa-bars');
                toggleIcon.classList.remove('fa-times');
            }
            allNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 4. CV Download Listener
    const downloadBtn = document.querySelector('.cv-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            showToast("Downloading Resume...", "fa-file-download");
        });
    }

  // --- CONTACT FORM "SIMULATED" SUBMISSION ---
    const contactForm = document.getElementById('portfolioContactForm');
    const submitBtn = contactForm ? contactForm.querySelector('.submit-btn') : null;
    const submitText = document.getElementById('submitText');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevents the page from refreshing or redirecting to PHP

            // 1. Enter Loading State
            if (submitBtn) submitBtn.disabled = true;
            if (submitText) submitText.innerText = "Sending...";
            
            // 2. Simulate a "Server Delay" (1.5 seconds)
            setTimeout(() => {
                // 3. Trigger the Success Toast
                showToast("Message Sent Successfully!", "fa-paper-plane");

                // 4. Reset the Form fields
                contactForm.reset();

                // 5. Reset Button State
                if (submitBtn) submitBtn.disabled = false;
                if (submitText) submitText.innerText = "Send Message";
                
            }, 1500); // 1500ms = 1.5 seconds of "fake" loading
        });
    }
    
    // 6. Scroll Observers
    const observerOptions = { root: null, rootMargin: '-25% 0px -55% 0px', threshold: 0 };
    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                allNavLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) link.classList.add('active');
                });
            }
        });
    };
    const navObserver = new IntersectionObserver(observerCallback, observerOptions);
    allSections.forEach((section) => navObserver.observe(section));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    allSections.forEach(section => {
        section.classList.add('reveal');
        revealObserver.observe(section);
    });
});
