// ============ HAMBURGER MENU ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ============ SMOOTH SCROLL NAVIGATION ============
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                navLinks.classList.remove('active');
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ============ HERO BUTTON ACTIONS ============
const exploreBtn = document.getElementById('exploreBtn');
const consultBtn = document.getElementById('consultBtn');

if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
}

if (consultBtn) {
    consultBtn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// ============ CONTACT FORM SUBMISSION ============
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = contactForm.querySelectorAll('input, textarea');
        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const phone = inputs[2].value.trim();
        const projectType = inputs[3].value.trim();
        const message = inputs[4].value.trim();

        // Validation
        if (!name || !email || !message) {
            alert('Please fill in the required fields: Name, Email, and Message');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Success message
        alert(`Thank you, ${name}! We've received your inquiry and will contact you at ${email} within 24 hours.`);
        contactForm.reset();
    });
}

// ============ CTA BUTTON ============
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// ============ PRODUCT BUTTONS ============
document.querySelectorAll('.product-card .btn-small').forEach(btn => {
    btn.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`Thank you for your interest in ${productName}! Our team will contact you shortly with more details.`);
    });
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards and items
document.querySelectorAll('.product-card, .service-card, .testimonial-card, .portfolio-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', (e) => {
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
    }
    // Alt + C for contact
    if (e.altKey && e.key === 'c') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// ============ HEADER SCROLL EFFECT ============
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow on scroll
    if (scrollTop > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop;
});

// ============ PORTFOLIO HOVER EFFECT ============
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ============ SERVICE CARD ANIMATION ============
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ============ PAGE LOAD ANIMATION ============
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============ MOBILE TOUCH OPTIMIZATION ============
if (window.innerWidth <= 768) {
    document.querySelectorAll('.btn, .product-card, .service-card').forEach(element => {
        element.style.touchAction = 'manipulation';
    });
}

// ============ FORM INPUT FOCUS EFFECTS ============
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.01)';
    });
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// ============ COUNTER ANIMATION FOR STATS ============
function animateCounters() {
    const statsSection = document.querySelector('.stats');
    const statItems = document.querySelectorAll('.stat-item h3');
    
    if (statsSection) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const statsPosition = statsSection.offsetTop + statsSection.offsetHeight / 2;
        
        if (scrollPosition > statsPosition && !statsSection.classList.contains('animated')) {
            statsSection.classList.add('animated');
            statItems.forEach(item => {
                const finalValue = item.textContent;
                const numericValue = parseInt(finalValue);
                let currentValue = 0;
                const increment = numericValue / 50;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        item.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        item.textContent = Math.floor(currentValue) + (finalValue.includes('+') ? '+' : '');
                    }
                }, 20);
            });
        }
    }
}

window.addEventListener('scroll', animateCounters);

// ============ CONSOLE MESSAGE ============
console.log('%cWELCOME TO FUNDO', 'font-size: 24px; font-weight: bold; color: #8b7355;');
console.log('%cPremium Furniture & Interior Design', 'font-size: 14px; color: #666;');
