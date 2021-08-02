function init(){

    const designtext = document.querySelector('.detailtext');
    let text,img,tit,detail,subList='';
    
    fetch('./json/design.json')
    .then(res => res.json())
    .then(design => callback(design));

    function callback(design){
        
    design.DESIGNTEXT.forEach(function(v,k){
            
            if(localStorage.img == k){
                v.forEach(function(v2,k2){
                    if(k2 == 0){
                        text = v2.text;
                        subList += `<li> <div class="main-text"><p>${text}</p></div></li>`;
                    }else{
                        img = v2.img;
                        tit = v2.tit;
                        detail = v2.detail;
                        subList += `<li> <img src="${img}">
                                    <p><strong>${tit}</strong><br>${detail}</p>
                                    </li>`;
                    }
                });
                console.log(subList)
            }
        });
        designtext.innerHTML = subList;
    }
}
window.addEventListener('load',init);
