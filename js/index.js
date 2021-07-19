$(".slider").slick({
    arrows:false, /*false 화살표 사라짐*/
    dots: true, /* false 인디게이터 사라짐*/
    infinite: true,
    slidesToShow: 1, // 화면에 보여지는 칸 수
    slidesToScroll: 1, //슬라이드 움직이는 칸 수
    autoplay:true, //자동슬라이드 _ 마우스올리면 멈춤.
    autoplayspeed:400,
    fade: true,
    cssEase: 'linear'
  });