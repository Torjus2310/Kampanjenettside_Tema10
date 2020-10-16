let textIn = document.querySelector ('.textIn');
let textIn2 = document.querySelector ('.textIn2');
let h = window.innerHeight;
let scrollPos = window.scrollY;
let bottle = document.querySelector('.bottle');
let frame = 0;

console.log('height',h)
console.log(scrollPos)


window.on


window.addEventListener('scroll', (event)=>{
        if(scrollY > scrollPos){
                console.log(scrollY)

                bottle.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -310px);"
                frame += .25;
                if(frame > 8) frame = 0  
        }
   
    })





/*
window.addEventListener('scroll', () => {

        textIn.classList.add ('fade-in-element')
    
               
}
})

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    
    if ( scrollY < 1300) {
        
        textIn2.classList.add ('fade-in-element')
               
}
})*/


