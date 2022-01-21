
$(window).scroll(function(){
    if($(window).scrollTop() >= 100){
        $("header").addClass("scroll");
    }else{
        $("header").removeClass("scroll");
    }
});