var textarea = $("form textarea");

textarea.on("propertychange change keyup paste input", function() {
    var currentVal  = $(this).val();
    var length      = currentVal.length;

    $(this).next().find("span").text(length);
});


$("input[type='file']").on('change',function(){
    var th = $(this);

    if (th[0].files[0].size > (5 * 1024 * 1024)) {
        alert("파일 사이즈가 5MB 를 넘습니다.");
        th.value = null;
    }else{
        var fileName = th.val();
    
        th.siblings("p.upload-name").text(fileName);
    }
});