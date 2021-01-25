'use strict';

console.log('ok');

let intro = document.querySelector('.intro');

setTimeout(function () {
    intro.classList.remove('closed');
}, 2000);


function perspective(e) {
    let customMousePosition = {
        x: (e.clientX - window.innerWidth/2)/20,
        y: (e.clientY - window.innerHeight/2)/20,
    }

    let wrapper = document.querySelector('.intro .wrapper');

    wrapper.style.transition= 'transform .5s ease-out';
    wrapper.style.transform = 
        `rotateY(${customMousePosition.x}deg) 
        rotateX(${customMousePosition.y}deg)`;
        
    let text = wrapper.querySelector('.intro_text');

    text.style.transition= 'all .5s ease-out';
    text.style.transform = `translateX(${customMousePosition.x}px) 
        translateY(${-customMousePosition.y*2}px) `;
    text.style.filter = 'drop-shadow(0 0 20px rgba(0,0,0,0.8))';

    let image = wrapper.querySelector('figure');

    image.style.transition= 'all .5s ease-out';
    image.style.transform = `translateX(${customMousePosition.x}px) 
        translateY(${-customMousePosition.y*2}px) `;
    image.querySelector('img').style.filter = 'drop-shadow(0 0 20px rgba(0,0,0,0.6))';

    


}



function onMouseLeavePerspective () {
    let wrapper = document.querySelector('.intro .wrapper');

    wrapper.style.transition= 'all .5s ease-out';
    wrapper.style.transform = 
        `none`;

    let text = wrapper.querySelector('.intro_text');
    text.style.filter = 'drop-shadow(0 0 10px rgba(0,0,0,0.4))';
    text.style.transition= 'all .5s ease-out';
    text.style.transform = 'none';
    
    let image = wrapper.querySelector('figure');
    image.querySelector('img').style.filter = 'drop-shadow(0 0 10px rgba(0,0,0,0.4))';
    image.style.transition= 'all .5s ease-out';
    image.style.transform = 'none';
}

let hitbox = document.querySelector('.intro .hitBox');
hitbox.addEventListener('mousemove', perspective);
hitbox.addEventListener('mouseleave', onMouseLeavePerspective);