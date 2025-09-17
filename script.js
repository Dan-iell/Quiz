const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Nikola Tesla", "Galileo", "Albert Einstein"],
    answer: "Albert Einstein",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const messageEl = document.getElementById("message");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  optionsEl.innerHTML = "";
  messageEl.textContent = "";

  if (currentQuestion < quizData.length) {
    let q = quizData[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsEl.appendChild(button);
    });
  } else {
    questionEl.textContent = "Quiz Completed!";
    scoreEl.textContent = `Your final score is ${score}/${quizData.length}`;
  }
}

function checkAnswer(selected) {
  let correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    messageEl.textContent = "Correct!";
    messageEl.style.color = "green";
    score++;
  } else {
    messageEl.textContent = `Wrong! Correct answer: ${correct}`;
    messageEl.style.color = "red";
  }
  scoreEl.textContent = `Score: ${score}`;
  currentQuestion++;
  setTimeout(loadQuestion, 1500);
}

loadQuestion();


