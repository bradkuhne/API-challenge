var buttonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions-to-ask");
var answersList = document.querySelector("#answers");
//var answerBtn1 = document.querySelector("0");


const questions = ["What color is the most prolific fishing lure color?", "All other things being eqaul, what time of day is the best time to catch fish?", "What is the name of the style for rigging a plastic worm in-line on an offset hook with a weight directly on top of the hook?", "Should you use stronger or lighter line when fishing around structure such as trees or moss?"];
const quest1Answers = ["Blue", "Red", "Purple", "Chartreuse"];
var quest1Correct = quest1Answers[3];
// console.log (quest1Correct);
const quest2Answers = ["Midday", "Midnight", "Dawn and Dusk", "Doesn't matter"];
var quest2Correct = quest2Answers[2];
// console.log (quest2Correct);
const quest3Answers = ["Texas rig", "Carolina rig", "Arkansas rig", "Oil rig"];
var quest3Correct = quest3Answers[0];
// console.log (quest3Correct);
const quest4Answers = ["Lighter", "Stronger", "Doesn't matter", "Don't fish near structure"];
var quest4Correct = quest4Answers[1];
// console.log (quest4Correct);

var screenAnswers = []

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
    // create container to hold elements
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "answers";
    // loop through the four answers and add to screen
    for (let x = 0; x < 4; x++) {
        // var answersEl = document.createElement("li");
        var answersEl = document.createElement("button");
        answersEl.type = "button";
        answersEl.className = "answersClass";
        answersEl.textContent = "quest1Answers[x]";
        answersEl.innerText = quest1Answers[x];
        answersEl.id = x;
        answersList.appendChild(answersEl);
        console.log ("This is the action container El: " + actionContainerEl + "answersListEl: " + answersEl);
    };

    // console.log ("This is the value of answerBtn1: " + answerBtn1);

    answersList.addEventListener("click", judgeAnswer, true);
    

    //TRIAL CODE BELOW TRYING TO FIGURE OUT HOW TO GET TO THE ANSWER OF WHAT BUTTON IS PUSHED
    // for (let x = 0; x < 4; x++) {
    //     var containerEl = document.createElement("li");
    //     containerEl.className = "answers"
    //     screenAnswers[x] = document.createElement("button");
    //     screenAnswers[x].className = "button";
    //     screenAnswers[x].textContent = "quest1Answers[x]";
    //     screenAnswers[x].innerText = quest1Answers[x];
    //     screenAnswers[x].id = x;
    //     containerEl.appendChild(screenAnswers[x]);
    //     console.log ("This is the containerEl: " + containerEl + "screenAnswers[1]: " + screenAnswers[1]);
    // };
    // screenAnswers[1].addEventListener("click", judgeAnswer, true);
    // answersClass.addEventListener("click", judgeAnswer, true);
    
    // const element = target 
    // console.log (element.id)
};
judgeAnswer = function () {
    var answerName = document.querySelector("button").getAttribute("id");
    console.log ("answer button was clicked.  I need to determine which one.");
    console.log ("button value: " + answerName);
    if (answerName = "0") {
        console.log ("inside answer name");
        var answerFeedback = document.createElement("p");
        answerFeedback.textContent = "Correct!";
        answerFeedback.className = "pWithBorder";
        answersList.appendChild(answerFeedback);
    };
    // for (let y = 0; y < 3; y++) {
        
    // }

    
}


function removeText() {
    var textToRemove = document.getElementById("openingText");
    if (textToRemove) {
        textToRemove.remove();
    }
    var textToRemove = document.getElementById("start");
    if (textToRemove) {
        textToRemove.remove();
    }
};

function presentAnswers() {
    console.log ("in present answers function");
    switch (questionCount) {
        case 0:
            console.log ("question 1 answers: " + quest1Answers[0]);
            // answersEl.textContent = quest1Answers[0];
            createAnswerHandler();            
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
// debugger;
buttonEl.addEventListener("click", startQuiz);