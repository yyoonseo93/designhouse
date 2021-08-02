
function init(){
//start
const menuTri = document.querySelector('.menu-trigger'); //span3개
const menuNav = document.querySelector('.menu-burg'); //메뉴팝업

menuTri.addEventListener('click',function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
    
});
 //container-2
  const conSub1 = document.querySelector('.con-sub1');
  const button = document.querySelectorAll('.button a');
  
  let res,tagList='',tagList2='',idx=0,num=0;
  fetch('./json/data.json')
    .then(res => res.json())
    .then(data => callback(data));

  function callback(data){
      data.container2.forEach(function(v,k){
          tagList += `
                <div class="item">
                    <div class="left">
                        <h2><strong>${v.logo}</strong></h2>
                        <p>
                            <strong>${v.tit}</strong>
                            ${v.detail}
                        </p>
                        <a href="living.html"><strong>${v.link}</strong></a>
                    </div>
                    <div class="right">
                        <a class="Img" href="living.html"><img src="${v.img}" alt="livingimg"></a>
                    </div>
                </div>`;
      });
      conSub1.innerHTML = tagList;
  }
  for(let i=0; i<button.length; i++){
    button[i].addEventListener('click',function(){
      if(i == 1){
        if(idx < 2) idx++;
      }else{
          if(idx > 0) idx--;
      } 
      let con = conSub1.offsetWidth * idx;
      conSub1.style = `transform:translateX(${-con}px)`; 
    });
  }
//container-1 slider
  $(".slider").slick({
    arrows:false, /*false 화살표 사라짐*/
    dots: true, /* false 인디게이터 사라짐*/
    infinite: true,
    slidesToShow: 1, // 화면에 보여지는 칸 수
    slidesToScroll: 1, //슬라이드 움직이는 칸 수
    autoplay:true, //자동슬라이드 _ 마우스올리면 멈춤.
    autoplayspeed:400,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        }
      }
    ]
  });
//container-2 slider
  $(".conSub slider").slick({
    arrows:false, /*false 화살표 사라짐*/
    dots: false, /* false 인디게이터 사라짐*/
    infinite: true,
    slidesToShow: 1, // 화면에 보여지는 칸 수
    slidesToScroll: 1, //슬라이드 움직이는 칸 수
    autoplay:true, //자동슬라이드 _ 마우스올리면 멈춤.
    autoplayspeed:300,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:false
        }
      }
    ]  
  });

//end
}
window.onload = init;