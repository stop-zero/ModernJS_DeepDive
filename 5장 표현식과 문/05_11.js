var x; // 변수 선언문은 값으로 평가 X -> 표현식 X

// 1, 2, 1+2, x=1+2 => 표현식 O, 완전한 문
x = 1 + 2;

//표현식 X => 값 X
//var foo = var x;    // SyntaxError : Unexpected token var

// 할당문은 그 자체가 표현식이지만, 완전한 문이다.
// 할당문 = 표현식
x = 1;

// 표현식인 문은 값처럼 사용 가능
var foo = (x = 1);
console.log(foo); // 1
