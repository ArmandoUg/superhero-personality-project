var Heading = document.querySelector(".Heading");
var startButton = document.querySelector(".start-button");
var questionContainer = document.getElementById("questions");
var questionTitle = document.getElementById("questionTitle");
var Choices = document.getElementById("choices");
// var choiceOne = document.getElementById("choice1");
// var choiceTwo = document.getElementById("choice2");
var restartButton = document.getElementById("Restart");

// var brainsBrawn = "1. Brains or Brawn?";

// var optimistPessismist = "2. Optimist ot Pessimist?";

// var impatientPatient = "3. Patient or Impatient?";

// var PersonalOne = "4. Which of these do you enjoy the most?";

// var PersonalTwo = "4. Where are you most likely to be found?";

// var PersonalThree = "4. Which of these do you dislike?";

// var PersonalFour = "4. Where are you most likely to be found?";

// var herosMap = {
//     "Making Music": 1016181,
//     Photography: 1009610,
//     "At a fancy party": 1009368,
// };

// var personality = {
//     brains: 0,
//     brawn: 0,
//     speed: 0,
// };

startButton.addEventListener("click", showButtons);

var quizLogicMap = {
    title: "1. Brains or Brawn?",
    choices: {
        Brains: {
            title: "2. Optimist or Pessimist?",
            choices: {
                Pessimist: {
                    title: "3. Patient or Impatient?",
                    choices: {
                        Patient: {
                            title: "4. Where are you most likely to be found?",
                            choices: {
                                "At a fancy party": 1009368,
                                "At home writing a screenplay": 1009707,
                            },
                        },
                        Impatient: {
                            title: "4. Where are you most likely to be found?",
                            choices: {
                                "At a fancy party": 1009368,
                                "At home writing a screenplay": 1009707,
                            },
                        },
                    },
                },
                Optimist: {
                    title: "3. Patient or Impatient?",
                    choices: {
                        Patient: {
                            title: "4. Which of these do you enjoy the most?",
                            choices: {
                                "Making music": 1016181,
                                Photography: 1009610,
                                "Writing stories": 1017577,
                            },
                        },
                        Impatient: {
                            title: "4. Which of these do you enjoy the most?",
                            choices: {
                                "Making music": 1016181,
                                Photography: 1009610,
                                "Writing stories": 1017577,
                            },
                        },
                    },
                },
            },
        },
        Brawn: {
            title: "2. Optimist or Pessimist?",
            choices: {
                Pessimist: {
                    title: "3. Patient or Impatient?",
                    choices: {
                        Patient: {
                            title: "4. Where are you most likely to be found?",
                            choices: {
                                "Home alone": 1009351,
                                Bar: 1009718,
                                "In nature": 1009652,
                            },
                        },
                        Impatient: {
                            title: "4. Where are you most likely to be found?",
                            choices: {
                                "Home alone": 1009351,
                                Bar: 1009718,
                                "In nature": 1009652,
                            },
                        },
                    },
                },
                Optimist: {
                    title: "3. Patient or Impatient?",
                    choices: {
                        Patient: {
                            title: "4. Which of these do you dislike?",
                            choices: {
                                Technology: 1009664,
                                Injustice: 1009220,
                                Unpreparedness: 1009297,
                            },
                        },
                        Impatient: {
                            title: "4. Which of these do you dislike?",
                            choices: {
                                Technology: 1009664,
                                Injustice: 1009220,
                                Unpreparedness: 1009297,
                            },
                        },
                    },
                },
            },
        },
    },
};

function getNext(q = quizLogicMap) {
    // console.log("your question's title is --- ", q.title);
    // console.log("choices are ", Object.keys(q.choices));
    // console.log(q);
    questionTitle.innerHTML = q.title;
    var choices = Object.keys(q.choices);
    Choices.innerHTML = "";

    for (var i = 0; i < choices.length; i++) {
        let btn = document.createElement("button");
        let choice = choices[i];
        btn.innerHTML = choice;
        Choices.append(btn);
        btn.addEventListener("click", function () {
            if (typeof q.choices[choice] === "number") {
                location.replace(`./endpage.html?code=${q.choices[choice]}`);
            } else {
                getNext(q.choices[choice]);
            }
        });
    }
}

function showButtons() {
    questionContainer.classList.remove("hide");
    restartButton.classList.remove("hide");
    Choices.classList.remove("hide");
    Heading.classList.add("hide");
    getNext();
    // firstQuestion();
}

var restartbtn = restartButton.addEventListener("click");

// function anyQuestion(log, title, choices, attributes) {
//     console.log(log);
//     questionTitle.innerHTML = title;
//     choiceOne.innerHTML = choices[0];
//     choiceTwo.innerHTML = choices[1];
//     choiceOne.setAttribute("onclick", attributes[0]);
//     choiceTwo.setAttribute("onclick", attributes[1]);
// }

// function firstQuestion() {
//     console.log("Starting Quiz!");
//     questionTitle.innerHTML = brainsBrawn;
//     choiceOne.innerHTML = "Brains";
//     choiceTwo.innerHTML = "Brawn";
//     choiceOne.setAttribute("onclick", "BrainSecondQuestion(this)");
//     choiceTwo.setAttribute("onclick", "BrawnSecondQuestion(this)");
// }

// function BrainSecondQuestion(userSelection) {
//     console.log("Brain!");
//     questionTitle.innerHTML = optimistPessismist;
//     choiceOne.innerHTML = "Optimist";
//     choiceTwo.innerHTML = "Pessimist";
//     choiceOne.setAttribute("onclick", "BrainsOthirdquestion(this)");
//     choiceTwo.setAttribute("onclick", "BrainsPthirdquestion(this)");
// }

// function BrawnSecondQuestion(userSelection) {
//     console.log("Brawn!");
//     questionTitle.innerHTML = optimistPessismist;
//     choiceOne.innerHTML = "Optimist";
//     choiceTwo.innerHTML = "Pessimist";
//     choiceOne.setAttribute("onclick", "BrawnOthirdquestion(this)");
//     choiceTwo.setAttribute("onclick", "BrawnPthirdquestion(this)");
// }

// function BrainsOthirdquestion(userSelection) {
//     console.log("Brains Optimist");
//     questionTitle.innerHTML = impatientPatient;
//     choiceOne.innerHTML = "Impatient";
//     choiceTwo.innerHTML = "Patient";
//     choiceOne.setAttribute("onclick", "personalQuestionOne(this)");
//     choiceTwo.setAttribute("onclick", "personalQuestionOne(this)");
// }

// function BrainsPthirdquestion(userSelection) {
//     console.log("Brains Pessimist");
//     questionTitle.innerHTML = impatientPatient;
//     choiceOne.innerHTML = "Impatient";
//     choiceTwo.innerHTML = "Patient";
//     choiceOne.setAttribute("onclick", "personalQuestionTwo(this)");
//     choiceTwo.setAttribute("onclick", "personalQuestionTwo(this)");
// }

// function BrawnOthirdquestion(userSelection) {
//     console.log("Brawn Optimist");
//     questionTitle.innerHTML = impatientPatient;
//     choiceOne.innerHTML = "Impatient";
//     choiceTwo.innerHTML = "Patient";
//     choiceOne.setAttribute("onclick", "personalQuestionThree(this)");
//     choiceTwo.setAttribute("onclick", "personalQuestionThree(this)");
// }

// function BrawnPthirdquestion(userSelection) {
//     console.log("Brawn Pessimist");
//     questionTitle.innerHTML = impatientPatient;
//     choiceOne.innerHTML = "Impatient";
//     choiceTwo.innerHTML = "Patient";
//     choiceOne.setAttribute("onclick", "personalQuestionFour(this)");
//     choiceTwo.setAttribute("onclick", "personalQuestionFour(this)");
// }

// function personalQuestionOne(userSelection) {
//     console.log("Personal Q 1!");
//     questionTitle.innerHTML = PersonalOne[0].question;
//     choiceOne.innerHTML = "Making Music";
//     choiceTwo.innerHTML = "Photography";
//     let choiceThree = document.createElement("button");
//     choiceThree.innerHTML = "Writing Stories";
//     document.getElementById("choices").appendChild(choiceThree);
//     choiceOne.addEventListener("click", handleSelect);
//     choiceTwo.addEventListener("click", handleSelect);
// }

// function personalQuestionTwo(userSelection) {
//     console.log("Personal Q 2!");
//     questionTitle.innerHTML = PersonalTwo[0].question;
//     choiceOne.innerHTML = "At a fancy party";
//     choiceTwo.innerHTML = "At home writing a screenplay";
//     choiceOne.addEventListener("click", handleSelect);
//     //trigger the specific heroes
// }

// function personalQuestionThree(userSelection) {
//     console.log("Personal Q 3!");
//     questionTitle.innerHTML = PersonalThree[0].question;
//     choiceOne.innerHTML = "Technology";
//     choiceTwo.innerHTML = "Injustice";
//     let choiceThree = document.createElement("button");
//     choiceThree.innerHTML = "Unpreparedness";
//     document.getElementById("choices").appendChild(choiceThree);
//     //trigger the specific heroes
// }

// function personalQuestionFour(userSelection) {
//     console.log("Personal Q 4!");
//     questionTitle.innerHTML = PersonalFour[0].question;
//     choiceOne.innerHTML = "Home Alone";
//     choiceTwo.innerHTML = "Bar";
//     let choiceThree = document.createElement("button");
//     choiceThree.innerHTML = "Farm";
//     document.getElementById("choices").appendChild(choiceThree);
//     //trigger the specific heroes
// }
// function handleSelect(e) {
//     if (herosMap[e.target.textContent])
//         location.replace(
//             `./endpage.html?code=${herosMap[e.target.textContent]}`,
//         );
// }
