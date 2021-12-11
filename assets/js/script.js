var buttonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions-to-ask");
var answersList = document.querySelector("#answers");

const questions = ["What color is the most prolific lure color?", "All other things being eqaul, what time of day is the best time to catch fish?", "What is the name of the style for rigging a plastic worm in-line on an offset hook with a weight directly on top of the hook?", "Should you use stronger or lighter line when fishing around structure such as trees or moss?"];
const quest1Answers = ["Blue", "Red", "Purple", "Chartreuse"];
var quest1Correct = quest1Answers[3];
console.log (quest1Correct);
const quest2Answers = ["Midday", "Midnight", "Dawn and Dusk", "Doesn't matter"];
var quest2Correct = quest2Answers[2];
console.log (quest2Correct);
const quest3Answers = ["Texas rig", "Carolina rig", "Arkansas rig", "Oil rig"];
var quest3Correct = quest3Answers[0];
console.log (quest3Correct);
const quest4Answers = ["Lighter", "Stronger", "Doesn't matter", "Don't fish near structure"];
var quest4Correct = quest4Answers[1];
console.log (quest4Correct);

var questionCount = 0

startQuiz = function() {
    console.log ("button was clicked");
    if (questionCount < questions.length){
        console.log ("question count: " + questionCount + " Questions length: " + questions.length);
        questionsEl.textContent = questions[questionCount];
        removeText();
        presentAnswers();
        buttonEl.addEventListener("click", startQuiz);
        questionCount++;
    }   else {
            console.log ("need to show all done text");
    } 
};

function createAnswerHandler() {
    for (let x = 0; x < 4; x++) {
        var answersEl = document.createElement("li");
        answersEl.className = "answers";
        answersEl.textContent = quest1Answers[x];
        answersList.appendChild(answersEl);
    };
};

function removeText() {
    var textToRemove = document.getElementById("openingText");
    textToRemove.remove();
};

function presentAnswers() {
    console.log ("in present answers function");
    switch (questionCount) {
        case 0:
            console.log ("question 1 answers: " + quest1Answers[0]);
            // answersEl.textContent = quest1Answers[0];
            createAnswerHandler();
            // for (let x = 0; x < 3; x++) {
            // quest1Answers.appendChild (answersEl);
            // quest2Answers.appendChild (answersEl);
            // quest3Answers.appendChild (answersEl);


            
            
            
            
            
            
            break;
        case 1:
            console.log ("question 2 answers: " + quest2Answers[0]);
            answersEl.textContent = quest2Answers[0];
            break;
        case 2:
            console.log ("question 3 answers: " + quest3Answers[0]);
            answersEl.textContent = quest3Answers[0];
            break;
        case 3:
            console.log ("question 4 answers: " + quest4Answers[0]);
            answersEl.textContent = quest4Answers[0];
            break;
        default:
            console.log ("something went wrong");
            break;
    };
};

buttonEl.addEventListener("click", startQuiz);