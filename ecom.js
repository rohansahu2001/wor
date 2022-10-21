const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const hero = document.getElementById('hero');


if(bar){
    bar.addEventListener('click',()=>{  
    nav.classList.add('active');
    
    })
}
if(hero){
hero.addEventListener('click',()=>{

nav.classList.remove('active');

})
}
if(close){
    close.addEventListener('click',()=>{
    
    nav.classList.remove('active');
    
    })
    }