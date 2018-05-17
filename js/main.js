;(function() {
  var buttonMenu = document.querySelector('.btn-toggle-menu'),
      menuGlobal = document.querySelector('.menu-swiper-global');

  // Global slider
  var gSwiper = new Swiper('.swiper-global', {
    speed: 700,
    pagination: {
      el: '.g-swiper-pagination',
      type: 'fraction',
      
    },
    navigation: {
      nextEl: '.g-swiper-button-next',
      prevEl: '.g-swiper-button-prev',
    },
  });

  // Mini slider (slide #5)
  var mSwiper = new Swiper('.swiper-mini', {
    init: false,
    autoplay: {
      delay: 2000,
    },
    loop: true,
    speed: 700,
    pagination: {
      el: '.m-swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.m-swiper-button-next',
      prevEl: '.m-swiper-button-prev',
    },
  });

  // first slide == index 0
  gSwiper.on('slideChange', function () {
    if (gSwiper.activeIndex !== 4) {
      mSwiper.autoplay.stop(); 
      return;
    }
    mSwiper.init();
    mSwiper.autoplay.start();
  });

  buttonMenu.addEventListener('click', function() {
    menuGlobal.classList.toggle('show');
  });

})();