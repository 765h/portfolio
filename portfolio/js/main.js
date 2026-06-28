/* =============================
   Language Toggle (JP / EN)
   ============================= */
const langToggle = document.getElementById('langToggle');
let lang = 'ja';

langToggle.addEventListener('click', () => {
    lang = lang === 'ja' ? 'en' : 'ja';
    langToggle.textContent = lang === 'ja' ? 'EN' : 'JA';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-ja]').forEach(el => {
        el.textContent = el.dataset[lang];
    });
});

/* =============================
   Mobile Menu Toggle
   ============================= */
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* =============================
   Scroll: Fade-in (Intersection Observer)
   ============================= */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* =============================
   Scroll: Active nav link highlight
   ============================= */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
    });

    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
}, { passive: true });
