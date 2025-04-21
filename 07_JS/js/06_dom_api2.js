// HTML에서 해당 요소를 검색해 찾은 모든 요소를 반환
const boxEls = document.querySelectorAll(".box");

console.log(boxEls); // 찾은 요소의 리스트 반환
// => 앞에서 사용한 DOM API를 바로 사용할 수 없음

// forEach() Method 사용: 배열에서 각 요소에 대한 반복 처리를 수행
// 인수로 반복을 돌면서 꺼내온 요소를 처리하는 함수를 작성
// 처리 함수 작성 시 매개변수 순서(현재 가져온 요소, 요소의 인덱스)가 중요
boxEls.forEach((boxEl, index) => {
  console.log(index, boxEl);
  
  // boxEl.classList.add("order-" + (index + 1));
  boxEl.classList.add(`order-${(index + 1)}`);
});

// 요소의 내용 확인 밎 수정
const boxEl = document.querySelector(".box");
console.log(boxEl.textContent);

boxEl.textContent = "CHANGE!!"
console.log(boxEl.textContent);
// (참고) innerHTML: HTML 태그까지 조작 / 삽입하고 싶을 때
boxEl.innerHTML = "<b>CHANGE!!</b>"

