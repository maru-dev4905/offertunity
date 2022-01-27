$(".project-tab-btn").click(function(){
    var th = $(this);
    var thIndex = th.parent().index();

    window.scrollTo({
        top: $(".project-tab-content li").eq(thIndex).offset().top
            - $("header").innerHeight()
            - $(".sub-header").innerHeight()
            - $(".project-tab").innerHeight() 
            + 10
        ,
        behavior: "smooth"
    });
});


$(".bookmark-btn").click(function(){
    var th = $(this);

    if(th.hasClass("active")){
        th.removeClass("active");
    }else{
        th.addClass("active");
    }
});