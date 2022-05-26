$(document).ready(function(){
    $( ".pimenton" ).click(function() {
        $( ".pimenton" ).each(function() {
          $( this ).toggleClass( "zoom" );
        });
    });

    $( ".Zucchini" ).click(function() {
        $( ".Zucchini" ).each(function() {
          $( this ).toggleClass( "zoom-left" );
        });
    });
})