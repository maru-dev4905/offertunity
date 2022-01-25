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

    if(stickyCheck){
        if(
            $(".project-tab-content li").eq(0).offset().top
            - $("header").innerHeight()
            - $(".sub-header").innerHeight()
            - $(".project-tab").innerHeight() 
            <= 
            $(window).scrollTop()
        ){
            $(".project-tab li").removeClass("active");
            $(".project-tab li").eq(0).addClass("active");
        }
        if(
            $(".project-tab-content li").eq(1).offset().top
            - $("header").innerHeight()
            - $(".sub-header").innerHeight()
            - $(".project-tab").innerHeight() 
            <= 
            $(window).scrollTop()
        ){
            $(".project-tab li").removeClass("active");
            $(".project-tab li").eq(1).addClass("active");
        }
        if(
            $(".project-tab-content li").eq(2).offset().top
            - $("header").innerHeight()
            - $(".sub-header").innerHeight()
            - $(".project-tab").innerHeight() 
            <= 
            $(window).scrollTop()
        ){
            $(".project-tab li").removeClass("active");
            $(".project-tab li").eq(2).addClass("active");
        }
    }else{
        return false;
    }
});

var stickyCheck;

if($("body.projectDetail").length == 1){
    stickyCheck = true;
    console.log(stickyCheck);
}else{
    stickyCheck = false;
}