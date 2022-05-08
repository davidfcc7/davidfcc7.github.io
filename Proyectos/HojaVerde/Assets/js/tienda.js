const buttonAddToCart = document.querySelectorAll('.add-to-cart');
//foreach para hacer una funcion por cada boton
buttonAddToCart.forEach((button) => { 
    //agregar el evento click al button
    button.addEventListener('click', addToCartClicked);
});
//cada vez que se llame un event listener habrá un parametro evento en la funcion
function addToCartClicked(event){
    //captura el target del boton
    const button = event.target;
    //captura el target de la calse completa con sus componentes
    const product = button.closest('.product');
    //captura el texto que esta dentro de la clase title-product dentro de la clase producto
    const productImg = product.querySelector('.img-product').src;
    const productTitle = product.querySelector('.title-product').textContent;
    const productPrice = product.querySelector('.pice-product').textContent;
}
