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

/*照片牆*/
window.onload = function () {
  create($("#zoomwall"));
  function create(blocks) {
    resize(blocks.children().children());
  }
  function resize(blocks) {
    var row = [];
    var top = -1;
    for (var c = 0; c < blocks.length; c++) {
      var block = blocks[c];
      if (block) {
        if (top == -1) {
          top = block.offsetTop;

        } else if (block.offsetTop != top) {
          resizeRow(row, calcRowWidth(row));
          row = [];
          top = block.offsetTop;
        }

        row.push(block);

      }
    }
    resizeRow(row, calcRowWidth(row));
  }
  function resizeRow(row, width) {
    //console.log(row[].naturalWidth);
    if (row && row.length > 1) {
      for (var i in row) {
        row[i].style.width = (parseInt(window.getComputedStyle(row[i]).width, 10) / width * 100) + '%';
        row[i].style.height = 'auto';
      }
    }
  }
  function calcRowWidth(row) {
    var width = 0;
    for (var i in row) {
      width += parseInt(window.getComputedStyle(row[i]).width, 10);
    }
    return width;
  }
};
$(function () {
  var gallery = $('.gallery a').simpleLightbox({ navText: ['&lsaquo;', '&rsaquo;'] });
});