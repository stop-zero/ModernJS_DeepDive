// 객체를 가리키기를 기대하는 변수가 null 또는 undefined 가 아닌지 확인하고 프로퍼티를 참조할 때
const obj = {
  name: 'John',
  age: 30,
};

// 변수가 null 또는 undefined가 아닌 경우에만 프로퍼티 참조
const name = obj && obj.name;
console.log(name); // 'John'

const age = obj && obj.age;
console.log(age); // 30

// 변수가 null 또는 undefined인 경우에는 기본값 사용
const address = (obj && obj.address) || 'Unknown';
console.log(address); // 'Unknown'

// 함수 매개변수에 기본값을 설정할 때
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet('Jung'); // Hello, Jung!

// + 매개변수 기본값은 매개변수 목록 마지막에 위치하는 것이 좋음
function infor(name, address = 'korea', age = getDefault()) {
  // ...
}
