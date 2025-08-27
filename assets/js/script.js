document.addEventListener('DOMContentLoaded', () => {
            // Typing animation
            const typedText = document.getElementById('typed-text');
            const textToType = ["Développeur Web & Mobile", "Systèmes Embarqués", "IA & Data Science"];
            let index = 0;
            let charIndex = 0;
            let isDeleting = false;

            function type() {
                const currentText = textToType[index];
                if (isDeleting) {
                    typedText.textContent = currentText.substring(0, charIndex--);
                    if (charIndex < 0) {
                        isDeleting = false;
                        index = (index + 1) % textToType.length;
                        setTimeout(type, 500);
                        return;
                    }
                } else {
                    typedText.textContent = currentText.substring(0, charIndex++);
                    if (charIndex > currentText.length) {
                        isDeleting = true;
                        setTimeout(type, 2000);
                        return;
                    }
                }
                setTimeout(type, isDeleting ? 50 : 100);
            }
            type();

            // Mobile menu toggle
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.addEventListener('click', () => {
                const navLinks = document.querySelector('nav .md\\:flex');
                navLinks.classList.toggle('hidden');
            });

            // Fade-in animation on scroll
            const fadeElements = document.querySelectorAll('.fade-in');
            function checkFade() {
                fadeElements.forEach(element => {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= window.innerHeight) {
                        element.classList.add('visible');
                    }
                });
            }
            window.addEventListener('scroll', checkFade);
            checkFade();

            // Contact form validation and submission (client-side example)
            const contactForm = document.getElementById('contactForm');
            const formMessage = document.getElementById('formMessage');
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(contactForm);
                // Here you would typically send data to a server
                console.log(Object.fromEntries(formData));
                formMessage.classList.remove('hidden');
                setTimeout(() => formMessage.classList.add('hidden'), 3000);
                contactForm.reset();
            });
        });

        // Update mobile menu toggle script
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('nav .md\\:flex');
    const hamburger = mobileMenu.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('visible');
        hamburger.classList.toggle('active');
        // Prevent scrolling when menu is open
        document.body.style.overflow = navLinks.classList.contains('visible') ? 'hidden' : '';
    });

    // Close menu with close button
    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            navLinks.classList.remove('visible');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('visible');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileMenu.contains(e.target) && !closeMenu.contains(e.target) && navLinks.classList.contains('visible')) {
            navLinks.classList.remove('visible');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Existing typing animation, fade-in, and form submission code remains unchanged
    // ...
});