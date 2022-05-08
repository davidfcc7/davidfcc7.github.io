const buttonAddToCart = document.querySelectorAll('.add-to-cart');
//tabla donde se cargan los productos del carrito
const containerTableDetailsProducts = document.querySelector('.details-products');
/* const listProductsWhatsapp = document.addEventListener('click', buyProductWhatsapp); */
//foreach para hacer una funcion por cada boton
buttonAddToCart.forEach((button) => {
    //agregar el evento click al button
    button.addEventListener('click', addToCartClicked);
});
//cada vez que se llame un event listener habrá un parametro evento en la funcion
function addToCartClicked(event) {
    //captura el target del boton
    const button = event.target;
    //captura el target de la calse completa con sus componentes
    const product = button.closest('.product');
    //captura el texto que esta dentro de la clase title-product dentro de la clase producto
    const productImg = product.querySelector('.img-product').src;
    const productTitle = product.querySelector('.title-product').textContent;
    const productPrice = product.querySelector('.pice-product').textContent;
    //almacenar todos los detalles del producto en una funcion
    addDetailsProduct(productImg, productTitle, productPrice);
}

function addDetailsProduct(productImg, productTitle, productPrice) {
    const tableProductsCart = document.createElement("table");
    //variable para colocar el html dentro de un string literal
    const tableProductCartHtml = 
    `<tr>
        <td><h1>${productTitle}</h1></td>
    </tr>
                
    <tr>
        <td><img src=${productImg} alt="" width="50" height="50"></td>
        <td><p>${productPrice}</p></td>
        <td><input type="number" name="" id="units-product-cart" value="1"></td>
        <td><button class="delete-product">🗑</button></td>
    </tr>`;

    //colocar el html desntro de la variable donde se llamo la tabla
    tableProductsCart.innerHTML = tableProductCartHtml;
    //colovar la varibale con la tabla contenida en el la etiqueta padre donde van los detalles del producto
    containerTableDetailsProducts.appendChild(tableProductsCart);
}

/* function buyProductWhatsapp (){
    window.location.href = 'https://wa.me/5713058804870/?text=' + ' ' + containerTableDetailsProducts;
} */


