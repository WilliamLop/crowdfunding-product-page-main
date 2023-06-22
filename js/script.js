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
const label = document.querySelectorAll('.label');
const modalContainer = document.querySelector('.modal__container');
const body = document.body;

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
        body.classList.add('scroll');
    });
    
    btnCloseModal.addEventListener('click', (e) => {
        e.preventDefault();        
        modal.classList.remove('modal-show');        
        body.classList.remove('scroll');
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
                infoTitle.forEach((title, tileIndex) => {
                    if(index === tileIndex) {
                        title.style.color = 'hsl(176, 72%, 28%)';
                    }else{
                        title.style.color = 'black';
                    }
                });

                radio.classList.remove("sinDecoracion");
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
    btnContinuar.addEventListener('click', (e) =>{

        e.preventDefault();
        if (selectedOption ===  0) {
            backCard.classList.add('cardBack-active');
            modalContainer.style.display = 'none';
        } 
        
        QuitarEstilosModal();

        modalInfoShow.forEach((radio, index) => {
            radio.addEventListener('click', () =>{
                modalShow.forEach((modal, modalIndex) => {
                    modal.classList.remove('modal__show--active');
                });
                openButtonsModal();
            });
        });

        backCard.scrollIntoView({block: "center"});
        
    });
});


function QuitarEstilosModal(){

    const radio = document.querySelectorAll('.radio');
    
    radio.forEach((radios) => {
        radios.classList.add('sinDecoracion');
    });

    modalInfo.forEach((modals) => {
        modals.classList.remove('modal__info--active');
    });

    infoTitle.forEach((title) => {
        title.style.color = 'black';
    });
}

btnCloseModal.addEventListener('click', (e) => {

    QuitarEstilosModal();
    modalShow.forEach((modal, modalIndex) => {
        modal.classList.remove('modal__show--active');
    });

});

submitGot.addEventListener('click', (e) => {
    e.preventDefault();
    backCard.classList.remove('cardBack-active');
    modal.style.display = 'none';
    body.classList.remove('scroll');
});


// Function para bookmark

const divBookmark = document.querySelector('.master__favorite');
const btnBookmark = document.querySelector('.bookmark');
const btnBook = document.querySelector('.btn-bookmark');
const textBookmark = document.querySelector('.text-favorite');

function bookmarkStateButton(){
    btnBookmark.addEventListener( 'click', () => {
        btnBookmark.classList.toggle('bookmark--active');
        divBookmark.classList.toggle('master__favorite--active');
        textBookmark.classList.toggle('text-favorite--active');
    });
}

bookmarkStateButton();

