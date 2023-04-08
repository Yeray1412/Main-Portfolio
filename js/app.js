let line = document.querySelector('.line');
let myHeight = document.documentElement.offsetHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', ()=> {
    line.style.height = `${(scrollY*8 / myHeight) * 100}vh`
});

// swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // End swiper