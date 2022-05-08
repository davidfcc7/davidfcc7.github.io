$(document).ready(() => {
    $('.diseno-menu').click(() => {
        $('.list-menu').toggleClass('active');
    })

    $('.icono-home-cart').click(() => {
        $('.cart-products').toggleClass('active');
    })
})