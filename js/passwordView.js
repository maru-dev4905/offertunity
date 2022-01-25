var viewBtn = $(".password-view-btn");
var passwordInput = $("#login-pwInput");

viewBtn.click(function(){
    if($(this).hasClass("show")){
        $(this).removeClass("show");
        passwordInput.attr("type","password");
    }else{
        $(this).addClass("show");
        passwordInput.attr("type","text");
    }
});