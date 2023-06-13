// 멀티라인 문자열
//  - 문자열 내에서 줄바꿈 허용X
const str = `I want to leave 
the office.`;

/** 이스케이프 시퀀스
 * \n	    :   개행, Enter
 * \t	    :      tab
 * \', \''	:     따옴표
 * \\	    :    역슬래시
 */

var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

// 결과
{/* <ul>
  <li><a href="#">Home</a></li>
</ul> */}


// 표현식 삽입
//  - 플릿 리터럴 내에서 사용
//  - ${ }으로 표현식을 감쌈
//  - 문자열로 타입이 강제로 변환
var first = "ji young";
var last = "Jung";

// ES5: 문자열 연결
console.log("My name is " + first + " " + last + "."); // My name is jiyoung Jung.

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); // My name is jiyoung Jung.
