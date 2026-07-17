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
        liveDemo: "", // paste your deployed link, e.g. "https://plotease.example.com"
        repo: "https://github.com/Vener2626",
        tabs: {
            'about': `<p>Capstone project for ICS - BASU. An ISO-compliant faculty management system, focused end-to-end on UI/UX design: research, wireframes, and a production-ready Figma-to-code handoff.</p>`,
            'general': `<p>Design a scheduling interface that removes the manual, spreadsheet-driven process faculty coordinators relied on — cutting the time and errors involved in building a compliant class schedule.</p>`,
            'specific': `<ul><li>Map the ISO-compliance rules into a guided scheduling flow</li><li>Automate workload balancing across faculty</li><li>Design conflict detection that surfaces overlaps before submission</li></ul>`,
            'results': `<div class="case-metrics">
                <div class="metric"><span class="metric-num">4</span><span class="metric-label">Stakeholder review rounds</span></div>
                <div class="metric"><span class="metric-num">30+</span><span class="metric-label">Screens designed</span></div>
                <div class="metric"><span class="metric-num">100%</span><span class="metric-label">ISO checklist coverage</span></div>
            </div>
            <p>Delivered a full design system in Figma, validated with faculty coordinators through usability sessions, that became the build spec for the development team.</p>`
        }
    },
    'momo': {
        title: "MOMO CART Commercial Kiosk",
        images: ["image/momo-cart.png"],
        tags: ["3D Visualization", "PHP", "Commercial"],
        liveDemo: "",
        repo: "https://github.com/Vener2626",
        tabs: {
            'about': `<p>A digital rental and kiosk platform branded "MOMO CART", covering mobility-scooter rentals and food retail management with a 3D product visualization layer.</p>`,
            'general': `<p>Give a commercial kiosk client a self-serve interface customers can operate unassisted — combining rentals, retail, and payment in one touchscreen flow.</p>`,
            'specific': `<ul><li>Build a PHP-backed rental and inventory flow</li><li>Integrate interactive 3D previews of rentable units</li><li>Design a touch-first UI for unattended kiosk hardware</li></ul>`,
            'results': `<p>Shipped a working kiosk flow from product browsing through rental confirmation, built to run reliably on unattended commercial hardware.</p>`
        }
    },
    'chata': {
        title: "Chata Brews: Modern POS & Inventory",
        images: ["image/chata.png","image/chata2.png","image/chata3.png","image/chata4.png","image/chata5.png","image/chata6.png","image/chata7.png","image/chata8.png"],
        tags: ["Full-stack", "AJAX", "Chart.js"],
        liveDemo: "",
        repo: "https://github.com/Vener2626",
        tabs: {
            'about': `<p>A coffee-themed, full-stack Point-of-Sale and Inventory system, built to replace manual stock tracking with live, data-backed operations.</p>`,
            'general': `<p>Give a small coffee shop a single system to ring up sales, track stock in real time, and see performance trends without spreadsheets.</p>`,
            'specific': `<ul><li>Real-time sales dashboards with Chart.js</li><li>AJAX-driven filtering across orders and inventory, no page reloads</li><li>Role-based access for staff vs. admin</li><li>CSV/PDF export for reporting</li></ul>`,
            'results': `<div class="case-metrics">
                <div class="metric"><span class="metric-num">8</span><span class="metric-label">Core modules shipped</span></div>
                <div class="metric"><span class="metric-num">2</span><span class="metric-label">Export formats (CSV/PDF)</span></div>
                <div class="metric"><span class="metric-num">0</span><span class="metric-label">Full page reloads (AJAX)</span></div>
            </div>
            <p>Went from concept to a working full-stack system covering sales, inventory, and reporting, with a UI designed to stay fast under a live-updating dashboard.</p>`
        }
    },
    'venos': {
        title: "VenOS: Point-of-Sale for One-Counter Shops",
        images: ["image/venos-landing.png", "image/venos-sale.png", "image/venos-dashboard.png", "image/venos-reports.png", "image/venos-products.png"],
        tags: ["Tailwind CSS", "Full-stack", "Live"],
        liveDemo: "https://venpos.vercel.app",
        repo: "https://github.com/Vener2626",
        tabs: {
            'about': `<p>VenOS is a deployed point-of-sale system built for small, single-counter businesses like cafes and sari-sari stores — the kind of shop that's still tallying sales by hand or juggling a notebook and a calculator.</p>`,
            'general': `<p>Replace manual tallying with one screen a cashier can learn in minutes: ring up sales, track cash vs. GCash, and see what's actually selling — no spreadsheets required.</p>`,
            'specific': `<ul><li>Tap-to-cart checkout with per-item discounts and cash/GCash tracking</li><li>PIN-based login that routes cashiers and owners to different views</li><li>Live dashboard: today's revenue, transaction count, average order size</li><li>Daily/Weekly/Monthly/Yearly sales reports with one-click CSV export</li><li>Product catalog management with custom icons and categories</li></ul>`,
            'results': `<div class="case-metrics">
                <div class="metric"><span class="metric-num">6</span><span class="metric-label">Product categories supported</span></div>
                <div class="metric"><span class="metric-num">4</span><span class="metric-label">Report views (Daily–Yearly)</span></div>
                <div class="metric"><span class="metric-num">2</span><span class="metric-label">Payment methods tracked live</span></div>
            </div>
            <p>Built with Tailwind CSS and deployed live on Vercel — this one isn't just a screenshot, you can actually click around it.</p>`
        }
    },
    'venvillas': {
        title: "Ven Villas: Luxury Villa Booking & AI Concierge",
        images: ["image/venvillas-hero.png", "image/venvillas-listings.png", "image/venvillas-destinations.png", "image/venvillas-chatbot.png", "image/venvillas-booking.png"],
        tags: ["Tailwind CSS", "JavaScript", "Live"],
        liveDemo: "https://ven-villa.vercel.app",
        repo: "https://github.com/Vener2626",
        tabs: {
            'about': `<p>Ven Villas is a front-end concept build for a luxury villa rental brand — full-page marketing site, villa listings, destination browsing, guest reviews, an FAQ section, and two interactive pieces: a multi-step booking flow and an AI-styled concierge chat widget named "Aria."</p>`,
            'general': `<p>Design a booking experience that matches the premium feel of the brand itself — clean editorial typography, warm neutral tones, and interactions that feel considered rather than templated, from browsing a villa to completing a reservation.</p>`,
            'specific': `<ul><li>3-step booking modal: choose villa → dates & guests → confirm, with inline validation</li><li>"Aria" concierge chat with quick-reply buttons for common questions (check-in times, cancellation policy, amenities)</li><li>Scroll-reveal animations and a filterable villa/destination grid</li><li>Fully responsive layout, built with Tailwind CSS utility classes throughout</li></ul>`,
            'results': `<div class="case-metrics">
                <div class="metric"><span class="metric-num">3</span><span class="metric-label">Step booking flow</span></div>
                <div class="metric"><span class="metric-num">5</span><span class="metric-label">Countries of listings shown</span></div>
                <div class="metric"><span class="metric-num">6</span><span class="metric-label">Chat quick-reply topics</span></div>
            </div>
            <p>A front-end only build — the booking flow and chat are interactive UI/UX pieces (no backend or live payments), designed to show how a full luxury booking journey should feel end-to-end.</p>`
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

    const linksContainer = document.getElementById('modalLinks');
    if (linksContainer) {
        let linksHtml = '';
        if (project.liveDemo) {
            linksHtml += `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary modal-link-btn"><i class="fas fa-arrow-up-right-from-square"></i> Live Demo</a>`;
        }
        if (project.repo) {
            linksHtml += `<a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-outline modal-link-btn"><i class="fab fa-github"></i> Source</a>`;
        }
        linksContainer.innerHTML = linksHtml;
        linksContainer.style.display = linksHtml ? 'flex' : 'none';
    }

    window.switchTab(null, 'about');

    document.getElementById('projectModal').style.display = "block";
    document.body.style.overflow = "hidden";

    // Reset scroll position so the title/tags are visible instead of wherever
    // the modal was last scrolled to (it's the same DOM element reused each open)
    const modalEl = document.getElementById('projectModal');
    if (modalEl) modalEl.scrollTop = 0;

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
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault(); // We handle submission via fetch instead of a page reload

            if (submitBtn) submitBtn.disabled = true;
            if (submitText) submitText.innerText = "Sending...";

            try {
                const formData = new FormData(contactForm);
                // Get your free access key at https://web3forms.com (no account needed,
                // just enter an email and it's emailed to you). Paste it below.
                formData.append("access_key", "ed9ee232-a8d0-4022-a275-01364185a0e4");
                formData.append("subject", "New message from your portfolio site");

                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });
                const result = await response.json();

                if (result.success) {
                    showToast("Message Sent Successfully!", "fa-paper-plane");
                    contactForm.reset();
                } else {
                    showToast("Something went wrong. Please email me directly.", "fa-triangle-exclamation");
                }
            } catch (err) {
                showToast("Network error. Please email me directly.", "fa-triangle-exclamation");
            } finally {
                if (submitBtn) submitBtn.disabled = false;
                if (submitText) submitText.innerText = "Send Message";
            }
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

    // 7. Scroll Progress Bar
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = pct + '%';
        }, { passive: true });
    }

    // 8. Subtle Project Card Tilt (restrained, disabled for touch/reduced-motion users)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (!prefersReducedMotion && !isTouchDevice) {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `translateY(-10px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
});