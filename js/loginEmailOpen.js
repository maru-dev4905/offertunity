var emailBtn = $(".email-btn");

emailBtn.click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
        $("#loginForm").removeClass("active");
    }else{
        $(this).addClass("active");
        $("#loginForm").addClass("active");
    }
});