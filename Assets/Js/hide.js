$(document).ready(function(){
    $('.container__button').click(function(){
        $('.element').toggleClass('close');
        $('.more button').toggleClass('close');
        $('.less button').toggleClass('close');
    });
});