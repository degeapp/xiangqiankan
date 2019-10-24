$(function(){
     var len  = $(".num > li").length;
     var index = 0;
     var adTimer;
     $(".num li").mouseover(function(){
        index  =   $(".num li").index(this);
        showImg(index);
     }).eq(0).mouseover();  
     //婊戝叆 鍋滄鍔ㄧ敾锛屾粦鍑哄紑濮嬪姩鐢�.
     $('.ad').hover(function(){
             clearInterval(adTimer);
         },function(){
             adTimer = setInterval(function(){
                showImg(index)
                index++;
                if(index==len){index=0;}
              } , 3000);
     }).trigger("mouseleave");
})

// 閫氳繃鎺у埗top 锛屾潵鏄剧ず涓嶅悓鐨勫够鐏墖
function showImg(index){
        var adHeight = $(".banner01 .ad ul li").width();
        $(".slider").stop(true,false).animate({left : -adHeight*index},1000);
        $(".num li").removeClass("on")
            .eq(index).addClass("on");
}






//杩斿洖椤堕儴
$(function(){
	showScroll();
	$('.gotop').click(
        function(){$('html,body').animate({scrollTop:0},500);
    })
	function showScroll(){
		$(window).scroll(function(){
			var s = $(window).scrollTop();
			if( s > 300){
				$('.gotop').fadeIn(100);
			}else{
				$('.gotop').fadeOut(200);
			};
		});
	}
});

//鍩庡競鍒囨崲
$(document).ready(function(){
  $('.city').mousemove(function(){
  $(this).find('em').show();  
  $(this).find('.choice').slideDown();
  });
  $('.city').mouseleave(function(){
  $(this).find('em').hide();  
  $(this).find('.choice').slideUp("");
  });
  
});

//tab鍒囨崲
$(function(){
	$('.daka').each(function() {
        $(this).find('.dk_menu li').eq(0).addClass('active');
		$(this).find('.dk_box .dk_cont').eq(0).show().siblings().hide();
		$(this).find('.dk_menu li').click(
			function(){
				$(this).addClass('on').siblings().removeClass('on');
				$(this).parents('.daka').find('.dk_box .dk_cont').eq($(this).index()).show().siblings().hide();
			}
		)
    });
})

//鎵撳崱鍒楄〃tab鍒囨崲
$(function(){
	$('.pay, .login').each(function() {
        $(this).find('.tab_nav li').eq(0).addClass('active');
		$(this).find('.tab_box .tab_cont').eq(0).show().siblings().hide();
		$(this).find('.tab_nav li').click(
			function(){
				$(this).addClass('active').siblings().removeClass('active');
				$(this).parents('.pay, .login').find('.tab_cont').eq($(this).index()).show().siblings().hide();
			}
		)
    });
})

/*鎴戠殑鍏艰亴鍜岄個璇穞ab鍒囨崲*/
$(function(){
	$('.mycont, .job, .zhong').each(function() {
        //$(this).find('.job_nav li').eq(0).addClass('on');//榛樿绗竴涓猯i涓嶅姞鏍峰紡
		$(this).find('.job_box .job_cont').eq(0).show().siblings().hide();
		$(this).find('.job_nav li').click(
			function(){
				$(this).addClass('on').siblings().removeClass('on');
				$(this).parents('.mycont, .job, .zhong').find('.job_box .job_cont').eq($(this).index()).show().siblings().hide();
			}
		)
    });
})


//瑕嗙洊鏁翠綋
function shadboxFun(objId,no){
	
	var obj = "#"+objId;  //瀵硅薄ID
	if(no == undefined){
      no = 0;
	}
	$('.popbox-container').eq(no).fadeIn();
	$('.popbox-overlay').css({
		"height": $(document).height() + 'px'
	})
	
	var _height = $(obj).height();
	var _width = $(obj).width();
	
	//鑾峰彇瀵硅薄璺濈绐楀彛涓婇儴鍜屽乏閮ㄧ殑璺濈
	var _top = ($(window).height() - _height)/2 + "px";
	var _left = ($(window).width() - _width)/2 + 'px';
	$(obj).css({"left":_left});
	
	$(obj).animate({
		opacity: 'show', top: _top
	}, "200",function(){
		var userAgent = window.navigator.userAgent.toLowerCase();
		var version = $.browser.version;
		
		if(version!="6.0"){//濡傛灉鏄潪IE6
			$(obj).css({
				"top": ($(window).height() - _height)/2 + 'px'
			});
		}
		if(version=="6.0"){//濡傛灉IE6
			$(obj).css({
				"top": ($(window).height() - _height)/2 + $(window).scrollTop() + 'px'
			});
		}
	});
		
	$('.popbox-close').click(function(){
		$(this).parents('.popbox-wrapper').animate({
			opacity: 'hide',top: '0px'
		}, "slow");
		
		$('.popbox-container').fadeOut();				
	})
	
	$('.popbox-overlay').click(function(){
		$(this).siblings('.popbox-wrapper').animate({
			opacity: 'hide',top: '0px'
		}, "slow");
		
		$('.popbox-container').fadeOut();				
	})
}


var index = 0;
function qiehuan(type){
 var total = $("#mosaic-slideshow ul li").size() - 1;
 
 $("#mosaic-slideshow ul li").each(function(){
	if($(this).css('display') != 'none'){
	    index = $(this).index();
		
	}
  })
  
		
  if(type == 'next'){
			
	if(index < total){
		index ++;
	}else{
		index = 0;
	}
			  
  }else{
	if(index == 0){
		index = total;
	}else{
		index --;
	}
  }	
  $("#mosaic-slideshow ul li").css('display','none');
  $("#mosaic-slideshow ul li").eq(index).css('display','block');
}
	