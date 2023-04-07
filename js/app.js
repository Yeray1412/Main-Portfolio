let line = document.querySelector('.line');
let myHeight = document.documentElement.offsetHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', ()=> {
    line.style.height = `${(scrollY*8 / myHeight) * 100}vh`
});

