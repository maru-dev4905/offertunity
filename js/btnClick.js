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

$(".company-tab-btn").click(function(){
    var th = $(this);
    var thIndex = th.parent().index();

    window.scrollTo({
        top: $(`.company-content${thIndex + 2}`).offset().top
            - $("header").innerHeight()
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

$(".newslatter #newslatterEmailInput").focus(function(){
    $(".newslatter .col").addClass("active");
});

$(".menu-open-btn").click(function(){
    $(".menu").addClass("active");
});

$(".menu-close-btn").click(function(){
    $(".menu").removeClass("active");
});


// 지원사업 관리 눌렀을 때

var superintendOpenBtn      = $(".superintend-open-btn");
var superintendCloseBtn     = $(".superintend-close-btn");
var superintendContent      = $(".superintend-content");
var dim                     = $(".dim");

superintendOpenBtn.click(function(){
    superintendContent.addClass("active");
    dim.addClass("active");
});

superintendCloseBtn.click(function(){
    superintendContent.removeClass("active");
    dim.removeClass("active");
});