

$(document).ready(function() {

    var windowWidth = $(window).width();
    console.log(windowWidth);
    
    if(windowWidth > 768) {
        $(".project-section-image").on("mouseover", function(){
            $(this).addClass("swing animated");
            $(this)
        }).on("mouseout", function(){
            $(this).removeClass("swing animated");
        })
    }
    
});