# Project Solution

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution 1

```javascript
let boxList = document.querySelectorAll(".button");

boxList.forEach((box) => {
  box.addEventListener("click", function (e) {
    document.body.style.backgroundColor = e.currentTarget.id;
    // e.target.id , box.id
  });
});
```

## Solution 2

```javascript
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.textContent = "Please give a valid Height.";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.textContent = "Please give a valid Weight.";
  } else {
    let ans = ((weight / (height * height)) * 10000).toFixed(2);
    results.textContent = ans;
  }
});
```

## Solution 3

```javascript
let clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  clock.textContent = date.toLocaleTimeString();
}, 1000);
```

## Solution 4

```javascript
let guessField = document.querySelector(".guessField");
let guessSubmit = document.querySelector(".guessSubmit");
let form = document.querySelector(".form");
let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");

let correctGuess = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let arr = new Array();

function newGame() {
  guessSubmit.disabled = true;
  let h1 = document.createElement("h1");
  h1.textContent = "New Game";
  h1.style.color = "black";
  h1.id = "";
  h1.style.backgroundColor = "red";
  document.querySelector(".resultParas").appendChild(h1);

  // newGamebutton - click
  h1.addEventListener("click", function () {
    arr = [];
    guessSubmit.disabled = false;
    correctGuess = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    guesses.textContent = ``;
    lastResult.textContent = 10;
    lowOrHi.textContent = "";
    guessField.value = "";
    document.querySelector(".resultParas").removeChild(h1);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //Taking values
  let inputvalue = parseInt(guessField.value);
  if (inputvalue > 100 || inputvalue <= 0 || isNaN(inputvalue)) {
    lowOrHi.textContent = "Please give a valid Input.";
    return;
  }
  addGuessEle(inputvalue);
});

function addGuessEle(ele) {
  guessField.value = "";
  arr.push(ele);
  guesses.textContent = `[${arr}]`;
  lastResult.textContent = 10 - arr.length;
  hintForGuess(ele);
  if (arr.length === 10 && ele !== correctGuess) {
    lowOrHi.textContent = `Game Over,You Lose correct ans was ${correctGuess}.`;
    newGame();
  }
}

function hintForGuess(ele) {
  if (ele > correctGuess) {
    lowOrHi.textContent = "Guess is too big.";
  } else if (ele < correctGuess) {
    lowOrHi.textContent = "Guess is too small.";
  } else {
    lowOrHi.textContent = `You Won, Correct guess, ans was ${correctGuess}.`;
    newGame();
  }
}
```

## Solution 5

```javascript

```

## Solution 6

```javascript
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

function generateColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let colourInterval;
let clrChanger = function () {
  document.body.style.backgroundColor = generateColor();
};

const startChangingColor = () => {
  if (!colourInterval) {
    colourInterval = setInterval(clrChanger, 1000);
  }
};
const stopChangingColor = () => {
  clearInterval(colourInterval);
  colourInterval = null;
};
startBtn.addEventListener("click", startChangingColor);
stopBtn.addEventListener("click", stopChangingColor);
```

## Solution n

```javascript

```
