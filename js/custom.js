window.addEventListener('load', () => {
  // header language클릭시 다른 언어 list 보이기
  const currentLanguage = document.querySelector('.header__utill .language__btn');
  const languageLists = document.querySelector('.language__lists');
  const mCurrentLanguage = document.querySelector('.m-nav .language__btn');
  const mLanguageLists = document.querySelector('.m-nav .language__lists');
  const ariaList = ["aria-expanded", "aria-pressed"];
  let languageAriaState = false;
  let mobileLanguageAriaState = false;
  
  const toggleAriaState = (element, ariaState) => {
    ariaList.forEach(aria => {
      element.setAttribute(aria, ariaState ? "false" : "true");
    });
    return !ariaState;
  };
  
  currentLanguage.addEventListener('click', () => {
    languageLists.classList.toggle("block");
    languageAriaState = toggleAriaState(currentLanguage, languageAriaState);
  });
  
  mCurrentLanguage.addEventListener('click', () => {
    mLanguageLists.classList.toggle('block');
    mobileLanguageAriaState = toggleAriaState(mCurrentLanguage, mobileLanguageAriaState);
  });

  // gnb hover시 서브메뉴창 보이기
  const mainMenu = document.querySelectorAll('.gnb__link');
  const subMenu = document.querySelectorAll('.lnb');
  const lastLnb = document.querySelector(".lastLnb")
  const setActiveMenu = (item) => {
    const activeMenu = document.querySelectorAll(".pc-nav-wrapper .active-menu");
    if(activeMenu.length !== 0) {
      activeMenu.forEach((active) => {
        active.classList.remove("active-menu");
      })
      item.classList.add("active-menu");
    } else {
      item.classList.add("active-menu");
    }
  }
  mainMenu.forEach((item) => {
    ["mouseenter", "focus"].forEach((event) => {
      item.addEventListener(event, () => {
        setActiveMenu(item)
      })
    })
    item.addEventListener("mouseleave", () => {
      item.classList.remove("active-menu");
    })
  })
  subMenu.forEach((item) => {
    ["mouseenter", "focus"].forEach((event) => {
      item.addEventListener(event, () => {
        item.previousElementSibling.classList.add("active-menu");
      })
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

  lastLnb.addEventListener('blur', () => {
    document.querySelector('.active-menu').classList.remove('active-menu');   
  })

  //제목 눌렀을때 해당 컨텐츠 보이기
  const setActiveContent = (titleSelector, textSelector, activeHeadingClass, activeContentClass) => {
    const titles = document.querySelectorAll(titleSelector);
    const contents = document.querySelectorAll(textSelector);
    titles.forEach((item, idx) => {
      item.addEventListener("click", () => {
        document.querySelector(`.${activeHeadingClass}`).classList.remove(activeHeadingClass);
        item.classList.add(activeHeadingClass);
        document.querySelector(`.${activeContentClass}`).classList.remove(activeContentClass);
        contents[idx].classList.add(activeContentClass);
      })
    })
  }
  //notice 제목 누르면 컨텐츠 보이기
  setActiveContent(".notice__title", ".notice__text", "active-notice-heading", "active-notice")
  //reports 제목 누르면 컨텐츠 보이기
  setActiveContent(".reports__title", ".reports__content", "active-reports-heading", "active-report");
  //news section 제목 누르면 컨텐츠 보이기
  setActiveContent(".news__title", ".news__content", "active-news-heading", "active-news");
  // policy-sns section 제목 누르면 컨텐츠 보이기
  setActiveContent(".policy-sns__title", ".policy-sns__content", "active-policy-heading", "active-policy");;

  // 제목 눌렀을때 해당 버튼에 aria-selceted="true"로 변경
  const setHeadingAria = (element, activeClass) => {
    const elements = document.querySelectorAll(`.${element}`);
    const subHeadings = document.querySelectorAll(`.${element} .sub-heading`);

    const updateAriaValue = (idx, state) => {
      subHeadings[idx].setAttribute("aria-selected", state ? true : false);
    }

    elements.forEach((element, idx) => {
      updateAriaValue(idx, element.classList.contains(activeClass));

      element.addEventListener("click", () => {
        subHeadings.forEach((subHeading, subIdx) => updateAriaValue(subIdx, false));
        updateAriaValue(idx, element.classList.contains(activeClass))

      })
    })
  }
  setHeadingAria("notice__title", "active-notice-heading");
  setHeadingAria("reports__title", "active-reports-heading");
  setHeadingAria("news__title", "active-news-heading");
  setHeadingAria("policy-sns__title", "active-policy-heading")

  // 슬라이드 포커스 조절
  function setSlideFocus(element) {
    const slideConts = document.querySelectorAll(`.${element} .swiper-slide`);
    console.log(slideConts)
    slideConts.forEach(slide => {
      slide.addEventListener("focus", (e) => {
        const activeSlide = document.querySelector("swiper-slide-active");
        e.target.classList.contains("swiper-slide-active") ? null : activeSlide.focus
      })
    })
  }
  setSlideFocus("main");
  setSlideFocus("news")
  
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

  const swiper1 = new Swiper(".news-slider", {
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
  

  const swiper2 = new Swiper(".notice__slider", {
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
  
  const swiper3 = new Swiper(".policy__slider", {
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

  const swiper4 = new Swiper(".sns__slider", {
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

  const swiper5 = new Swiper(".relevant-slider", {
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

  function disableSlide(element) {
    element.setAttribute("aria-hidden", true);
    element.setAttribute("tabindex", -1)
  }
  function ableSlide(element) {
    element.setAttribute("aria-hidden", false);
    element.setAttribute("tabindex", 0)
  }
  const swiperArray = [swiper1, swiper2, swiper3, swiper4, swiper5];
  swiperArray.forEach((swiper) => {
    const sliderCont = document.querySelectorAll(".swiper-slide")
    sliderCont.forEach(slide => {
      slide.classList.contains("swiper-slide-active") ? null : disableSlide(slide)
    })
    swiper.on("transitionStart", () => {
      const activeSlide = document.querySelectorAll(".swiper-slide-active");
      sliderCont.forEach(item => {
        disableSlide(item)
      });
      activeSlide.forEach(item => {
        ableSlide(item)
      });
    })
  })
})