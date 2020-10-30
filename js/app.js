  $( document ).ready(function() {
    $( ".thumbnail-wrap .card" ).mouseenter(function() {
        $(this) .addClass( "active");
    });
    $( ".thumbnail-wrap .card" ).mouseout(function() {
        $(this) .removeClass( "active");
    });  
});