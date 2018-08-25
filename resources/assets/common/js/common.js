$(document).ready(function(){
	$(".search input").focus(function(){
		$(".search input").val("");
		$(".search input").css("color","rgba(244,244,244,1)");				
	})
	$(".search input").blur(function(){
		$(".search input").val("请输入");
		$(".search input").css("color","rgba(244,244,244,.3)");					
	})
})