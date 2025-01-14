
import * as flsFunctions from "./modules/functions.js";
import Swiper, { Navigation, Pagination } from 'swiper';

flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {

    const swiper = new Swiper();

    const navMenu = document.querySelector('.header__nav');
    const openMenu = document.querySelector('.menu-btn');
    const closeMenu = document.querySelector('.menu-close');
    
    function disableScroll() {
        let pagePosition = window.scrollY;
        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
    }
    function enableScroll() {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        window.scroll({top: pagePosition, left: 0});
        document.body.removeAttribute('data-position');
    }
    

    openMenu.addEventListener('click', () => {
        // disableScroll();
        navMenu.classList.add('open');
        
    });
    closeMenu.addEventListener('click', () => {
        // enableScroll();
        navMenu.classList.remove('open');
    });
    
    window.addEventListener('keydown', (e) =>{
        if(e.key === 'Escape'){
            navMenu.classList.remove('open');
        }
    })
    
    navMenu.addEventListener('click', event => {
        event._isClickWithImMenu = true;
    });
    openMenu.addEventListener('click', event => {
        event._isClickWithImMenu = true;
    });
    document.body.addEventListener('click', event =>{
        if(event._isClickWithImMenu) return;
        navMenu.classList.remove('open');
    })
    
});


