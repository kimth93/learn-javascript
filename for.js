for (let i = 0; i < 5; i++) {
  console.log();
}

const greeting = (username) => {
  console.log(`안녕하세요, ${username}님!`);
};

const students = ["철수", "영희", "민수", "지영"];

for (let i = 0; i < students.length; i++) {
  greeting(students[i]);
}

students.forEach((name, idx) => {
  console.log(name);
});

const names = ["alice", "bob", "charlie", "david"];
const starNames = names.map((name) => {
  return name + "⭐️";
});

console.log(starNames);

//filter 배열에서 조건에 맞는 요소만 추출하여 새로운 배열을 만드는 메서드
const filteredNames = names.filter((name) => name.length >= 5);

console.log(filteredNames);

//find 배열에서 조건에 맞는 요소를 찾아 반환하는 메서드
const findNames = names.find((name) => name.length >= 5);

console.log(findNames);

//some 배열에서 조건에 맞는 요소가 하나라도 있는지 확인하는 메서드
const someName = names.some((name) => name.length >= 5);
console.log(someName);

//every 배열에서 모든 요소가 조건에 맞는지 확인하는 메서드
const everyName = names.every((name) => name.length >= 5);
console.log(everyName);

//spread syntax
const mbtiTypes = ["INTP", "ENFP", "ISTP"];

const todoItem = {
  id: 123,
  todo: "자바스크립트 공부하기",
  isComplete: false,
};
const setTodoList = {
  ...todoItem,
  memo: "매일 30분씩 공부하기",
  isComplete: true,
};

console.log(setTodoList);
