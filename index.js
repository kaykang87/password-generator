const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
// grab dom elements
const newPass = document.querySelector("#new-pass-one");
const newPassTwo = document.querySelector("#new-pass-two");
const generateButton = document.querySelector("#generate-button");
// attach event listener to call randomPass() on click.
generateButton.addEventListener("click", randomPass);

newPass.onclick = () => copyPass(newPass.textContent)
newPassTwo.onclick = () => copyPass(newPassTwo.textContent)

// function to generate random password
function randomPass() {
  resetPass();
  // loop through each characters
  for (let i = 0; i < characters.length; i++) {
    // store characters in a variable and add them to the textContent of the newPass section
    let random = Math.floor(Math.random() * characters.length);
    let randomTwo = Math.floor(Math.random() * characters.length);
    newPass.textContent += characters[random];
    newPassTwo.textContent += characters[randomTwo];
    if (newPass.textContent.length === 15) {
      return;
    }
    if (newPassTwo.textContent.length === 15) {
      return;
    }
  }
}

function resetPass() {
  newPass.textContent = "";
  newPassTwo.textContent = "";
}

function copyPass(passText) {
    navigator.clipboard.writeText(passText)
}