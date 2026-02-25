const greeting = (username = "사용자") => {
  console.log(`안녕하세요, ${username}님!`);
};

greeting();

greeting("철수");

//논리연산자(And, Or, Not)

const user = {
  isLoggedIn: true,
  role: "admin",
};
//관리자 페이지 접근 코드
if (user.isLoggedIn && user.role === "admin") {
  //로그인 된 상태이면서, role이 admin인 경우 실행
  console.log("관리자 페이지에 접근합니다.");
} else {
  console.log("관리자 페이지에 접근할 수 없습니다.");
}

const person = {
  age: 16,
  isParentPermission: true,
};

const canAccess = person.age >= 18 || person.isParentPermission;

if (canAccess) {
  console.log("접근 가능");
} else {
  console.log("접근 불가능");
}

const adult = person.age >= 18 && "성인";

//구조분해할당
const colors = ["red", "blue", "green"];

const [second, first] = colors;

console.log(first);
console.log(second);

const todoItem = {
  id: 123,
  todo: "react",
  isCompleted: false,
};

const { id, todo } = todoItem;

console.log("id: " + id); // 예상 결과: 123
console.log("todo: " + todo); // 예상 결과: "react"
