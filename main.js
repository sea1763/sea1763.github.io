/*MENU 變化*/ 
$(window).scroll(function(e){
  if ($(window).scrollTop()<=0)
  {
    $(".MENU").addClass("at_top");
    $(".LOGO").addClass("at_topLOGO");
  }
    else
  {
    $(".MENU").removeClass("at_top");
    $(".LOGO").removeClass("at_topLOGO");
  }
});

/*scrollTOP出現*/ 
$(window).scroll(function(e){
  if ($(window).scrollTop()<=500)
  {
    $(".scrollTOP").addClass("scrollTOP1");
  }
    else
  {
    $(".scrollTOP").removeClass("scrollTOP1");
  }
});



$(function(){
  /* MENU跑卷軸位置 */
	$(".scrollTOP,.LOGO,#home").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:0},1000,"swing");
		return false;
		});
		
	$("#about").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:910},1000,"swing");
		return false;
		});
	$("#protfolio").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:1860},1000,"swing");
		return false;
		});
	$("#contact").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:7100},1000,"swing");
		return false;
		});

    /* MENU toggle */
    document.getElementById('TOPMENU').addEventListener('click', function (e) {
       $(this).toggleClass('active');
       $('#UL').toggleClass('active');
    });
    /* MENU 點下去後改樣式*/
        $('.MENU #UL li').click(function () {
        $(this).parent().find('li').each(function () {
            if ($(this).hasClass('current-active')) {
                $(this).toggleClass('current-active');
            }
        })
        $(this).toggleClass('current-active');
    })
})		


/*根據位置判斷MENU顏色*/
$(window).scroll(function(e){
    if($(window).scrollTop()>=$("#MAIN_BG").offset().top-0 && $(window).scrollTop()<$("#ABOUT").offset().top-200){
        $(".MENU #UL li").removeClass("current-active");
        $(".MENU #UL li#home").addClass("current-active")
    }
      else if($(window).scrollTop()>=$("#ABOUT").offset().top-200 && $(window).scrollTop()<$("#forPortfolio").offset().top-100){
        $(".MENU #UL li").removeClass("current-active");
        $(".MENU #UL li#about").addClass("current-active")
      }
      else if($(window).scrollTop()>=$("#forPortfolio").offset().top-100 && $(window).scrollTop()<$("#CONTACT").offset().top-100){
        $(".MENU #UL li").removeClass("current-active");
        $(".MENU #UL li#protfolio").addClass("current-active")
      }
      else if($(window).scrollTop()>=$("#CONTACT").offset().top-2000 ){
        $(".MENU #UL li").removeClass("current-active");
        $(".MENU #UL li#protfolio").addClass("current-active")
      }
})
