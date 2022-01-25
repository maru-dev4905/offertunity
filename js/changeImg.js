var currentProjectImg = $(".project-representImg img");
var projectImgList = $(".project-subImg li");
var projectImgListBtn = $(".project-subImg li button");

var imgUrl;

projectImgListBtn.click(function(){
    var th = $(this);

    imgUrl = th.find("img").attr("src");

    currentProjectImg.attr("src",imgUrl);

    projectImgList.removeClass("active");
    
    var thIndex = th.parent().index();
    
    projectImgList.eq(thIndex).addClass("active");
});