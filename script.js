var startButton = document.querySelector(".start-button");
var questionTitle = document.getElementById("questionTitle");
var questionContainer = document.getElementById("questions");
var Heading = document.querySelector(".Heading");
var nextButton = document.querySelector(".nextButton");
var backButton = document.querySelector(".backButton");
var Choices = document.getElementById("choices");

let currentQuestionIndex;

startButton.addEventListener("click", showButtons);
// nextButton.addEventListener("click", nextQuestion);
// backButton.addEventListener("click", backQuestion);

function showButtons() {
    console.log("Show Buttons!");
    questionContainer.classList.remove("hide");
    Heading.classList.add("hide");
    currentQuestionIndex = 0;
    startQuiz(questions[currentQuestionIndex]);
}

function startQuiz(question) {
    console.log("Starting Quiz!");
    questionTitle.innerHTML = question.question;
    console.log(question.options);
    let optionsSeparated = question.options.split(" ");

    console.log(optionsSeparated);
    question.options.forEach((element) => {
        var optionButtons = document.createElement("button");
        optionButtons.innerText = element.text;
        optionButtons.addEventListener("click", userChoice);
        Choices.appendChild(optionButtons);
    });
}

function userChoice() {
    console.log("User Choice!");
}

var questions = [
    {
        question: "Brains or Brawn?",
        options: ["Brains", "Brawn"],
        answer: "",
    },
    {
        question: "Optomist or Pessimist?",
        options: ["Optomist", "Pessimist"],
        answer: "",
    },
    {
        question: "Forgiving or Vengeful?",
        options: ["Forgiving", "Vengeful"],
        answer: "",
    },
    {
        question: "Patient or Impulsive?",
        options: ["Patient", "Impulsive"],
        answer: "",
    },
];
