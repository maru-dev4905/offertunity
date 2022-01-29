var textarea = $("form textarea");

textarea.on("propertychange change keyup paste input", function() {
    var currentVal  = $(this).val();
    var length      = currentVal.length;

    $(this).next().find("span").text(length);
});


$("input[type='file']").on('change',function(){
    var th = $(this);

    
    if(th.hasClass("multiple-fileInput")){
        if(th[0].files.length >= 5){
            alert("파일 갯수가 5장을 넘었습니다.")
        }else{
            
        }
    }else{
        // console.dir(th)
    }

    if(th.hasClass("companyMainImg-fileInput")){
        // var img = new Image();
        // img.src = th.val();
        // var width = img.width;
        // var height = img.height;

        // console.log(
        //     "width = " + width +
        //     "height = " + height
        // )
    }

    if(th.hasClass("teamImgFileInput")){
        th.siblings("label").css({
            display: "none"
        });
        th.siblings(".fileRemoveBtn").addClass("active")
    }


    if (th[0].files[0].size > (5 * 1024 * 1024)) {
        alert("파일 사이즈가 5MB 를 넘습니다.");
        th.value = null;
    }else{
        var fileName = th.val();
    
        th.siblings("p.upload-name").text(fileName);
    }
});

$("#myStartupModifyForm .fileRemoveBtn").click(function(){
    var th = $(this);

    th.removeClass("active");
    
    th.siblings("p.upload-name").text("대표사진");
    th.siblings("label").css({
        display:"flex"
    })
});