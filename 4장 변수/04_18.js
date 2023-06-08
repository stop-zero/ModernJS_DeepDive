// 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러기호($)를 포함 
// 숫자로 시작 X
// 문자, 언더스코어(_), 달러기호($)로 시작
// 예약어 X

// 카멜 케이스(camelCase)
var main;

// 스네이크 케이스(snake_case)
var side_bar;

// 파스칼 케이스(PascalCase)
var SideBar;

// 헝가리언 케이스(typeHungarianCase)
var strFirstMan;	// type + identifier
var $elem = document.getElementById("myId");	// Dom 노드
var observable$ = fromEvent(document, "click");	// RxJS 옵저버블