let userSelection = "";
let compSelection ="";
let answer = "";

const getInput= (input) => {
  userSelection = input;
  compInput();
  compare(userSelection, compSelection);
  winner();
  compOutput();
  userOutput();
}

const compInput= () => {
  compSelection = Math.random();
  if (compSelection < 0.34) {
    compSelection = "Rock";
  } else if (compSelection <= 0.67) {
    compSelection = "Paper";
  } else {
    compSelection = "Scissors";
  }
}

const compare = (selection1, selection2) => {

  if(selection1 === selection2) {
    answer = "Its a tie!";
  }
  else if(selection1 === "Rock") {
    answer = (selection2 === 'Paper') ? "you lose!" : "you win!";
  }
  else if(selection1 === "Paper") {
    answer = (selection2 === 'Rock') ? "you win!" : "you lose!";
  }
  else if(selection1 === 'Scissors') {
    answer = (selection2 === 'Rock') ? "you lose!" : "you win!";
  }
  return answer
}

const compOutput = () => {
  let compOutput = document.getElementById("comp_output");
  compOutput.innerHTML = "Computer chose: " + compSelection;
}

const userOutput = () => {
  let yourOutput = document.getElementById("user_output");
  yourOutput.innerHTML = "You Chose: " + userSelection;
}

const winner = () => {
  let output = document.getElementById("output");
  output.innerHTML = answer;
}


