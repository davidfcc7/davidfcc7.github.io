$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $(this).toggleClass('active');
			$('.container--menu-nav').toggleClass('active');
    })

	/* $('li.icon').click(function(){
		$(this).toggleClass('active');
		$('.container-submenu').toggleClass('active');
	}) */

	$('li.icon').click(function(){
		$(this).toggleClass(function(index){
			return "active" + (index+1);
		});
	})
});