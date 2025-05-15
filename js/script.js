document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = document.getElementById('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburger = document.getElementById('mobileMenuButton');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            hamburger.classList.remove('active');
        }
    });
});

const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuButton.classList.toggle('active');
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-opacity-80', 'shadow-xl');
    } else {
        header.classList.remove('bg-opacity-80', 'shadow-xl');
    }
});

$(document).ready(function(){
    $('.testimonial-slider').slick({
        dots: true, infinite: true, speed: 700, slidesToShow: 1, slidesToScroll: 1,
        autoplay: true, autoplaySpeed: 4500, arrows: false, adaptiveHeight: true, pauseOnHover: true
    });
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

const sections = document.querySelectorAll('.fade-in-section');
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
    });
}, { root: null, rootMargin: '0px', threshold: 0.1 });
sections.forEach(section => { observer.observe(section); });

const chatbotIcon = document.getElementById('chatbotIcon');
chatbotIcon.addEventListener('click', () => {
    alert('Chatbot CULTURALGYM: ¡Hola! ¿Cómo podemos ayudarte hoy? (Funcionalidad de chat en desarrollo)');
});
