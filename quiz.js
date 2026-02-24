// function add(a, b) {
//   return a + b;
// }

// 여기에 화살표 함수로 다시 작성하세요.
const add = (a, b) => a + b;

console.log(add(5, 3)); // 예상 결과: 8

// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
const minus = (a, b) => a - b;

// 함수 테스트
console.log(minus(60, 20)); // 예상 결과: 40

const introduce = (name, age) => {
  return "안녕하세요, " + name + "님. 당신의 나이는 " + age + "세입니다.";
};

// 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
console.log(introduce("김철수", 25)); // 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다
const orderSandwich = (type = "basic") => {
  if (type == "basic") {
    return "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
  } else if ((type = "vegan")) {
    return "🥖 + 🥬 + 🍅 + 🥑 + 🥒";
  }
};

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich("basic"));
console.log("비건 샌드위치 주문: " + orderSandwich("vegan"));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/

// 여기에 for문을 작성하세요.
for (let i = 5; i > 0; i--) {
  console.log(`예상 출력 : ${i}`);
}
console.log("예상 출력: 5 4 3 2 1");

const numbers = [1, 2, 3, 4, 5];
const incrementedNumbers = numbers.map((number) => number + 1);
console.log(incrementedNumbers);
// 여기에 코드를 작성하세요. // 예상 결과: [2, 3, 4, 5, 6]

const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter((number) => number % 2 === 0); // 여기에 코드를 작성하세요.
console.log(evenNumbers); // 예상 결과: [2, 4, 6]

// 학생들의 정보가 담긴 배열
const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" },
];

// 1. 전공이 "Physics"인 학생을 찾으세요.
const physicsStudent = students.find((student) => student.major == "Physics"); // 여기에 코드를 작성하세요.
console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },

// 2. 이름이 "David"인 학생을 찾으세요.
const davidStudent = students.find((student) => student.name == "David"); // 여기에 코드를 작성하세요.
console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },
