$(function() {
    // アニメーションを遅らせる時間
    var anDelayTime = 0.75;
  
    // .an_delay_itemにdelayを追加
    $('.an_delay').each(function(){
      var $anDelayItem = $(this).find('.an_delay_item');
      for (var i = 0; i < $anDelayItem.length; i++) {
        $anDelayItem.eq(i).css({
          animationDelay: i * anDelayTime + 's',
          transitionDelay: i * anDelayTime + 's'
        });
      }
    });
  });
  
  // スクロール時のパララックス
  $(window).on('load scroll', function(){
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    $('.an_true, .an_delay').each(function(){
      var elemPos = $(this).offset().top;
      // コンテンツをフェード表示
      if (scroll > elemPos - windowHeight + 150){
        var anClass = $(this).attr('class');
        if(anClass == "an_delay"){
          // .an_delayの場合は子要素の.an_delay_itemにクラス追加
          $(this).find('.an_delay_item').addClass('scrollin');
        } else {
          $(this).addClass('scrollin');
        }
      }
    });
  });
  