const btnMenu = document.getElementById('menu');
const nav = document.querySelector(".nav");
const iconHamburger = document.querySelector('.icon-hamburger');
const iconLogo = document.querySelector('.figure__logo');
const pictureImg = document.querySelector('.picture__img');
const main = document.querySelector('.main');
const modal = document.querySelector('.modal');
const modalInfo = document.querySelectorAll('.modal__info');
const btnModal = document.querySelectorAll('.modal-btn');
const btnCloseModal = document.getElementById('close');
const btnRadio = document.querySelectorAll('.radio');
const modalShow = document.querySelectorAll('.modal__show');
const modalInfoShow = document.querySelectorAll('.modal__info--modal--show');
const infoTitle = document.querySelectorAll('.info__title');
const modalContainer = document.querySelector('.modal__container');
console.log(modalContainer);





// Evento para cambiar de color cuando se le de click a los title de la modal
infoTitle.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        infoTitle.forEach((title, tileIndex) => {
            if(index === tileIndex) {
                title.style.color = 'hsl(176, 72%, 28%)';
            }else{
                title.style.color = 'black';
            }
        });
    });
});


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

// Funcion para cerrar la modalShow
function cerrarValores(){
    const modalPledge = document.querySelector('.modal__pledge');

    modalPledge.addEventListener('click', () => {
        modalShow.forEach((modal) => {
            modal.classList.remove('modal__show--active');
        })
    });
}

// Evento para abrir la modal
btnModal.forEach((modalBtn) => {
    modalBtn.addEventListener('click', () => {
        modal.classList.add('modal-show');
        modalContainer.style.display = 'grid';
        modal.style.display = 'grid';
    });
    
    btnCloseModal.addEventListener('click', (e) => {
        e.preventDefault();        
        modal.classList.remove('modal-show');
    });
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



// Funcion para abrir los modal__show dentro de la modal
function openButtonsModal(){

    modalInfoShow.forEach((radio, index) => {
        radio.addEventListener('click', () =>{
            modalShow.forEach((modal, modalIndex) => {
                if(index === modalIndex) {
                        modal.classList.add('modal__show--active');
                }else{
                        modal.classList.remove('modal__show--active');
                }
            });
        });
    });
    cerrarValores();
}
openButtonsModal();

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



// Agrego funcion para mostrar card de finalizacion
const backCard = document.querySelector('.card__back');
const submitGot = document.getElementById('got-submit');
const btnContinue = document.querySelectorAll('.continue');
console.log(btnContinue);



let selectedOption = 0;

btnContinue.forEach((btnContinuar, index) => {
    btnContinuar.addEventListener('click', () =>{
        console.log('click');
        if (selectedOption ===  0) {
            backCard.classList.remove('hidden');
            modalContainer.style.display = 'none';
        } else {
            console.log('soy if');
        }
    });
});

submitGot.addEventListener('click', (e) => {
    e.preventDefault();
    backCard.classList.add('hidden');
    modal.style.display = 'none';

});




