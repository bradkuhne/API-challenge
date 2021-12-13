var buttonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions-to-ask");
var answersList = document.querySelector("#answers");
//var answerBtn1 = document.querySelector("0");
var questionCounter = 0;

var timerEl = document.getElementById('timeCheck');


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

var remTime = 0;

var screenAnswers = [];

var questionCount = 0

var timeLeft = 10;

var textTimeLeft = "";

var endGameStop = 0;

var initials = "";

// Timer that counts down from 75
function countdown() {
    console.log ("inside countdown function");
    // var timeLeft = 10;
    console.log ("First time left = " + timeLeft);
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      console.log ("inside timeInterval function.  Time left: " + timeLeft);
      if (endGameStop == 1){
        clearInterval(timeInterval);
      };
        // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
         console.log ("Time left = " + timeLeft);
         // Set the `textContent` of `timerEl` to show the remaining seconds
         timerEl.textContent = timeLeft;
         console.log ("This should be shown in timer: " + timerEl.textContent);
    //     // Decrement `timeLeft` by 1
    timeLeft--;
       } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';

         // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
         // Call the `displayMessage()` function
         console.log ("about to go to end game function");
         endGame();
     }
    }, 1000);
  }






startQuiz = function() {
    console.log ("button was clicked");
    console.log ("question count: " + questionCount);
    console.log ("question count: " + questionCount + " Questions length: " + questions.length);
    if (questionCount == 0){
        countdown();
    };
    if (questionCount < questions.length){
        questionsEl.textContent = questions[questionCount];
        removeText();
        presentAnswers();
       // buttonEl.addEventListener("click", startQuiz);
        questionCount++;
        console.log("After adding one to question Count it equals: " + questionCount);
    }   else {
            console.log ("need to show all done text");
    } 
};

function createAnswer1() {
    for (let x = 0; x < 4; x++) {
        var answersEl = document.createElement("button");
        answersEl.type = "button";
        answersEl.className = "answersClass";
        answersEl.innerText = quest1Answers[x];
        answersList.appendChild(answersEl);
    };
    if (questionCounter < 4) {
        answersList.addEventListener("click", judgeAnswer, true);
    };
};
function createAnswer2() {
    var answerId = document.getElementById("answers");
    for (let i = 0; i < 4; i++) {
        console.log ("i equals: " + i)
        answerId.removeChild(answerId.childNodes[0]);
    };
    // var answerId = document.getElementById("answers");
    //     answerId.removeChild(answerId.childNodes[0]);
    //     answerId.removeChild(answerId.childNodes[1]);
    //     answerId.removeChild(answerId.childNodes[2]);
    //     answerId.removeChild(answerId.childNodes[3]);
    for (let x = 0; x < 4; x++) {
        var answersEl = document.createElement("button");
        answersEl.type = "button";
        answersEl.className = "answersClass";
        answersEl.innerText = quest2Answers[x];
        answersList.appendChild(answersEl);
    };
    if (questionCounter < 4) {
        answersList.addEventListener("click", judgeAnswer, true);
    };
};
function createAnswer3() {
    var answerId = document.getElementById("answers");
    for (let i = 0; i < 5; i++) {
        console.log ("i equals: " + i)
        answerId.removeChild(answerId.childNodes[0]);
    };
    // var answerId = document.getElementById("answers");
    //     answerId.removeChild(answerId.childNodes[0]);
    //     answerId.removeChild(answerId.childNodes[1]);
    //     answerId.removeChild(answerId.childNodes[2]);
    //     answerId.removeChild(answerId.childNodes[3]);
    for (let x = 0; x < 4; x++) {
        var answersEl = document.createElement("button");
        answersEl.type = "button";
        answersEl.className = "answersClass";
        answersEl.innerText = quest3Answers[x];
        answersList.appendChild(answersEl);
    };
    if (questionCounter < 4) {
        answersList.addEventListener("click", judgeAnswer, true);
    };
};
function createAnswer4() {
    var answerId = document.getElementById("answers");
    for (let i = 0; i < 5; i++) {
        console.log ("i equals: " + i)
        answerId.removeChild(answerId.childNodes[0]);
    };
    // var answerId = document.getElementById("answers");
    //     answerId.removeChild(answerId.childNodes[0]);
    //     answerId.removeChild(answerId.childNodes[1]);
    //     answerId.removeChild(answerId.childNodes[2]);
    //     answerId.removeChild(answerId.childNodes[3]);
    for (let x = 0; x < 4; x++) {
        var answersEl = document.createElement("button");
        answersEl.type = "button";
        answersEl.className = "answersClass";
        answersEl.innerText = quest4Answers[x];
        answersList.appendChild(answersEl);
    };
    if (questionCounter < 4) {
        answersList.addEventListener("click", judgeAnswer, true);
    };
};


judgeAnswer = function () {
      if (questionCounter < 4 ) {
        var answerName = document.querySelector("button").getAttribute("id");
        console.log ("answer button was clicked.  I need to determine which one.");
        console.log ("button value: " + answerName);
        console.log ("inside answer name");
        questionCounter++
        startQuiz();
        var answerFeedback = document.createElement("p");
        answerFeedback.textContent = "Correct!";
        answerFeedback.className = "pWithBorder";
        answersList.appendChild(answerFeedback);
    };
    console.log ("*** THIS is the questionCounter: " + questionCounter);
    if (questionCounter == 4){
        console.log ("need to call last end-game function " + questionCounter);
        endGame();
    };
      
}

function endGame() {
    var answerId = document.getElementById("answers");
    console.log ("THIS IS THE END GAME function");
    questionsEl.textContent = ("All done!");
    // var answerId = document.getElementById("answers");
    console.log ("this is the number of questions we are on: " + questionCounter)
    for (let i = 0; i < 6; i++) {
        console.log ("inside for loop to remove text and show end game");
        if (answerId.hasChildNodes()) {
            answerId.removeChild(answerId.childNodes[0]);
          }
    }
    var endGameEl = document.createElement("div");
    endGameEl.className = "endGame";
    endGameEl.innerHTML =
    // "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    "<var>Your final score is: </var>"+ timeLeft + "<br>" +
    "<label for=" + initials + ">Enter initials:</label>" +
    "<input type=text id=" + initials + "name=" + initials +">" +
    "<input type=submit value= Submit> </input>";
    
    textTimeLeft = timeLeft.toString();
    localStorage.setItem("score", textTimeLeft);
    // localStorage.setItem("score", JSON.stringify(timeLeft));
    answerId.appendChild(endGameEl);
    endGameStop = 1;
};

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
            createAnswer1();            
            break;
        case 1:
            console.log ("question 2 answers: " + quest2Answers[0]);
            createAnswer2();
            break;
        case 2:
            console.log ("question 3 answers: " + quest3Answers[0]);
            createAnswer3();
            break;
        case 3:
            console.log ("question 4 answers: " + quest4Answers[0]);
            createAnswer4();
            break;
        default:
            console.log ("something went wrong");
            break;
    };
};
// debugger;
buttonEl.addEventListener("click", startQuiz);