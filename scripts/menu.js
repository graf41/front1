const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header__nav');
const overlay = document.querySelector('.nav-overlay');

function openMenu() {
    nav.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active'); 
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active'); 
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

if (menuToggle && nav && overlay) {
    menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
    }
    });
}
const menuLinks = document.querySelectorAll('.header__link');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
    closeMenu();
    });
});

const scrollTopButton = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
    scrollTopButton.classList.add('visible');
    } else {
    scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
    console.log('scrollTop script loaded');
});
