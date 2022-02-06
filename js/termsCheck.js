var termsAllCheckbox = $("#terms-checkbox01");
var termsCheckbox = $(".terms-container input[type='checkbox']");

termsAllCheckbox.click(function(){
    if(termsAllCheckbox.is(':checked')){
        termsCheckbox.prop('checked',true);
    }else{
        termsCheckbox.prop('checked',false);
    }
});

termsCheckbox.click(function(){
    if($(this).attr("id") != "terms-checkbox01"){
        if(termsAllCheckbox.is(":checked")){
            termsAllCheckbox.prop("checked",false)
        }
        if(
            termsCheckbox.eq(1).is(":checked") &&
            termsCheckbox.eq(2).is(":checked") &&
            termsCheckbox.eq(3).is(":checked") 
        ){
            termsAllCheckbox.prop("checked",true)
        }
    }
})