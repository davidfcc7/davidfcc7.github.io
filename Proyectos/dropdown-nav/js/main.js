$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $(this).toggleClass('active');
				$('.container--menu-nav').toggleClass('active');
    })

		$('li.icon').click(function(){
			$(this).toggleClass('active');
	})
});