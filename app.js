let score = 0;
let randomNumberOne = "";
let randomNumberTwo = "";
let rightOrWrong = document.getElementById("isRight") || "";
let inputValue;

function reset() {
  randomNumberOne = Math.round(Math.random() * 10);
  randomNumberTwo = Math.round(Math.random() * 10);
  view();
}

function submit() {
  if (inputValue == "=" && randomNumberOne == randomNumberTwo) {
    rightOrWrong = "Correct!";
    score++;
  } else if (inputValue == ">" && randomNumberOne > randomNumberTwo) {
    rightOrWrong = "Correct!";
    score++;
  } else if (inputValue == "<" && randomNumberOne < randomNumberTwo) {
    rightOrWrong = "Correct!";
    score++;
  } else {
    rightOrWrong = "wrong, try again!";
    score--;
  }
  inputValue = null;
  reset();
}

function view() {
  document.getElementById("main").innerHTML = `
          <h1>Krokodillespill</h1>
          <button id="resetButton" onclick="reset()">Reset</button>
          <div id="container">
            <span id="numberOne">${randomNumberOne}</span>
            <input id="inputField" oninput="inputValue = this.value"/>
            <span id="numberTwo">${randomNumberTwo}</span>
            <button id="submitButton" onclick="submit()">Submit</button>
            <span>Poeng: </span><span id="score">${score}</span>
          </div>
          <span id="isRight">${rightOrWrong}</span>
        `;
}
view();
