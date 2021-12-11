var buttonEl = document.querySelector("#start");
var questionsEl = document.querySelector("#questions-to-ask");
var answersEl = document.querySelector("answers");

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
    // for (let i = 0; i < questions.length; i++) {
    if (questionCount < questions.length){
        console.log ("question count: " + questionCount + " Questions length: " + questions.length);
        questionsEl.textContent = questions[questionCount];
        presentAnswers();
        buttonEl.addEventListener("click", startQuiz);
        questionCount++;
    }   else {
            console.log ("need to show all done text");
    } 
    //};
}

function presentAnswers() {
    console.log ("in present answers function");
}

buttonEl.addEventListener("click", startQuiz);