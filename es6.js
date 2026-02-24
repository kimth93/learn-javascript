const greeting = (username = "사용자") => {
  console.log(`안녕하세요, ${username}님!`);
};

greeting();

greeting("철수");
