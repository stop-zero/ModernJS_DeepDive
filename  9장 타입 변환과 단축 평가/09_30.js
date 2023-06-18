// null 병합 연산자
// ?? 변수 기본값 설정에 유용
const name1 = null;
const name2 = 'Jung';

const result1 = name1 ?? 'Guest';
console.log(result1);  // 'Guest' (name1이 null이므로 오른쪽 피연산자인 'Guest' 반환)

const result2 = name2 ?? 'Guest';
console.log(result2);  // 'Jung' (name2가 null이 아니므로 왼쪽 피연산자인 name2 반환)
