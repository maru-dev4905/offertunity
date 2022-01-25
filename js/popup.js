var emailPopup = $(".emailPopup");
var dim = $(".dim");

var emailCertifiedBtn = $(".certified-btn");

emailCertifiedBtn.click(function(){
    emailPopup.addClass("show");
    dim.addClass("show");
});

var emailPopupCloseBtn = $(".emailPopup .popup-close-btn");

emailPopupCloseBtn.click(function(){
    emailPopup.removeClass("show");
    dim.removeClass("show");
});


var alarmOpenBtn = $("header .alarm");
var alarmPopup = $(".alarm-popup");
var alarmPopupOpenCheck = false;

alarmOpenBtn.click(function(){
    alarmPopup.addClass("show");
    dim.addClass("show");

    alarmPopupOpenCheck = true;
});

dim.click(function(){
    if(alarmPopupOpenCheck){
        alarmPopup.removeClass("show");
        dim.removeClass("show")
    }
});