// Nav Buttons
const collectionBtn = document.querySelector('#collection-nav');
const aboutBtn = document.querySelector('#about-nav');
const buyBtn = document.querySelector('#buy-nav');
const heroBtn = document.querySelector('#button-hero');
const menuScroll = document.querySelector('.nav__menu');
const menuElementScroll = document.querySelectorAll('.nav__link')
const burgerScroll = document.querySelector('.nav__burger');
const burgerLineScroll = document.querySelectorAll('.nav__line');

// Title Sections

const collectionTitle = document.querySelector('.collection');
const aboutTitle = document.querySelector('.about');
const buyTitle = document.querySelector('.contact');

collectionBtn.addEventListener('click', scroll);
heroBtn.addEventListener('click', scroll);
aboutBtn.addEventListener('click', scroll);
buyBtn.addEventListener('click', scroll);


function scroll(e) {
    e.preventDefault();
    
    if (e.target.id === 'collection-nav' || e.target.id === 'button-hero') {
        collectionTitle.scrollIntoView({
            behaviour: 'smooth'
        })
    } else if (e.target.id === 'about-nav') {
        aboutTitle.scrollIntoView({
            behaviour: 'smooth'
        })
    } else {
        buyTitle.scrollIntoView({
            behaviour: 'smooth'
        })
    }

    if(burgerScroll.classList.contains('nav__burger-active')) {
        burgerScroll.classList.toggle('nav__burger-active');
        menuScroll.classList.toggle('nav__menu-active');
    
        for (const line of burgerLineScroll) {
            line.classList.toggle('nav__line-active');
        }
    
        for (const element of menuElementScroll) {
            element.classList.toggle('nav__link-active');
        }
    }


    
}

