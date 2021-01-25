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

function transitionAnimation () {
    let main = document.querySelector('main');
    let transitionContainer = document.querySelector('.jsTrans');
    
    main.classList.add('hidden');
    
    let transitionDivs = [];
    for (let i = 0; i<6; i++){
        transitionDivs.push(document.createElement('div'));
        if(i%2 === 0){
            transitionDivs[i].style.backgroundColor= "red";
        }

        transitionDivs[i].style.animationDelay = `${i*.25}s`;
        transitionDivs[i].style.animationDuration = `${0.8+i/6}s`;
        transitionContainer.appendChild(transitionDivs[i]);
    }
    transitionContainer.classList.add('full');

    setTimeout(() => {    
        main.classList.remove('hidden');        
        transitionContainer.innerHTML = '';
        transitionContainer.classList.remove('full');
    }, 2883);

    

}
function displayRequestedPage () {
    let href = this.href;
    let requestPage = href.split('#')[1];   
    let pages = Object.values(document.querySelectorAll('section'));
    
    let existingPage = false;
    transitionAnimation();
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
        
    
    let intro = document.querySelector('.intro');
    if (intro.classList.contains('hidden')){
       intro.classList.remove('hidden');
    }

    setTimeout(displayIntro ,1000);

}




document.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', setEventListeners);

