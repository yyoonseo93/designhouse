function menu(){
//menu-trigger

const menuTri = document.querySelector('.menu-trigger'); //span3개
const menuNav = document.querySelector('.menu-burg'); //메뉴팝업

menuTri.addEventListener('click',function(){
    this.classList.toggle('active');
    menuNav.classList.toggle('active');
    
});
}
window.onload = menu;