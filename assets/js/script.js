// Global Variables

// Create Variables
var body = document.body;
var questArr = [
  {
    "num": "1",
    "question": "What do you put after each completed line in JavaScript?",
    "choice1": ",",
    "choice2": "~",
    "choice3": ";",
    "choice4": "/",
    "answer": ";"
  },
  {
    "num": "2",
    "question": "What method is used to pop out a window that ask for input from the user?",
    "choice1": "input()",
    "choice2": ""
  }
]

// Create Elements
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var startBtn = document.createElement("button");
var Btn1 = document.createElement("button");

// Selecting Elements
var quizTag = document.querySelector("#quiz");

// Starting page contents
h1El.textContent = "Coding Quiz Challenge";
pEl.textContent = "This quiz will test your knowledge in web development.";
startBtn.textContent = "Start Quiz!";
startBtn.setAttribute("class", "startBtn");


// Functions
function main() {
  startPage();
}

// Load on Page and Refresh Page
function startPage() {
  body.appendChild(h1El);
  body.appendChild(pEl);
  body.appendChild(startBtn);
}

// Start the Quiz
startBtn.addEventListener("click", function () {
  firstPage();
})
 
// First Question
function firstPage() {
  h1El.textContent = "What do you put after each completed line in Javascript?";
  pEl.textContent = '';
  startBtn.remove();
}


  
main();