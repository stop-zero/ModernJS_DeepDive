// Symbol
// ES6 에서 추가된 7번째 타입으로 변경 불가능한 원시 타입 중 하나
// 심벌은 고유한 식별자를 생성해 자바스크립트에서 이름 충돌을 방지하고 프로퍼티의 의미를 명확

//  - 고유한 심벌
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false

// - 객체의 프로퍼티 키
const obj = {
  [sym1]: 'value',
};
console.log(obj[sym1]); // 'value'
