  
$(window).scroll(function(){

  var scrollTOP = $(window).scrollTop();

  /*MENU 變化*/ 
  if ( scrollTOP <=0)
  {
    $(".MENU").addClass("at_top");
    $(".LOGO").addClass("at_topLOGO");
  }
    else
  {
    $(".MENU").removeClass("at_top");
    $(".LOGO").removeClass("at_topLOGO");
  }

 
  if ( scrollTOP > 300){
    /*scrollTOP出現*/ 
    $(".scrollTOP").fadeIn("fast");
    /*scrollTOP1出現  分頁*/
    $(".scrollTOP1").fadeIn("fast");
  } else {
    $(".scrollTOP").stop().fadeOut("fast");
    
    $(".scrollTOP1").stop().fadeOut("fast");
  }

  
  /*根據位置判斷MENU顏色*/
  if( scrollTOP >= $("#MAIN_BG").offset().top-0 && scrollTOP < $("#ABOUT").offset().top-200){
    $(".MENU #UL li").removeClass("current-active");
    $(".MENU #UL li#home").addClass("current-active")
  }
  else if( scrollTOP >= $("#ABOUT").offset().top-200 && scrollTOP < $("#forPortfolio").offset().top-100){
    $(".MENU #UL li").removeClass("current-active");
    $(".MENU #UL li#about").addClass("current-active")
  }
  else if( scrollTOP >= $("#forPortfolio").offset().top-100 && scrollTOP < $("body").height()-$(window).height()-200){
    $(".MENU #UL li").removeClass("current-active");
    $(".MENU #UL li#protfolio").addClass("current-active")
  }
  else if( scrollTOP >= $("body").height()-$(window).height()-200){
    $(".MENU #UL li").removeClass("current-active");
    $(".MENU #UL li#contact").addClass("current-active")
  }
});




$(function(){
    /* MENU跑卷軸位置 */
    $(".scrollTOP,.scrollTOP1,#home").click(function () {
    $("html,body").stop(true, false).animate({ scrollTop: 0 }, 1000, "swing");
    return false;
      });
    $("#about").click(function () {
        $("html,body").stop(true, false).animate({ scrollTop: $("#ABOUT").offset().top - $(".MENU").height() }, 1000, "swing");
        return false;
      });
    $("#protfolioMain").click(function () {
        $("html,body").stop(true, false).animate({ scrollTop: $("#forPortfolio").offset().top - $(".MENU").height() }, 1000, "swing");
        return false;
      });
    $("#contact").click(function () {
        $("html,body").stop(true, false).animate({ scrollTop: $("#CONTACT").offset().top - $(".MENU").height() }, 1000, "swing");
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