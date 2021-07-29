function init(){
    
    const designUl = document.querySelector('.container-3 ul');
    const designLi = document.querySelector('.container-3 ul li');

    function designTab(){
        const designTab = document.querySelectorAll('.container-2 ul li');
        if(localStorage.design != undefined){
            designTab[localStorage.design].classList.add('active');
        }

        for(let i=0; i<designTab.length;i++){
            designTab[i].addEventListener('click',function(e){
                e.preventDefault();
                localStorage.design = i; 
                location.href = this.children[0].href;
            })
        }
    }designTab();

    let tagList='';
    let dataName = 'STYLE';
    switch(localStorage.design){
        case '0': dataName = 'STYLE'; break;
        case '1': dataName = 'LIVING'; break;
        case '2': dataName = 'CULTURE'; break;
    }

    fetch('./json/design.json')
    .then(res => res.json())
    .then(design => callback(design));

    function callback(design){
        design[dataName].forEach(function(v,k){
            
            tagList += `<li>
                        <a href="designstyle.html"><img src="${v.img}" alt="styleimg">
                        <p><strong>${v.tit}<br></strong> ${v.detail}
                        </p></a>
                        </li>`;
        });
        designUl.innerHTML = tagList;
        const img = document.querySelectorAll('.style li');        
        
        for(let i=0; i<img.length; i++){
            img[i].addEventListener('click',function(){
                localStorage.img = i;
            })
        }
    }
}
window.onload = init;

// init() 함수 실행 (곧바로 실행하고 싶을때 괄호()를 붙여요~~~)
// onload = init   //온로드이벤트가 발생하면 실행하는 함수 init