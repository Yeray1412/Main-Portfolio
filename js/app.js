let line = document.querySelector('.line');
let myHeight = document.documentElement.offsetHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', ()=> {
    div.style.height = `${(scrollY*8 / myHeight) * 100}vh`
});

