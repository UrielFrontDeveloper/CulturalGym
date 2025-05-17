document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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

// Image error handler (alternative to inline if many images)
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('error', function() {
//         this.onerror = null; // prevent infinite loop if placeholder also fails
//         this.src = 'https://placehold.co/' + (this.width || 600) + 'x' + (this.height || 400) + '/1A1A1A/FFFFFF?text=Error+Loading+Image';
//         console.warn("Failed to load image: " + this.alt);
//     });
// });
