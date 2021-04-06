const nav = document.querySelector('.nav-links');
const burguer = document.querySelector('.burguer');
const links = nav.querySelectorAll('a');

burguer.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burguer.classList.toggle('toggle');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        burguer.classList.toggle('toggle');
    });
});