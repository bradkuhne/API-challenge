var buttonEl = document.querySelector("#start");
var tasksToDoEl = document.querySelector("#tasks-to-do"); //Need to change variable names

const questions = ["What color is the prolific lure color?", "All other things being eqaul, what time of day is the best time to catch fish?", "What is the name of the style for rigging a plastic worm in-line on an offset hook with a weight directly on top of the hook?", "Do you generall want to use stronger or thinner line when fishing around structure such as trees or moss?"];
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






var startQuiz = function() {
    console.log ("button was clicked");
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is a new task.";
//   tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", startQuiz);