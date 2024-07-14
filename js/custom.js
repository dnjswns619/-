window.addEventListener('load', () => {
  // header language클릭시 다른 언어 list 보이기
  const currentLanguage = document.querySelector('.language__item--default');
  const languageLists = document.querySelector('.utill__link--language');
  const mCurrentLanguage = document.querySelector('.m-nav .current-language');
  const mLanguageLists = document.querySelector('.m-nav .utill__link--language');
  currentLanguage.addEventListener('click', () => {
    languageLists.classList.toggle("block");
  })
  mCurrentLanguage.addEventListener('click', () => {
    mLanguageLists.classList.toggle('block');
  })

  // gnb hover시 서브메뉴창 보이기
  const mainMenu = document.querySelectorAll('.gnb__item--link');
  const subMenu = document.querySelectorAll('.lnb');
  const searchBtn = document.querySelector('.search__btn');
  mainMenu.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const activeMenu = document.querySelectorAll(".pc-nav-wrapper .active-menu");
      if(activeMenu.length !== 0) {
        activeMenu.forEach((active) => {
          active.classList.remove("active-menu");
        })
        item.classList.add("active-menu");
      } else {
        item.classList.add("active-menu");
      }
    })
    item.addEventListener("focusin", () => {
      const activeMenu = document.querySelectorAll(".pc-nav-wrapper .active-menu");
      if(activeMenu.length !== 0) {
        activeMenu.forEach((active) => {
          active.classList.remove("active-menu");
        })
        item.classList.add("active-menu");
      } else {
        item.classList.add("active-menu");
      }
    })
    item.addEventListener("mouseleave", () => {
      item.classList.remove("active-menu");
    })
  })
  subMenu.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.previousElementSibling.classList.add("active-menu");
    })
    item.addEventListener("focusin", () => {
      item.previousElementSibling.classList.add("active-menu");
    })
    item.addEventListener("mouseleave", () => {
      const activeMenu = document.querySelectorAll(".pc-nav-wrapper .active-menu");
      if(activeMenu.length !== 0) {
        activeMenu.forEach((active) => {
          active.classList.remove("active-menu");
        })
      }
    })
  })

  searchBtn.addEventListener('focusin', () => {
    document.querySelector('.active-menu').classList.remove('active-menu');   
  })

  //notice-reports section 제목 누르면 컨텐츠 보이기
  //notice
  const noticeTitle = document.querySelectorAll('.notice__title');
  const noticeText = document.querySelectorAll('.notice__text');
  noticeTitle.forEach((item, idx) => {
    item.addEventListener('click', () => {
      document.querySelector('.active-notice-heading').classList.remove('active-notice-heading');
      item.classList.add('active-notice-heading');
      document.querySelector('.active-notice').classList.remove('active-notice');
      noticeText[idx].classList.add('active-notice');
    })
  })

  //reports
  const reportsTitle = document.querySelectorAll('.reports__title');
  const reportsText = document.querySelectorAll('.reports__content');
  reportsTitle.forEach((item, idx) => {
    item.addEventListener('click', () => {
      document.querySelector('.active-reports-heading').classList.remove('active-reports-heading');
      item.classList.add('active-reports-heading');
      document.querySelector('.active-report').classList.remove('active-report');
      reportsText[idx].classList.add('active-report');
    })
  })

  //news section 제목 누르면 컨텐츠 보이기
  const newsTitle = document.querySelectorAll('.news__title');
  const newsText = document.querySelectorAll('.news__content');
  newsTitle.forEach((item, idx) => {
    item.addEventListener('click', () => {
      document.querySelector('.active-news-heading').classList.remove('active-news-heading');
      item.classList.add('active-news-heading');
      document.querySelector('.active-news').classList.remove('active-news');
      newsText[idx].classList.add('active-news');
    })
  })

  // policy-sns section 제목 누르면 컨텐츠 보이기
  const policySnsTitle = document.querySelectorAll('.policy-sns__title');
  const policySnsText = document.querySelectorAll('.policy-sns__content');
  policySnsTitle.forEach((item, idx) => {
    item.addEventListener('click', () => {
      document.querySelector('.active-policy-heading').classList.remove('active-policy-heading');
      item.classList.add('active-policy-heading');
      document.querySelector('.active-policy').classList.remove('active-policy');
      policySnsText[idx].classList.add('active-policy');
    })
  })
  
  // mobile-menu 컨텐츠 보이기
  const mobileTrigger = document.querySelector('.m-nav__trigger');
  mobileTrigger.addEventListener('click', () => {
    document.body.classList.add('active-m-menu');
  })
  // mobile-menu 닫기
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    document.body.classList.remove('active-m-menu');
  })

  var swiper1 = new Swiper(".news-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 8700,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 화면의 넓이가 320px 이상일 때
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // 화면의 넓이가 640px 이상일 때
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
  });
  let swiperPlay = document.querySelector('.main-slide .swiper-button-play');
  let swiperStop = document.querySelector('.main-slide .swiper-button-stop');
  swiperStop.addEventListener('click', () => {
    swiper1.autoplay.stop();
    swiperStop.style.display = 'none';
    swiperPlay.style.display = 'block';
  })
  swiperPlay.addEventListener('click', () => {
    swiper1.autoplay.start();
    swiperStop.style.display = 'block';
    swiperPlay.style.display = 'none';
  })
  

  var swiper2 = new Swiper(".notice__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 화면의 넓이가 320px 이상일 때
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // 화면의 넓이가 640px 이상일 때
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
  });
  let swiperPlay2 = document.querySelector('.news .swiper-button-play');
  let swiperStop2 = document.querySelector('.news .swiper-button-stop');
  swiperStop2.addEventListener('click', () => {
    swiper2.autoplay.stop();
    swiperStop2.style.display = 'none';
    swiperPlay2.style.display = 'block';
  })
  swiperPlay2.addEventListener('click', () => {
    swiper2.autoplay.start();
    swiperStop2.style.display = 'block';
    swiperPlay2.style.display = 'none';
  })
  
  var swiper3 = new Swiper(".policy__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 화면의 넓이가 320px 이상일 때
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  var swiper4 = new Swiper(".sns__slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".policy-sns .swiper-button-next",
      prevEl: ".policy-sns .swiper-button-prev",
    },
    breakpoints: {
      // 화면의 넓이가 320px 이상일 때
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    observer: true,	// 추가
    observeParents: true,	// 추가
  });

  var swiper5 = new Swiper(".relevant-slider", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".relevant .swiper-button-next",
      prevEl: ".relevant .swiper-button-prev",
    },
    breakpoints: {
      // 화면의 넓이가 320px 이상일 때
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      535: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
})