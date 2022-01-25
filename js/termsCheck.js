var termsAllCheckbox = $("#terms-checkbox01");
var termsCheckbox = $(".terms-container input[type='checkbox']");

termsAllCheckbox.click(function(){
    if(termsAllCheckbox.is(':checked')){
        termsCheckbox.prop('checked',true);
    }else{
        termsCheckbox.prop('checked',false);
    }
});