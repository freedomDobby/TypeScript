// enum Shoes {
//   Nike,
//   Adidas,
// }

//enum의 string
enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

//enum은 기본적으로 number
var myShoes = Shoes.Nike;
console.log(myShoes); //0

//enum의 활용사례
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: string) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}
askQuestion(Answer.Yes);
askQuestion(Answer.No);
// askQuestion("예스");
// askQuestion("y");
// askQuestion("Yes");
