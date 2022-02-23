const button = document.querySelector('.button');
const menuMobile = document.querySelector('.menu-mobile');
const container = document.querySelector('.container');
let isOpen = false;

button.addEventListener('click', () => {
    if (!isOpen) {
        button.classList.add('open');
        button.setAttribute('src', './../assets/menu-buguer-close.svg');
        container.classList.add('isOpen');
        menuMobile.classList.add('isOpen');
        isOpen = true;
    } else {
        button.classList.remove('open');
        menuMobile.classList.remove('isOpen');
        container.classList.remove('isOpen');
        button.setAttribute('src', './../assets/menu-buguer-open.svg');
        isOpen = false;
    }
    console.log(isOpen);
});