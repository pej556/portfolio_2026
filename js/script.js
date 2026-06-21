
//ScrollGiveClass 호출
var sgc1 = new ScrollGiveClass("header",{
    baseline :100 //화면을 100px 내려가면 클래스가 부여되게함
});


//Swiper 플러그인 호출
const swiper1 = new Swiper('.swiper', {
    // Optional parameters
    //wrapperClass:'slider', //wrapperClass를 slider로 바꿤
    //slideClass:'view',
    loop : true,
    autoplay: { 
      delay:3000, 
    },
     effect: 'fade',
    fadeEffect: {
        crossFade: true, 
    },
    speed:800, //슬라이드가 전환되는(움직이는) 시간
    spaceBetween:10, //슬라이드 사이간격


    // If we need pagination
    pagination: {
      el: '.pager', //버튼영역 대상
      bulletActiveClass:'active', //활성화된 요소에 추가되는 클래스
      clickable:true, //클릭시 슬라이드 전환
    },
  });




  //프로젝트 링크 팝업창
  $('#project .pp').click(function(e){

    e.preventDefault();

    let idx = $(this).index();

    $('.project_click').show();

    $('.project_click li').hide();
    $('.project_click li').eq(idx).show();

});

$('.close').click(function(){

    $('.project_click').hide();
    $('.project_click li').hide();

});


 
