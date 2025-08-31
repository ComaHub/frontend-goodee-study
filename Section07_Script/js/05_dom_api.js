// querySelector('CSS 선택자') => HTML에서 해당 요소 검색 후 첫 번째 요소 하나만 반환 / 찾지 못하면 Null 반환
const boxEl = document.querySelector(".box");
console.log(boxEl);


// element에 Event listener 등록하기
// Event: click, scroll, keydown 등 다양함
// addEventListener(): 해당 요소에 지정한 event가 발생하는지 듣고(listen)있다가, 발생하면 연결된 함수(handler) 실행

boxEl.addEventListener("click", () => {
  console.log("Clicked!!");

  // classList: HTML element의 class에 대한 제어 명령 포함
  // 추가하기
  boxEl.classList.add("active"); // 요소에 active라는 class 추가

  // 확인하기
  let hasActive = boxEl.classList.contains("active");
  console.log(hasActive);

  // 제거하기
  boxEl.classList.remove("active"); // 요소에 active라는 class가 있으면 제거

  hasActive = boxEl.classList.contains("active");
  console.log(hasActive);

  // 토글하기
  // if (boxEl.classList.contains("on")) {
  //   boxEl.classList.remove("on");
  // } else {
  //   boxEl.classList.add("on");
  // }
  
  boxEl.classList.toggle("on");
});

// 용례: active라는 class에 미리 style 지정 후, click한 특정 element에 style 적용할 때

// 참고 링크
// 이벤트 종류: https://www.w3schools.com/jsref/dom_obj_event.asp (<-- 한 번 정도 슥 읽어볼 것!)
// HTML DOM 속성/메소드: https://www.w3schools.com/jsref/dom_obj_document.asp