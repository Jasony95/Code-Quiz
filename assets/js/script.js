// Global Variables

// Create Variables
var body = document.body;
var btn = [];
var timer = 20;
var correctCount = 0;
var iteration = 0;
var i = 0;
var choiceNum = 0;
var countDown = 60;

// Array of Question Object
var questArr = [
  {
    num: "1",
    question: "What do you put after each completed line in JavaScript?",
    choice1: ",",
    choice2: "~",
    choice3: ";",
    choice4: "/",
    answer: ";"
  },
  {
    num: "2",
    question: "What method is used to pop out a window that ask for input from the user?",
    choice1: "input()",
    choice2: "prompt()",
    choice3: "alert()",
    choice4: "comfirm()",
    answer: "prompt()"
  },
  {
    num: "3",
    question: "What do you use to compare two variables with the exact type and value?",
    choice1: "=",
    choice2: "==",
    choice3: "?",
    choice4: "===",
    answer: "==="
  },
  {
    num: "4",
    question: "What symbol is used in CSS to access the ID of a element to add styling properties to that element?",
    choice1: ".",
    choice2: "#",
    choice3: "*",
    choice4: "+",
    answer: "#"
  },
  {
    num: "5",
    question: "What is the character used to create an array?",
    choice1: "[]",
    choice2: "{}",
    choice3: "()",
    choice4: "||",
    answer: "[]"
  },
  {
    num: "6",
    question: "When was Javascript created?",
    choice1: "1990",
    choice2: "1995",
    choice3: "1980",
    choice4: "1985",
    answer: "1995"
  },
  {
    num: "7",
    question: "Who created JavaScript?",
    choice1: "Brendan Eich",
    choice2: "James Locke",
    choice3: "Ethan Tray",
    choice4: "Bob Hennington",
    answer: "Brendan Eich"
  },
  {
    num: "8",
    question: "How many parameters can a JavaScript function have?",
    choice1: "1",
    choice2: "2",
    choice3: "10",
    choice4: "No limit",
    answer: "No limit"
  },
  {
    num: "9",
    question: "What is the starting index of an array?",
    choice1: "1",
    choice2: "-1",
    choice3: "0",
    choice4: "index",
    answer: "0"
  },
  {
    num: "10",
    question: "What do method do you use to combine two arrays into one array?",
    choice1: "concat()",
    choice2: "add()",
    choice3: "join()",
    choice4: "push()",
    answer: "concat()"
  }
];



// Create Elements
var h1El = document.createElement("h1");
var pEl = document.createElement("p");
var startBtn = document.createElement("button");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var btn = [btn1, btn2, btn3, btn4];
var h2El1 = document.createElement("h2");
var h2El2 = document.createElement("h2");

// Selecting Elements
var quizTag = document.querySelector("#quiz");
var timer = document.querySelector("#timer");

// Starting page contents
h1El.textContent = "Coding Quiz Challenge";
pEl.textContent = "This quiz will test your knowledge in JavaScript.";
startBtn.textContent = "Start Quiz!";
startBtn.setAttribute("class", "startBtn");
h2El1.textContent = "Correct!";
h2El2.textContent = "Wrong!";


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
startBtn.addEventListener("click", function() {
  iteration = 0;
  countDown = 30;
  loadPage();
  setTime();
});

function setTime() {
  var timerInterval = setInterval(function () {
    
    countDown--;
    timer.textContent = countDown;
    console.log(timer);

    if (countDown < 1) {
      clearInterval(timerInterval);
      loadResult();
    }

  }, 1000);
}

btn1.addEventListener("click", function() {
  if (questArr[iteration].choice1 === questArr[iteration].answer) {
    h2El1.remove();
    correctCount++;
    body.appendChild(h2El1);
    console.log(correctCount);
    console.log("Correct");
  }
  else {
    h2El1.remove();
    countDown = countDown - 5;
    body.appendChild(h2El2);
    console.log("Wrong!");
  }
  iteration++;
  loadNextPage();
});



btn2.addEventListener("click", function() {
  if (questArr[iteration].choice2 === questArr[iteration].answer) {
    h2El1.remove();
    h2El2.remove();
    correctCount++;
    body.appendChild(h2El1);
    console.log(correctCount);
    console.log("Correct");
  }
  else {
    h2El1.remove();
    h2El2.remove();
    countDown = countDown - 5;
    body.appendChild(h2El2);
    console.log("Wrong!");
  }
  iteration++;
  loadNextPage();
});

btn3.addEventListener("click", function() {
  if (questArr[iteration].choice3 === questArr[iteration].answer) {
    h2El1.remove();
    h2El2.remove();
    correctCount++;
    body.appendChild(h2El1);
    console.log(correctCount);
    console.log("Correct");
  }
  else {
    h2El1.remove();
    h2El2.remove();
    countDown = countDown - 5;
    body.appendChild(h2El2);
    console.log("Wrong!");
  }
  iteration++;
  loadNextPage();
});

btn4.addEventListener("click", function() {
  if (questArr[iteration].choice4 === questArr[iteration].answer) {
    h2El1.remove();
    h2El2.remove();
    correctCount++;
    body.appendChild(h2El1);
    console.log(correctCount);
    console.log("Correct");
  }
  else {
    h2El1.remove(); 
    h2El2.remove();
    countDown = countDown - 5;
    body.appendChild(h2El2);
    console.log("Wrong!");
  }
  iteration++;
  loadNextPage();
});


 
// First Question
function firstPage() {
  h1El.textContent = "What do you put after each completed line in Javascript?";
  pEl.textContent = '';
  startBtn.remove();
}

function loadQuestion(questNum) {
  h1El.textContent = questArr[questNum].question;
  
  btn[0].remove();
  btn[1].remove();
  btn[2].remove();
  btn[3].remove();
}
  
function loadChoice(questPick) {
  console.log("iteration: ", iteration);
  
  choiceNum = 0;
  btn[choiceNum].textContent = questArr[questPick].choice1;
  btn[choiceNum].setAttribute("class", "choiceBtn");
  // if (iteration === 0) {
    body.appendChild(btn[choiceNum]);
  // }
  choiceNum++;

  btn[choiceNum].textContent = questArr[questPick].choice2;
  btn[choiceNum].setAttribute("class", "choiceBtn");
  // if (iteration === 0) {
    body.appendChild(btn[choiceNum]);
  // }
  choiceNum++;

  btn[choiceNum].textContent = questArr[questPick].choice3;
  btn[choiceNum].setAttribute("class", "choiceBtn");
  // if (iteration === 0) {
    body.appendChild(btn[choiceNum]);
  // }
  choiceNum++;

  btn[choiceNum].textContent = questArr[questPick].choice4;
  btn[choiceNum].setAttribute("class", "choiceBtn");
  // if (iteration === 0) {
    body.appendChild(btn[choiceNum]);
  // }

  i++;
  
}

function loadPage() {
  startBtn.remove();
  pEl.remove();

  // timer = 60;
  // correctCount = 0;

  loadQuestion(i);
  loadChoice(i);
  
}
  
function loadNextPage() {
  if (i === 10) {
    console.log("i: ", i);
    console.log("Game Over");
    loadResult();
  }
  else {
    loadQuestion(i);
    loadChoice(i);
    console.log("i: ", i);
  }
  
}

function loadResult() {
  clearInterval(timerInterval);
  h2El2.remove();
  h1El.remove();
  btn[0].remove();
  btn[1].remove();
  btn[2].remove();
  btn[3].remove();
  console.log(countDown);
  h2El1.textContent = "Your score: ", countDown;
}


main();