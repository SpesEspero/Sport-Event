let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});

const toggle = document.getElementById('toggle');
const burger = document.getElementById('burger');
const aside = document.querySelector('.aside');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    aside.classList.toggle('active');
});

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    aside.classList.toggle('active');
});
