document.addEventListener('DOMContentLoaded', function() {
    /**
     * Initializes a countdown timer.
     * @param {number} durationHours - The duration of the countdown in hours.
     * @param {string} displayElementId - The ID of the HTML element to display the countdown.
     * @param {string} storageKey - The localStorage key to store the countdown end time.
     */
    function initializeDiscountCountdown(durationHours, displayElementId, storageKey) {
        const display = document.getElementById(displayElementId);
        if (!display) {
            // Don't log an error if the element simply isn't on the current page.
            // console.error("Countdown display element not found:", displayElementId);
            return;
        }

        const durationInMs = durationHours * 60 * 60 * 1000;
        let endTime = localStorage.getItem(storageKey);

        if (!endTime || isNaN(parseInt(endTime))) {
            endTime = new Date().getTime() + durationInMs;
            localStorage.setItem(storageKey, endTime.toString());
        } else {
            endTime = parseInt(endTime);
            if (new Date().getTime() > endTime) {
                display.innerHTML = "OFERTA EXPIRADA";
                // Disable buttons if offer is expired
                document.querySelectorAll('#discounted-plans-offer .btn').forEach(button => {
                    button.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
                    button.href = "javascript:void(0);"; 
                    button.textContent = "Expirado";
                });
                return; 
            }
        }

        function updateTimer() {
            const now = new Date().getTime();
            const timeLeft = endTime - now;

            if (timeLeft < 0) {
                clearInterval(timerInterval);
                display.innerHTML = "OFERTA EXPIRADA";
                document.querySelectorAll('#discounted-plans-offer .btn').forEach(button => {
                    button.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
                    button.href = "javascript:void(0);";
                    button.textContent = "Expirado";
                });
                return;
            }

            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            display.innerHTML = 
                (hours < 10 ? "0" : "") + hours + ":" + 
                (minutes < 10 ? "0" : "") + minutes + ":" + 
                (seconds < 10 ? "0" : "") + seconds;
        }

        updateTimer(); 
        const timerInterval = setInterval(updateTimer, 1000);
    }

    /**
     * Updates the content of an element with the current year.
     * @param {string} elementId - The ID of the HTML element to display the year.
     */
    function updateYear(elementId) {
        const yearSpan = document.getElementById(elementId);
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        } else {
            // console.warn("Year span element not found for ID:", elementId);
        }
    }

    // General initializations
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#") && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const header = document.getElementById('header'); // Assuming 'header' is your sticky header's ID
                    const headerOffset = header ? header.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.getElementById('mobileMenuButton');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (hamburger) hamburger.classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.classList.toggle('active');
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('bg-opacity-80', 'shadow-xl'); // Tailwind classes
            } else {
                header.classList.remove('bg-opacity-80', 'shadow-xl');
            }
        });
    }
    
    // Slick Carousel for testimonials (requires jQuery and Slick library)
    // Ensure jQuery and Slick are loaded before this script or wrap in a check.
    if (typeof $ !== 'undefined' && $.fn.slick) {
        if ($('.testimonial-slider').length) {
            $('.testimonial-slider').slick({
                dots: true, infinite: true, speed: 700, slidesToShow: 1, slidesToScroll: 1,
                autoplay: true, autoplaySpeed: 4500, arrows: false, adaptiveHeight: true, pauseOnHover: true
            });
        }
    } else {
        // console.warn("jQuery or Slick Carousel not loaded. Testimonial slider will not initialize.");
    }

    // Fade-in sections on scroll
    const sections = document.querySelectorAll('.fade-in-section');
    if (sections.length > 0) {
        const observer = new IntersectionObserver(function(entries, obs) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });
        sections.forEach(section => { observer.observe(section); });
    }

    // Chatbot icon click (placeholder)
    const chatbotIcon = document.getElementById('chatbotIcon');
    if (chatbotIcon) {
        chatbotIcon.addEventListener('click', () => {
            alert('Chatbot CULTURALGYM: ¡Hola! ¿Cómo podemos ayudarte hoy? (Funcionalidad de chat en desarrollo)');
        });
    }

    // Page-specific initializations
    // Initialize the 2-hour countdown timer for the discount offer page
    initializeDiscountCountdown(2, 'countdown-timer-display', 'discountOfferEndTimeCulturalGym');
    
    // Update copyright years on all relevant pages
    updateYear('currentYear'); // For index.html or general use
    updateYear('currentYearFunnel'); // For funnel.html
    updateYear('currentYearThankYou'); // For thank-you.html
    updateYear('currentYearCheckout'); // For checkout.html
    updateYear('currentYearDiscountPage'); // For descuento20.html
});

