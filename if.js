console.log("if");
const score = 85;

// if (score >= 60) {
//   console.log("합격");
// } else {
//   console.log("불합격");
// }

//else if
let grade = "A";
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "D";
}

score >= 60 ? console.log("합격") : console.log("불합격");

console.log(`당신의 학점은 ${grade}등급 입니다.`);
