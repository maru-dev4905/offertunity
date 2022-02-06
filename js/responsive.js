var newslatter = $(".newslatter");

var winW = $(window).innerWidth();

$(window).resize(function(){

    winW = $(window).innerWidth();
    if(winW <= 768){
        // mo
        newslatter.find("#newslatterNameInput").attr("placeholder","이름");
        newslatter.find("#newslatterEmailInput").attr("placeholder","이메일 주소");
        $("header.header-style2 .header-right a span").text("나가기");
        $("header.header-style2 .header-right a.home-link span").text("");
    }else{
        // pc
        newslatter.find("#newslatterNameInput").attr("placeholder","이름을 입력해주세요");
        newslatter.find("#newslatterEmailInput").attr("placeholder","이메일 주소를 입력해주세요");
        $("header.header-style2 .header-right a span").text("워크스테이션에서 나가기")
        $("header.header-style2 .header-right a.home-link span").text("기업 홈으로");
    }
});

if(winW <= 768){
    // mo
    newslatter.find("#newslatterNameInput").attr("placeholder","이름");
    newslatter.find("#newslatterEmailInput").attr("placeholder","이메일 주소");
    $("header.header-style2 .header-right a span").text("나가기")
    $("header.header-style2 .header-right a.home-link span").text("");
}else{
    // pc
    newslatter.find("#newslatterNameInput").attr("placeholder","이름을 입력해주세요");
    newslatter.find("#newslatterEmailInput").attr("placeholder","이메일 주소를 입력해주세요");
    $("header.header-style2 .header-right a span").text("워크스테이션에서 나가기")
    $("header.header-style2 .header-right a.home-link span").text("기업 홈으로");
}