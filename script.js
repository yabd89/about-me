$( document ).ready(function() {
    $(".project-section-image").on("mouseover", function(){
        $(this).addClass("swing animated");
        $(this)
    }).on("mouseout", function(){
        $(this).removeClass("swing animated");
    })
    
});