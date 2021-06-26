const burger = document.querySelector('.hamburger')
const nav = document.querySelector('nav.mobile');
function burgerActive(){
  burger.addEventListener('click',()=>{
    burger.classList.toggle('is-active');
  
  });
}

function showNav(){
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('show-nav');
  });
}

burgerActive();
showNav();

