import './style.css'
import { inject } from "@vercel/analytics";
inject();

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up')
        .forEach(el => observer.observe(el));

    const toggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});
