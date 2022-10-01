$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $(this).toggleClass('active');
		$('.container--menu-nav').toggleClass('active');
		$('.blur').toggleClass('active');
    })

	$('li.icon.features').click(function(){
		/* $('p.ico.features').toggleClass('active'); */
		$('ul.container-submenu.features').toggleClass('active');
	})

	$('li.icon.company').click(function(){
		/* $('p.ico.company').toggleClass('active'); */
		$('ul.container-submenu.company').toggleClass('active');
	})

	$('li.icon').click(function(){
		$('li.icon ~ p.ico').toggleClass('active');
	})

});