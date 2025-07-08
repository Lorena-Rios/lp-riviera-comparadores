document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.mySwiper', {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    },
    breakpoints: {
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      }
    }
  });
});