'use strict';

function displayIntro() {
    let introBlock = document.querySelector('.intro');

    introBlock.classList.remove('closed');
}

function burgerButtonOnClick() {
    
    this.parentNode.classList.toggle('active');
}

function hideMenu(){
    let header = document.querySelector('header.active');

    if(!header) {
        return;
    }

    header.classList.remove('active');
}

function displayRequestedPage () {

    console.log(window.pageYOffset);
    let href = this.href;
    let requestPage = href.split('#')[1];   
    let pages = Object.values(document.querySelectorAll('section'));
    
    let existingPage = false;

    for (let page of pages) {
     
        page.classList.add('hidden');
        
        if (page.id === requestPage){
            page.classList.remove('hidden');
            existingPage = true;
        }
    }

    window.scrollTo(0,0);
    if (!existingPage){
        alert('la page nexiste pas');
    } 

}

function setEventListeners () {
    let menuLinks = document.querySelectorAll('nav ul a');

    if (window.innerWidth < 688 || screen.width < 688) {
        let burgerButton = document.querySelector('.burger');
        burgerButton.addEventListener('click', burgerButtonOnClick);
    
        for (let link of menuLinks) {
            link.addEventListener('click', hideMenu);
            
        }
    }

    for(let link of menuLinks) {

        link.addEventListener('click', displayRequestedPage);
    }
}

function init() {
    
    
    setEventListeners();
        
    
    

    setTimeout(displayIntro ,1000);

}




document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', setEventListeners);

function urlHandler () {
    console.log(window.location.href)
}

urlHandler();