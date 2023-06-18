var x = 10;

// 명시적 타입 변환
// 숫자 > 문자열로 타입 캐스팅
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아님
console.log(typeof x, x);	// number 10


// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 갑슬 바탕으로 새로운 문자열을 새성
var str = x + '';
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아님
console.log(typeof x, x);	// number 10