let textIn = document.querySelector ('.textIn');
let textIn2 = document.querySelector ('.textIn2');
let h = window.innerHeight;
let scrollPos = window.scrollY;
let bottle = document.querySelector('.bottle');
let frame = 0;
let green = document.querySelector ('.green')

console.log('height',h)
console.log(scrollPos)




window.addEventListener('scroll', (event)=>{
        if(scrollY > scrollPos){
                console.log(scrollY)

                bottle.style.cssText = "background-position-x: calc("+ Math.floor(frame) +" * -310px);"
                frame += .25;
                if(frame > 8) frame = 0  
        }
   
    })







window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if ( window.scrollY > 257 ) {

            textIn.classList.add ('fade-in-element')
    }
})

window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if ( window.scrollY > 1025 ) {

            textIn2.classList.add ('fade-in-element')
    }
})


window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    
    if ( window.scrollY > 1900 ) {

            green.classList.add ('greenFill')
    }
})


