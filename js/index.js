
function init(){
//start
  const conSub1 = document.querySelector('.con-sub1');
  const button = document.querySelectorAll('.button a');
  
  let res,tagList='',tagList2='',idx=0,num=0;
  fetch('./js/data.json')
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

  $(".conSub slider").slick({
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

//end
}
window.onload = init;