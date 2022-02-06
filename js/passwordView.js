var viewBtn = $(".password-view-btn");

viewBtn.click(function(){
    if($(this).hasClass("show")){
        $(this).removeClass("show");
        $(this).prev().attr("type","password");
    }else{
        $(this).addClass("show");
        $(this).prev().attr("type","text");
    }
});