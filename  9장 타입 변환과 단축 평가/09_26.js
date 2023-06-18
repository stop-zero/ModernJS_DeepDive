// 옵셔널 체이닝 연산자
const person = {
  name: 'Jung',
  age: 23,
  address: {
    city: 'korea',
  },
};

const city = person.address?.city;
console.log(city); // 'korea'

const country = person.address?.country;
console.log(country); // undefined (person.address가 존재하지 않으므로)

// 중첩된 메소드 호출에 안전하게 접근
person.sayHello?.(); // person.sayHello가 존재하지 않으므로 에러 발생하지 않고 그냥 멈춤
