$(document).ready(function(){

  var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 7000
    },
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //swiper active
  var swiperadd = $('.title-slide').addClass('swiper-slide-active')
  if(swiperadd === true){
    $('.swiper-head').addClass('active')
    $('.title-slide').siblings().children('.swiper-head').removeClass('active')
  }else{}

  //header-btn
  $('.header-btn').click(function(){
    $('.menu-box').toggleClass('active');
    $(this).toggleClass('active');
  });

  //menu
  $(function(){
    $('.menu a').click(function(){
      $('html, body').animate({scrollTop : $(this.hash).offset.top},1000);
      $('.menu-box').addClass('active');
      

      var menuhas = $('.menu-box').hasClass('active');
      if(menuhas == true){
        $('.header-btn').removeClass('active');
        $('.menu-box').removeClass('active')

      }else{
        $('.header-btn').addClass('active');
        $('.menu-box').addClass('active')

      }
    });
  });
    
  //브라우저 오픈시 작동
  $('#intro .show').addClass('active');

  //skill animation
  $(window).scroll(function(){
    var sct = $(window).scrollTop();
    console.log(sct);

    //intro animation
    var introT = $('#intro').offset().top;
    if(sct == introT){
      $('#intro .show').addClass('active');
    }else{
      $('#intro .show').removeClass('active');
    }

    var skillT = $('#skill').offset().top;
    if(sct == skillT ){
      $('.skill-svg .circle').addClass('active');
    }else{
      $('.skill-svg .circle').removeClass('active');
    }

    //contact animation
    var contactT = $('#contact').offset().top;
    if(sct == contactT){
      $('#contact .show').addClass('active');
    }else{
      $('#contact .show').removeClass('active');
    }
  });

  //skill tab-menu
  $('.skill-svg li').hover(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    var result = $(this).attr('data-alt');

    $('.tabs li').removeClass('active');
    $(`#${result}`).addClass('active');
  });


  var ww = $(window).width();
  media();

  function media(){
    if(ww > 500){
      //fullpage
      new fullpage('#wrap', {
        anchors: ['firstPage','secondPage','3rdPage','4rdPage','5rdPage','6rdPage'],
        scrollBar: true
      });
    }else{}
  }

  
  
}); //end
