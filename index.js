//변수
let username = "김태희";
username = "김태희2"; //const로 선언한 변수는 재할당이 불가능하다. (에러 발생)
console.log("username", username);

const num = 10;

console.log("🚀 ~ console:", num, typeof num);

const str = "Hello, World!";
console.log("🚀 ~ str:", str, typeof str);

const bool = true;
console.log("🚀 ~ bool:", bool, typeof bool);

const bool2 = "true";
console.log("🚀 ~ bool2:", bool2, typeof bool2);

const greeting = (username2) => {
  console.log(`안녕하세요 ${username2}님`);
};
greeting("김태희");

const add = (num1, num2) => {
  return num1 + num2;
};
const sum = add(10, 20);

//const doubleSum = (num) => {
//  return num * 2;
//};

doubleSum = (num) => num * 2;

const result = doubleSum(sum);
console.log("🚀 ~ result:", result);

const upperString = (str) => str.toUpperCase();

const result2 = upperString("hello");
console.log("🚀 ~ result2:", result2);
