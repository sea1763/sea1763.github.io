// default configuration settings
var cfg = {
  title: 'CPJ Design',
  footer_text: 'DESIGN BY Ciou Pei Jhen(CPJ design).',
  page: '',
  rpath: '.',
  topbtn: 'scrollTOP'
};

function generate_header()
{
  var page = cfg.page;
  var title = cfg.title;
  var rpath = cfg.rpath;

  /* output */
  document.write('<title>'+title+'</title>');
  document.write('<link href="'+rpath+'/favicon.ico" rel="icon"></link>');
  if (page == 'home')
    document.write('<link href="'+rpath+'/css/style.css" rel="stylesheet" type="text/css">');
  else
    document.write('<link href="'+rpath+'/css/substyle.css" rel="stylesheet" type="text/css">');
  document.write('<link href="'+rpath+'/css/reset.css" rel="stylesheet" type="text/css"></link>');
  document.write('<script type="text/javascript" src="'+rpath+'/js/jquery-1.8.3.min.js"></script>');
  if (page == 'banner' || page == 'graphic_design') {
    document.write('<link href="'+rpath+'/css/simple-lightbox.min.css" rel="stylesheet" type="text/css"></link>');
    document.write('<script type="text/javascript" src="'+rpath+'/js/simple-lightbox.jquery.min.js"></script>');
  }
}

function layout_main_menu()
{
  var rpath = cfg.rpath;
  var html = '';
  var page = cfg.page;
  var flags = ['#ABOUT','#forPortfolio','#CONTACT'];
  if (page == 'home')
    flags = ['','',''];

  html += '<a id="TOPMENU" href="#"><h4 id="BTN">☰</h4></a>';
  html += '<div class="LOGO"><a href="'+rpath+'/index.html"><img src="'+rpath+'/img/LOGO.png"></a></div>';
  html += '<ul id="UL" class="active">';
  html += '  <li';
  if (page == 'home')
    html += ' class="current-active"';
  html += ' id="home"><a href="'+rpath+'/index.html">HOME</a></li>';
  html += '  <li id="about"><a href="'+rpath+'/index.html'+flags[0]+'">關於我</a></li>';
  html += '  <li id="protfolio"';
  if (page != 'home')
    html += ' class="current-active"';
  html += '>';
  html += '    <a id="protfolioMain" href="'+rpath+'/index.html'+flags[1]+'">作品集</a>';
  // submenu - begin
  html += '    <ul class="SUBMENU">';
  html += '      <li><a href="'+rpath+'/projectDesign.html">專案設計</a></li>';
  html += '      <li><a href="'+rpath+'/webDesign.html">網頁設計</a></li>';
  html += '      <li><a href="'+rpath+'/uiuxDesign.html">UI/UX設計</a></li>';
  html += '      <li><a href="'+rpath+'/Banner.html">BANNER設計</a></li>';
  html += '      <li><a href="'+rpath+'/graphicDesign.html">平面設計</a></li>';
  html += '      <li><a href="'+rpath+'/multi-mediaDesign.html">多媒體設計</a></li>';
  html += '    </ul>';
  // submenu - end
  html += '  </li>';
  html += '  <li id="contact"><a href="'+rpath+'/index.html'+flags[2]+'">聯絡我</a></li>';
  html += '</ul>';
  $('.MENU').html(html);
}

function layout_top_btn()
{
  var page = cfg.page;
  var rpath = cfg.rpath;
  var topbtn = cfg.topbtn;
  var html = '';

  if (page != 'home')
    topbtn = cfg.topbtn = 'scrollTOP1';

  html += '<a href="#">';
  html += '  <img src="'+rpath+'/img/top.png">';
  html += '  <p>TOP</p>';
  html += '</a>';
  $('#TOP_BTN').html(html);
  $('#TOP_BTN').addClass(topbtn);
}

function layout_sitemap()
{
  var rpath = cfg.rpath;
  var html = '';

  html += '<div class="maparea">';
  html += '  <div class="title">';
  html += '    <ul>';
  html += '      <li><a href="'+rpath+'/projectDesign.html"><h1 class="pd">專案設計</h1></a></li>';
  html += '      <li><a href="'+rpath+'/webDesign.html"><h1 class="wd">網頁設計</h1></a></li>';
  html += '      <li><a href="'+rpath+'/uiuxDesign.html"><h1 class="uxui">UIUX設計</h1></a></li>';
  html += '      <li><a href="'+rpath+'/Banner.html"><h1 class="bn">BANNER</h1></a></li>';
  html += '      <li><a href="'+rpath+'/graphicDesign.html"><h1 class="gd">平面設計</h1></a></li>';
  html += '      <li><a href="'+rpath+'/multi-mediaDesign.html"><h1 class="md">多媒體設計</h1></a></li>';
  html += '    </ul>';
  html += '  </div>';
  html += '</div>';
  html += '<div class="FOOTER"><p>'+cfg.footer_text+'</p></div>';
  $('#MAP').html(html);
}

function layout_footer()
{
  var html = '';
  html += '<p>'+cfg.footer_text+'</p>';
  $('.FOOTER').html(html);
}

function isMobileWidth() {
  return $('.MENU').css('position') == 'relative';
}

/* home: MENU跑卷軸位置 */
function home_animate_init()
{
  var topbtn = cfg.topbtn;
  var menu_height = 65;
  if (isMobileWidth()) {
    menu_height = 0;
  }

  $('#home,.'+topbtn).click(function () {
    $('html,body').stop(true, false).animate({ scrollTop: 0 }, 1000, 'swing');
    return false;
  });

  $('#about').click(function () {
    $('html,body').stop(true, false).animate({ scrollTop: $('#ABOUT').offset().top - menu_height }, 1000, 'swing');
    return false;
  });

  $('#protfolioMain').click(function () {
    $('html,body').stop(true, false).animate({ scrollTop: $('#forPortfolio').offset().top - menu_height }, 1000, 'swing');
    return false;
  });

  $('#contact').click(function () {
    $('html,body').stop(true, false).animate({ scrollTop: $('#CONTACT').offset().top - menu_height }, 1000, 'swing');
    return false;
  });
      
  /* MENU toggle */
  $('#TOPMENU').click(function () {
    $(this).toggleClass('active');
    $('#UL').toggleClass('active');
  });

  /* MENU 點下去後改樣式*/
  $('.MENU #UL li').click(function () {
    $(this).parent().find('li').each(function () {
      if ($(this).hasClass('current-active')) {
        $(this).toggleClass('current-active');
      }
    });
    $(this).toggleClass('current-active');
  });
}

function onload_simpleLightbox()
{
  /*照片牆*/
  create($('#zoomwall'));
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
}

function load()
{
  var page = cfg.page;

  if (page == 'banner' || page == 'graphic_design')
    onload_simpleLightbox();
}

function ready()
{
  var page = cfg.page;

  // MAIN_MENU
  layout_main_menu();
  // SiteMap
  if (page != 'home')
    layout_sitemap();
  else
    layout_footer();
  // TOP button
  layout_top_btn();

  switch (page)
  {
    case 'home':
      home_animate_init();
      break;
    case 'banner':
    case 'graphic_design':
      $('.gallery a').simpleLightbox({ navText: ['&lsaquo;', '&rsaquo;'] });
      break;
  }

  // Event handle
  $(window).scroll(function(e) {
    var scrollTop = $(window).scrollTop();
    var topbtn = '.'+cfg.topbtn;

    /* home page 變化 */
    if (page == 'home') {
      home_handle_scroll();
    }

    function home_handle_scroll()
    {
      var active_menu = '';
      var menu_height = 65;
      if (isMobileWidth()) {
        menu_height = 0;
      }

      /* 根據位置改變MENU大小 */
      if (scrollTop <= 0) {
        $('.MENU').addClass('at_top');
        $('.LOGO').addClass('at_topLOGO');
      } else {
        $('.MENU').removeClass('at_top');
        $('.LOGO').removeClass('at_topLOGO');
      }

      /* 根據位置判斷MENU顏色 */
      if ((scrollTop + menu_height + 5) >= $('#CONTACT').offset().top || (scrollTop+$(window).height()) >= ($('#CONTACT').offset().top+$('#CONTACT').height())) {
        active_menu = '#contact';
      } else if ((scrollTop + menu_height) >= $('#forPortfolio').offset().top) {
        active_menu = '#protfolio';
      } else if ((scrollTop + menu_height) >= $('#ABOUT').offset().top) {
        active_menu = '#about';
      } else {
        active_menu = '#home';
      }
      // 更新MENU顏色
      $('.MENU ul li').removeClass('current-active');
      $('.MENU ul '+active_menu).addClass('current-active');
    }

    /* TOP button 變化 */
    if (scrollTop > 300) {
      $(topbtn).fadeIn('fast');
    } else {
      $(topbtn).stop().fadeOut('fast');
    }
  });
}
