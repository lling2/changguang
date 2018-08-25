//Class
$(function(){
	var a=0;
	$(".startCourse_tabNav>ul>li").click(function(){
			a=$(this).index();
			$(".startCourse_summary").hide();
			$(".tab").hide();
			$(".tab").eq(a).show();
			$(".startCourse_summary").eq(a).show();
			$(".startCourse_tabNav>ul>li>div:last-child").removeClass("starCourse_line");
			$(".startCourse_tabNav>ul>li>div:last-child").eq(a).addClass("starCourse_line");
		});
})
//course-detail
$(function(){
	$(".text_hide").click(function(){
		if($(this).html()=="[查看全部]"){
			$(this).parent().find(".limit").addClass("autoHeight");
			$(this).html("[收起]");
		}else{
			$(this).parent().find(".limit").removeClass("autoHeight");
			$(this).html("[查看全部]");
		}
	})
});
//student
window.onload=function(){
	$(".gratitude_contents_item").click(function(){
		var new_title=$(this).find(".title").text();
		var new_subtitle=$(this).find(".subtitle").text();
		var new_discription=$(this).find(".discription").text();
		var new_pic=$(this).find(".pic img").attr("src");
		var Big_Width=$(document).width();
		var Small_Width=$(".gratitude_details").width();
		var left_width=(Big_Width-Small_Width)/2;
		$(".gratitude_modal-mask").show();
		$(".gratitude_details").show();
		var top=$(window).scrollTop();
		$(".gratitude_details .subtitle").text(new_subtitle);
		$(".gratitude_details .title").text(new_title);
		$(".gratitude_details .discription").text(new_discription);
		$(".gratitude_details .pic").find("img").attr("src",new_pic);
		$(".gratitude_details").css({"top":top+150+'px',"left":left_width+'px'});	
		$(window).scroll(function(){
			var top=$(window).scrollTop();
			$(".gratitude_details").css({"top":top+150+'px',"left":left_width+'px'});	
		})
		$(".gratitude_details .off").click(function(){
			$(".gratitude_modal-mask").hide();
			$(".gratitude_details").hide();
		})
	})	
}
//work
$(function(){
    $("#star_dl1").mouseover(function(){
        $("#star_cont_dls_Blue1").css("height",40);
    })
    $("#star_dl1").mouseout(function(){
        $("#star_cont_dls_Blue1").css("height",0);
    })
    $("#star_dl2").mouseover(function(){
        $("#star_cont_dls_Blue2").css("height",40);
    })
    $("#star_dl2").mouseout(function(){
        $("#star_cont_dls_Blue2").css("height",0);
    })
    $("#star_dl3").mouseover(function(){
        $("#star_cont_dls_Blue3").css("height",40);
    })
    $("#star_dl3").mouseout(function(){
        $("#star_cont_dls_Blue3").css("height",0);
    })
    $("#star_dl4").mouseover(function(){
        $("#star_cont_dls_Blue4").css("height",40);
    })
    $("#star_dl4").mouseout(function(){
        $("#star_cont_dls_Blue4").css("height",0);
    })
    $("#star_dl5").mouseover(function(){
        $("#star_cont_dls_Blue5").css("height",40);
    })
    $("#star_dl5").mouseout(function(){
        $("#star_cont_dls_Blue5").css("height",0);
    })
    $("#star_dl6").mouseover(function(){
        $("#star_cont_dls_Blue6").css("height",40);
    })
    $("#star_dl6").mouseout(function(){
        $("#star_cont_dls_Blue6").css("height",0);
    })
})
//adventage
$(document).ready(function(){
	$(".advantage_menu a").eq(0).addClass("current");
	$(".advantage_menu a").click(function(){
		$(".advantage_menu a").eq(0).removeClass("current");
		$(".advantage_menu a").removeClass("add-class");
		$(this).addClass("add-class");
		$(".advantage_menu a").css("color","#333");
		$(this).css("color","#ee4747");
	});
})
//index
$(document).ready(function(){
	
	$(".class_list").each(function(i){
		$(".class_list").eq(i).mouseover(function(){
			$(".submenu").hide();
			$(".submenu").eq(i).show();				
		})
		$(".class_list").eq(i).mouseout(function(){
			$(".submenu").hide();
		})

	})
})

//学员风采
$(document).ready(function(){

	$(".more").each(function(i){
		var add=true;
		$(".more").eq(i).click(function(){
			if(add){
				$(".description").eq(i).css({"height":"auto","overflow":"visible"});
				add=false;
			}else{
				$(".description").eq(i).css({"height":"34px","overflow":"hidden"});
				add=true;
			}
		});
		
		
	})
})

