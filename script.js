var Heading = document.querySelector(".Heading");
var startButton = document.querySelector(".start-button");
var questionContainer = document.getElementById("questions");
var questionTitle = document.getElementById("questionTitle");
var Choices = document.getElementById("choices");
var choiceOne = document.getElementById("choice1");
var choiceTwo = document.getElementById("choice2");
var restartButton = document.querySelector(".resetButton");

var brainsBrawn = "1. Brains or Brawn?";

var optimistPessismist = "2. Optimist ot Pessimist?";

var impatientPatient = "3. Patient or Impatient?";

var PersonalOne = [
    {
        question: "4. Which of these do you enjoy the most?",
        answers: [
            { text: "A. Making music", hero: "Miles Morales" },
            { text: "B. Photography", hero: "Peter Parker" },
            { text: "C. Write Stories", hero: "Ms. Marvel" },
        ],
    },
];

var PersonalTwo = [
    {
        question: "4. Where are you most likely to be found?",
        answers: [
            { text: "A. At a fancy party?", hero: "Iron Man" },
            { text: "B. At home writing a screenplay?", hero: "Wasp" },
        ],
    },
];

var PersonalThree = [
    {
        question: "4. Which of these do you dislike?",
        answers: [
            { text: "A. Technology", hero: "Thor" },
            { text: "B. Injustice", hero: "Captain America" },
            { text: "C. Unpreparedness", hero: "Falcon" },
        ],
    },
];

var PersonalFour = [
    {
        question: "4. Where are you most likely to be found?",
        answers: [
            { text: "Home Alone", hero: "Hulk" },
            { text: "Bar", hero: "Wolverine" },
            { text: "Farm", hero: "Thanos" },
        ],
    },
];

Choices.classList.add("hide");
startButton.addEventListener("click", showButtons);

function showButtons() {
    questionContainer.classList.remove("hide");
    Choices.classList.remove("hide");
    Heading.classList.add("hide");
    firstQuestion();
}

// function anyQuestion(log, title, choices, attributes) {
//     console.log(log);
//     questionTitle.innerHTML = title;
//     choiceOne.innerHTML = choices[0];
//     choiceTwo.innerHTML = choices[1];
//     choiceOne.setAttribute("onclick", attributes[0]);
//     choiceTwo.setAttribute("onclick", attributes[1]);
// }

function firstQuestion() {
    console.log("Starting Quiz!");
    questionTitle.innerHTML = brainsBrawn;
    choiceOne.innerHTML = "Brains";
    choiceTwo.innerHTML = "Brawn";
    choiceOne.setAttribute("onclick", "BrainSecondQuestion(this)");
    choiceTwo.setAttribute("onclick", "BrawnSecondQuestion(this)");
}

function BrainSecondQuestion(userSelection) {
    console.log("Brain!");
    questionTitle.innerHTML = optimistPessismist;
    choiceOne.innerHTML = "Optimist";
    choiceTwo.innerHTML = "Pessimist";
    choiceOne.setAttribute("onclick", "BrainsOthirdquestion(this)");
    choiceTwo.setAttribute("onclick", "BrainsPthirdquestion(this)");
}

function BrawnSecondQuestion(userSelection) {
    console.log("Brawn!");
    questionTitle.innerHTML = optimistPessismist;
    choiceOne.innerHTML = "Optimist";
    choiceTwo.innerHTML = "Pessimist";
    choiceOne.setAttribute("onclick", "BrawnOthirdquestion(this)");
    choiceTwo.setAttribute("onclick", "BrawnPthirdquestion(this)");
}

function BrainsOthirdquestion(userSelection) {
    console.log("Brains Optimist");
    questionTitle.innerHTML = impatientPatient;
    choiceOne.innerHTML = "Impatient";
    choiceTwo.innerHTML = "Patient";
    choiceOne.setAttribute("onclick", "personalQuestionOne(this)");
    choiceTwo.setAttribute("onclick", "personalQuestionOne(this)");
}

function BrainsPthirdquestion(userSelection) {
    console.log("Brains Pessimist");
    questionTitle.innerHTML = impatientPatient;
    choiceOne.innerHTML = "Impatient";
    choiceTwo.innerHTML = "Patient";
    choiceOne.setAttribute("onclick", "personalQuestionTwo(this)");
    choiceTwo.setAttribute("onclick", "personalQuestionTwo(this)");
}

function BrawnOthirdquestion(userSelection) {
    console.log("Brawn Optimist");
    questionTitle.innerHTML = impatientPatient;
    choiceOne.innerHTML = "Impatient";
    choiceTwo.innerHTML = "Patient";
    choiceOne.setAttribute("onclick", "personalQuestionThree(this)");
    choiceTwo.setAttribute("onclick", "personalQuestionThree(this)");
}

function BrawnPthirdquestion(userSelection) {
    console.log("Brawn Pessimist");
    questionTitle.innerHTML = impatientPatient;
    choiceOne.innerHTML = "Impatient";
    choiceTwo.innerHTML = "Patient";
    choiceOne.setAttribute("onclick", "personalQuestionFour(this)");
    choiceTwo.setAttribute("onclick", "personalQuestionFour(this)");
}

function personalQuestionOne(userSelection) {
    console.log("Personal Q 1!");
    questionTitle.innerHTML = PersonalOne[0].question;
    choiceOne.innerHTML = "Making Music";
    choiceTwo.innerHTML = "Photography";
    let choiceThree = document.createElement("button");
    choiceThree.innerHTML = "Writing Stories";
    document.getElementById("choices").appendChild(choiceThree);
    //trigger the specific heroes
}

function personalQuestionTwo(userSelection) {
    console.log("Personal Q 2!");
    questionTitle.innerHTML = PersonalTwo[0].question;
    choiceOne.innerHTML = "At a fancy party";
    choiceTwo.innerHTML = "At home writing a screenplay";
    //trigger the specific heroes
}

function personalQuestionThree(userSelection) {
    console.log("Personal Q 3!");
    questionTitle.innerHTML = PersonalThree[0].question;
    choiceOne.innerHTML = "Technology";
    choiceTwo.innerHTML = "Injustice";
    let choiceThree = document.createElement("button");
    choiceThree.innerHTML = "Unpreparedness";
    document.getElementById("choices").appendChild(choiceThree);
    //trigger the specific heroes
}

function personalQuestionFour(userSelection) {
    console.log("Personal Q 4!");
    questionTitle.innerHTML = PersonalFour[0].question;
    choiceOne.innerHTML = "Home Alone";
    choiceTwo.innerHTML = "Bar";
    let choiceThree = document.createElement("button");
    choiceThree.innerHTML = "Farm";
    document.getElementById("choices").appendChild(choiceThree);
    //trigger the specific heroes
}
