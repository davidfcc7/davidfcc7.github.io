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
    const tableProductsCart = document.createElement("div");
    //variable para colocar el html dentro de un string literal
    const tableProductCartHtml = 
    `
    <div class="details">
        <h1>${productTitle}</h1>
        <div class="shoppingCartItem">
            <img src=${productImg} alt="" width="50" height="50">
            <p class="productPriceCart">${productPrice}</p>
            <input type="number" name="" id="units-product-cart" class="units-product-cart" value="1">
            <button class="delete-product">🗑</button>
        </div>
    </div>         
    `;

    //colocar el html desntro de la variable donde se llamo la tabla
    tableProductsCart.innerHTML = tableProductCartHtml;
    //colovar la varibale con la tabla contenida en el la etiqueta padre donde van los detalles del producto
    containerTableDetailsProducts.appendChild(tableProductsCart);
    //creacion de una funcion para actualizar el precio total de los productos agregados al carrito
    updateShoppingCartTotal();
}

function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.total-price-products');
  
    const shoppingCartItems = document.querySelectorAll('div.details');
  
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.productPriceCart');
      console.log(shoppingCartItemPriceElement);

      const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.units-product-cart');
      const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `$ ${total.toFixed(2)}`;
  }


/* function buyProductWhatsapp (){
    window.location.href = 'https://wa.me/5713058804870/?text=' + ' ' + containerTableDetailsProducts;
} */


