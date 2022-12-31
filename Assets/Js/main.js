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