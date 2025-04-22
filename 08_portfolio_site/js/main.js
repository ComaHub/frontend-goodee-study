// ScrollMagic 사용

const spyEls = document.querySelectorAll("section.scroll-spy");

const controller = new ScrollMagic.Controller();
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부 감시할 요소 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시 (0 ~ 1)
  })
  .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // controller에 장면을 할당
});

// Swiper 사용
const swiper = new Swiper('.project .swiper', {
  // 슬라이드 옵션 지정
  direction: 'horizontal', // 수평 슬라이드(기본값) / vertical(수직)
  loop: true, // 반복 재생 여부
  autoplay: { // 자동 재생 여부
    delay: 5000 // 기본값 3000
  },

  // Pagination 설정 (하단 버튼)
  pagination: {
    el: '.project .swiper-pagination',
    clickable: true
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  }
});