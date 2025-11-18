const questions = [
  {
    text: "HTMLで段落を表すタグはどれ？",
    choices: ["<div>", "<p>", "<h1>", "<span>"],
    answerIndex: 1
  },
  {
    text: "CSSで文字の色を変えるプロパティは？",
    choices: ["font-size", "background-color", "color", "border"],
    answerIndex: 2
  },
  {
    text: "JavaScriptでコンソールに出力する関数は？",
    choices: ["print()", "log()", "console.log()", "alert.log()"],
    answerIndex: 2
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

function showQuestion() {
  const q = questions[currentIndex];
  const questionElem = document.getElementById("question");
  const choicesElem = document.getElementById("choices");
  const resultElem = document.getElementById("result");
  const nextBtn = document.getElementById("nextBtn");

  questionElem.textContent = q.text;
  choicesElem.innerHTML = "";
  resultElem.textContent = "";
  nextBtn.classList.add("hidden");
  answered = false;

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.className = "choice-btn";
    btn.addEventListener("click", () => selectAnswer(index));
    choicesElem.appendChild(btn);
  });
}

function selectAnswer(index) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const resultElem = document.getElementById("result");
  const nextBtn = document.getElementById("nextBtn");

  if (index === q.answerIndex) {
    resultElem.textContent = "正解！";
    score++;
  } else {
    resultElem.textContent = "不正解… 正解は「" + q.choices[q.answerIndex] + "」";
  }

  if (currentIndex < questions.length - 1) {
    nextBtn.textContent = "次の問題へ";
    nextBtn.classList.remove("hidden");
  } else {
    nextBtn.textContent = "結果を表示";
    nextBtn.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");

  nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      showQuestion();
    } else {
      const resultElem = document.getElementById("result");
      resultElem.textContent = "終了！スコア：" + score + " / " + questions.length;
      nextBtn.classList.add("hidden");
      document.getElementById("choices").innerHTML = "";
    }
  });

  showQuestion();
});
