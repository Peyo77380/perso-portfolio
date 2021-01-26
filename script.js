'use strict';

function displayIntro() {
    let introBlock = document.querySelector('.intro');

    introBlock.classList.remove('closed');
}

function burgerButtonOnClick() {
    
    this.parentNode.classList.toggle('active');
}

function hideMenu() {
    let header = document.querySelector('header');
    header.classList.remove('active');
}


function displayRequestedPage(targetPage, pagesArray){
    let targetId = targetPage.split('#')[1];

    let existingPage = false;

    for(let page of pagesArray) {
        if(page.id === targetId) {
            existingPage = true;
            page.classList.remove('noDisplay');
            setTimeout(() => page.classList.remove('hidden'), 500);

        }
    }

    if (!existingPage) {
        window.location.href = "https://www.pierreguichard.com/404.html";
    }
}


function hidePages(pagesArray) {
    

    for (let page of pagesArray) {
        page.classList.add('noDisplay');
        page.classList.add('hidden');
    }
}

function transitionLayer(){
    let transitionContainer = document.querySelector('.jsTrans');

    for(let i = 0; i<6; i++){
        let transitionLayer = document.createElement('div');
        transitionLayer.animationDelay = `${i*0.25}s`;
        transitionContainer.appendChild(transitionLayer);
    }

    setTimeout(() => {
        transitionContainer.innerHTML= "";

    }, 6*250+0.75);
     

}

function transitionAnimation () {
    let targetPage = this.href;
    let pagesArray = Object.values(document.querySelectorAll('section'));

    hidePages(pagesArray);

    transitionLayer();

    displayRequestedPage(targetPage, pagesArray);


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

        link.addEventListener('click', transitionAnimation);
    }
}

function init() {
    
    window.scrollTo(0,0);
    setEventListeners();
    
    let intro = document.querySelector('.intro');
    if (intro.classList.contains('hidden') || intro.classList.contains('noDisplay')){
        intro.classList.remove('noDisplay');
        intro.classList.remove('hidden');
    }

    setTimeout(displayIntro ,1000);

}




document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', setEventListeners);

