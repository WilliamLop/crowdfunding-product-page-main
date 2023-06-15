const btnMenu = document.getElementById('menu');
const nav = document.querySelector(".nav");
const iconHamburger = document.querySelector('.icon-hamburger');
const iconLogo = document.querySelector('.figure__logo');
const pictureImg = document.querySelector('.picture__img');
const main = document.querySelector('.main');
const modal = document.querySelector('.modal');
const btnModal = document.getElementById('modal');
const btnCloseModal = document.getElementById('close');


// Evento para mostrar el menu mobile
btnMenu.addEventListener('click', () => {

    nav.classList.toggle('nav-show');

    if(nav.classList.contains('nav-show')){
        iconHamburger.setAttribute('src', './images/icon-close-menu.svg');
        filters();
    }else{
        iconHamburger.setAttribute('src', './images/icon-hamburger.svg');
        filtersNot();
    }
});

//Funcion para poner filtros
function filters(){
    iconLogo.classList.add('filters');
    pictureImg.classList.add('filters');
    main.classList.add('filters');
}

// Funcion para quitar filtros
function filtersNot(){
    iconLogo.classList.remove('filters');
    pictureImg.classList.remove('filters');
    main.classList.remove('filters');
}

// Evento para quitar el nav cuando se agrande la pantalla

window.addEventListener('resize',() => {
    const isMenuActive = document.querySelector('.nav-show');

    if(isMenuActive){
        nav.classList.remove('nav-show');
        iconHamburger.setAttribute('src', './images/icon-hamburger.svg');
        filtersNot();
    }
});


// Evento para abrir la modal

btnModal.addEventListener('click', () => {
    modal.classList.add('modal-show');
});

btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-show');
});