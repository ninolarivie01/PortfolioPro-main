const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// 1. Charger le thème sauvegardé au démarrage
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// 2. Écouteur de clic pour changer de thème
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Sauvegarde le choix
});

const revealOnScroll = () => {
    const reveals = document.querySelectorAll(".section");
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
            reveal.classList.add("reveal"); // On s'assure que la classe est là
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
// Lance une fois au démarrage pour les éléments déjà visibles
revealOnScroll();

window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
});

const btt = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        btt.classList.add("show");
    } else {
        btt.classList.remove("show");
    }
});

btt.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const animateSkills = () => {
    const skillsSection = document.querySelector('.skills-container');
    const progressBars = document.querySelectorAll('.skill-progress');
    
    if(!skillsSection) return;

    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            bar.classList.add('animate');
        });
    }
};

window.addEventListener('scroll', animateSkills);

const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});