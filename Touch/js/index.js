$(function(){
	$("#footlist li").on("tap",function(){
		$(this).addClass("active").siblings().removeClass("active")
	});
	
})
