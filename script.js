/**
 * Indie Game Development Startup - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. DOM Elements
    const siteHeader = document.getElementById('siteHeader');
    const progressBar = document.getElementById('progressBar');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

    // 2. Scroll Handling (Header, Progress Bar, Back to Top)
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Update Scroll Progress Bar
        if (scrollHeight > 0 && progressBar) {
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollPercentage + '%';
        }

        // Header Scrolled Glass Effect
        if (siteHeader) {
            if (scrollTop > 50) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        }

        // Back to Top Visibility
        if (scrollTopBtn) {
            if (scrollTop > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    // 3. Back to Top Click
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 4. Mobile Menu Toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 5. Initialize Ambient Particles (if library loaded)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 45, density: { enable: true, value_area: 900 } },
                color: { value: ['#00d2ff', '#6366f1', '#ffffff'] },
                shape: { type: 'circle' },
                opacity: { value: 0.35, random: true },
                size: { value: 2.5, random: true },
                line_linked: {
                    enable: true,
                    distance: 140,
                    color: '#00d2ff',
                    opacity: 0.12,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: false },
                    resize: true
                },
                modes: {
                    grab: { distance: 160, line_linked: { opacity: 0.3 } }
                }
            },
            retina_detect: true
        });
    }
});