/* funcionalidad de tabs con vanilla javascript */

const tabs__button=document.querySelectorAll('.tabs__button')
const tabs__content=document.querySelectorAll('.tabs__content')

tabs__button.forEach(button=>{
    button.addEventListener('click',()=>{
        const tabContentId=button.dataset.tabContent
        const tabContent=document.getElementById(tabContentId)
        tabs__content.forEach(content=>{
            content.classList.remove('active')
            tabContent.classList.add('active')
        })
    })
})

/* funcionalidad del slider con vanilla javascript (cambia de una vista) */

const card__carousel=document.getElementById('card__carousel')
const prev__button=document.getElementById('prev__button')
const next__button=document.getElementById('next__button')

let valorInicial=0;

prev__button.addEventListener('click',()=>{
    valorInicial--
    if(valorInicial<0){
        valorInicial=card__carousel.children.length-1;
    }
    updateCarousel()
})

next__button.addEventListener('click',()=>{
    valorInicial++
    if(valorInicial>=card__carousel.children.length){
        valorInicial=0
    }
    updateCarousel()
})

function updateCarousel(){
    for(let i=0;i<card__carousel.children.length;i++){
        const card=card__carousel.children[i];
        if(i===valorInicial){
            card.style.display='block';
        }
        else if(i!==valorInicial){
            card.style.display='none';
        }
    }
}

updateCarousel()

/* funcionalidad acordios de experiencia */

var titleExperience = document.querySelectorAll('.title-experience'); 
var contentExperience = document.querySelectorAll('.content-experience'); 

titleExperience.forEach((title) => { 
    title.addEventListener('click', (event) => { 
        event.preventDefault(); 
        var header = event.target; 
        var content = header.nextElementSibling; 
        /* var arrowDown = header.querySelector('.arrow-down'); */ 
        /* var arrowUp = header.querySelector('.arrow-up');  */
        if(content.style.display === 'block'){ 
            content.style.display = 'none'; 
            /* arrowDown.style.display = 'inline-block'; 
            arrowUp.style.display = 'none'; */ 
        }else { 
            contentExperience.forEach((content) => { 
                content.style.display = 'none'; 
            }); 
            /* acordion.forEach((title) =>{ 
                var arrowDown = title.querySelector('.arrow-down'); 
                var arrowUp = title.querySelector('.arrow-up'); 
                arrowDown.style.display = 'inline-block'; 
                arrowUp.style.display = 'none'; 
            }); */ 
            content.style.display = 'block'; 
            /* arrowDown.style.display = 'none'; 
            arrowUp.style.display = 'inline-block';  */
        } 
    }); 
});