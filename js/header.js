
$(window).scroll(function(){
    if($(window).scrollTop() >= 100){
        
        if($(".sub-header").length == 1){
            $(".sub-header").addClass("scroll");
        }else{
            $("header").addClass("scroll");
        }
    }else{
        
        if($(".sub-header").length == 1){
            $(".sub-header").removeClass("scroll");
        }else{
            $("header").removeClass("scroll");
        }
    }
});