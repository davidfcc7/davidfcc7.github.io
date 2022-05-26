$(document).ready(function(){
    $( ".img-product" ).click(function() {
        $( ".img-product" ).each(function() {
          $( this ).toggleClass( "zoom" );
        });
    });
});