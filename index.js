/*
document.getElementsByClassName("set")[].addEventListener("click", handleClick);
*/

const letter = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];

//Detecting clicks

for (let i = 0; i < letter.length; i++) {
document.querySelector(letter[i]).addEventListener("click", function () {
  var buttonInnerHTML = this.innerHTML;
  makeSound (buttonInnerHTML); 
  activeButton (buttonInnerHTML);
  }
);
}

//Detecting button press

document.addEventListener ("keydown", function(event) {
makeSound (event.key);
activeButton (event.key);
}
)

//Making sound

function makeSound (key) {

  switch (key) {
    case "w":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "a":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "s":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "d":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "j":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    case "k":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "l":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    default:
    console.log (buttonInnerHTML);

}
}

function activeButton (currentKey) {
  var selectedButton = document.querySelector("." + currentKey);
  selectedButton.classList.add("pressed");

  setTimeout (function () {
    selectedButton.classList.remove("pressed");
  }, 100);
}