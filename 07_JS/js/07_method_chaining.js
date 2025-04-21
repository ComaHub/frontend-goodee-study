// Method Chaining: 여러 메소드를 이어서 작성
const a = "He-llo-IT";

// Method Chaining을 사용하지 않으면
const b = a.split("");
console.log(b);

b.reverse();
console.log(b);

const c = b.join("");
console.log(c);

const e = a.split("").reverse().join("");
console.log(e);

// 정리: 분리해서 작성하면 코드가 길어짐 => 필요에 따라 Method Chaining을 사용

// split: 문자를 인수를 기준으로 쪼개서 배열로 반환
// reverse: 배열의 순서를 뒤집음
// join: 배열을 인수를 기준으로 병합해 문자열로 반환