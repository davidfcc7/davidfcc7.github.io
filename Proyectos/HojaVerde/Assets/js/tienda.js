const buttonAddToCart = document.querySelectorAll('.add-to-cart');
//tabla donde se cargan los productos del carrito

const botonComprar = document.querySelector('.button-buy-whatsapp');
botonComprar.addEventListener('click', botonComprarClicked);


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

    const elementsTitle = containerTableDetailsProducts.getElementsByClassName('shoppingCartItemTitle');

    /* console.log(elementsTitle) */

      for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].textContent === productTitle) {
          let elementQuantity = elementsTitle[i].parentElement.querySelector('.units-product-cart');
          elementQuantity.value++;
          updateShoppingCartTotal();
          return;
        }
      }



    const tableProductsCart = document.createElement("div");
    //variable para colocar el html dentro de un string literal
    const tableProductCartHtml = 
    `
    <div class="details">
        <h1 class="shoppingCartItemTitle">${productTitle}</h1>
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
    //colocar la varibale con la tabla contenida en el la etiqueta padre donde van los detalles del producto
    containerTableDetailsProducts.appendChild(tableProductsCart);
    //llamar el boton de borrar productos
    tableProductsCart.querySelector('.delete-product').addEventListener('click', removeProductCart);
    tableProductsCart.querySelector('.units-product-cart').addEventListener('change', updateUnitsProduct);
    //creacion de una funcion para actualizar el precio total de los productos agregados al carrito
    updateShoppingCartTotal();
}
//funcion de actualizar precio a medida que se agrega un producto
function updateShoppingCartTotal() {
   //valor inicial del total
    let total = 0;
    //campo donde se muestra el total
    const shoppingCartTotal = document.querySelector('.total-price-products');
    //contenedor del producto cargado desde js
    const shoppingCartItems = document.querySelectorAll('div.details');
    //foreach para que cada bloque haga la funcion
    shoppingCartItems.forEach((shoppingCartItem) => {
        //precio del producto cargado en el bloque de js
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.productPriceCart');
        //reemplazar el signo $ por un espacio
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));
        //capturar las unidades del producto mientras se va a gregando al carrito
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.units-product-cart');
        //captura la cantidad de productos con el metodo value 
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        //operacion para sacar el total de los productos agregados
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `$ ${total.toFixed(3)}`;

    /* console.log(shoppingCartItemPriceElement); */
  }
  //funcion de eliminar un producto al dar click en el boton de papelera
  function removeProductCart (event) {
    const buttonClick = event.target;
    buttonClick.closest('div.details').remove();
    updateShoppingCartTotal();
  }

  function updateUnitsProduct (event){
    const changeQuantity = event.target;
    /* if (changeQuantity.value <= 0){
        changeQuantity.value = 1;
    } */
    //si es menos o igual a 0 iguale la variable a 1 si no, no haga nada
    changeQuantity.value <= 0 ? changeQuantity.value = 1 : null;
    updateShoppingCartTotal();
  }

function botonComprarClicked () {
    const productWhatsapp = 'https://wa.me/3058804870/?text=' + containerTableDetailsProducts.textContent;
    console.table(productWhatsapp);
    window.location.href = productWhatsapp
    /* containerTableDetailsProducts.innerHTML = '';
    updateShoppingCartTotal(); */
}


