var emailPopup = $(".emailPopup");
var dim = $(".dim");

var emailCertifiedBtn = $(".certified-btn");

emailCertifiedBtn.click(function(){
    emailPopup.addClass("show");
    dim.addClass("active");
});

var emailPopupCloseBtn = $(".emailPopup .popup-close-btn");

emailPopupCloseBtn.click(function(){
    emailPopup.removeClass("show");
    dim.removeClass("active");
});


var alarmOpenBtn = $("button.alarm");
var alarmCloseBtn = $("button.alarm-popup-close-btn");
var alarmPopup = $(".alarm-popup");
var alarmPopupOpenCheck = false;

alarmOpenBtn.click(function(){
    alarmPopup.addClass("show");
    dim.addClass("active");

    alarmPopupOpenCheck = true;
});

alarmCloseBtn.click(function(){
    alarmPopup.removeClass("show");

    alarmPopupOpenCheck = false;
});

dim.click(function(){
    if(alarmPopupOpenCheck){
        alarmPopup.removeClass("show");
        dim.removeClass("active")
    }
});