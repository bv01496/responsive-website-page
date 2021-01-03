const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburger')
const body = document.querySelector('body')
const closemenu = document.querySelector('.bxs-chevrons-left')

navleft = menu.getBoundingClientRect().left
hamburger.addEventListener("click",()=>{
    if(navleft < 0){
        menu.classList.add('show')
        menu.querySelector('.nav-list').style.overflow = "auto"
        body.classList.add('show')
        document.querySelector('body').style.overflowY ="hidden";
    }
})
closemenu.addEventListener("click",()=>{
    if(navleft < 0){
        menu.classList.remove('show')
        body.classList.remove('show')
        document.querySelector('body').style.overflowY ="auto";
    }

})
gsap.from('.hero-img',{opacity:0,duration:1,delay:1,x:40})
gsap.from('.header-content >h2,.header-content >h1',{opacity:0,duration:1,delay:.5,y:-20})
gsap.from('.header-content > .btn',{opacity:0,duration:1,delay:1.5,y:20})
gsap.from('.nav-list',{opacity:0,duration:1,delay:1.5,y:20})