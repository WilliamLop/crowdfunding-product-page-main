const btnMenu = document.getElementById('menu');
const nav = document.querySelector(".nav");
const iconHamburger = document.querySelector('.icon-hamburger');
const iconLogo = document.querySelector('.figure__logo');
const pictureImg = document.querySelector('.picture__img');
const main = document.querySelector('.main');
const modal = document.querySelector('.modal');
const modalInfo = document.querySelectorAll('.modal__info');
const btnModal = document.getElementById('modal');
const btnCloseModal = document.getElementById('close');
const btnRadio = document.querySelectorAll('.radio');
console.log(modalInfo);



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


// Metodo para los radio buttons de la modal
btnRadio.forEach((radio, index) => {
    radio.addEventListener('click', () =>{
        modalInfo.forEach((container, containerIndex) => {
            if(index === containerIndex){
                container.classList.add('modal__info--active');
            }else{
                container.classList.remove('modal__info--active');
            }
        });
    });
});


// Metodo para cambiar de color icono

const iconClose = document.querySelector('.icon-close');

iconClose.addEventListener('mouseover', () =>{
    iconClose.setAttribute('src', './images/icon-close-modal-red.svg');
    iconClose.classList.add('icon-close-active');
});
iconClose.addEventListener('mouseout', () =>{
    iconClose.setAttribute('src', './images/icon-close-modal.svg');
    iconClose.classList.remove('icon-close-active');
});