// if문 대체 ||
var done = true;
var message = '';

// if 문 : 조건이 true일 때
if (done) message = '정답';

// 논리곱(&&) 값 할당
meessage = done && '정답';

// if문 대체 ||
var done = false;
var msg = '';

// if 문 : 조건이 false일 때
if (!done) msg = '오답';

// 논리합(||) 값 할당
msg = done || '오답';

// if else 는 삼항 연산자로 대체
if (done) message = '정답'; 
else message = '오답'; 

message = done ? '정답' : '오답'; 

