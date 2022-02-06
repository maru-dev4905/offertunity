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

    if(stickyCheck == "projectSticky"){
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
    }else if(stickyCheck == "companySticky"){
        if(
            $(".company-content2").offset().top
            - $("header").innerHeight()
            - $(".project-tab").innerHeight()
            - 20
            <= 
            $(window).scrollTop()
        ){
            $(".project-tab li").removeClass("active");
            $(".project-tab li").eq(0).addClass("active");
        }
        if(
            $(".company-content3").offset().top
            - $("header").innerHeight()
            - $(".project-tab").innerHeight()
            - 20
            <= 
            $(window).scrollTop()
        ){
            $(".project-tab li").removeClass("active");
            $(".project-tab li").eq(1).addClass("active");
        }
        if(
            $(".company-content4").offset().top
            - $("header").innerHeight()
            - $(".project-tab").innerHeight()
            - 20
            <= 
            $(window).scrollTop()
        ){
            $(".project-tab li").removeClass("active");
            $(".project-tab li").eq(2).addClass("active");
        }
        if(
            $(".company-content5").offset().top
            - $("header").innerHeight()
            - $(".project-tab").innerHeight()
            - 20
            <= 
            $(window).scrollTop()
        ){
            $(".project-tab li").removeClass("active");
            $(".project-tab li").eq(3).addClass("active");
        }
    }else{
        return false;
    }
});

var stickyCheck;

if($("body.projectDetail").length == 1){
    stickyCheck = "projectSticky";
    console.log(stickyCheck);
}else if($("body.startupSingle").length == 1){
    stickyCheck = "companySticky";
}else{
    stickyCheck = false;
}