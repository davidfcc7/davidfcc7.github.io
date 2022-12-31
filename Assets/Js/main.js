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

/* funcionalidad del slider con vanilla javascript */

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
        if(i===valorInicial){
            card.style.display='none';
        }
    }
}

updateCarousel()