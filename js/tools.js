$(document).ready( function(){
    $('li').click( function(){
        window.color = $(this).attr("id");
    });
});
