var selectCont = $(".select-cont");

selectCont.click(function(){
    var th = $(this);

    if(th.hasClass("show")){
        th.removeClass("show");
    }else{
        th.addClass("show");
    }
});

var selectBtn = $(".select-cont .select-btn");

selectBtn.click(function(){
    var th = $(this);
    var thText = $(this).text();

    th.parent().siblings(".select-current").find("span").text(thText);
});