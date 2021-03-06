/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = "";
const phrase = new Phrase();

// start game or reset game
document.getElementById("btn__reset").addEventListener("click", () => {
  game = new Game();
  game.resetGame();
  game.startGame();
});

const keyboard = document.getElementById("qwerty");

// disable clicked buttons
keyboard.addEventListener("click", btn => {
  const button = btn.target;
  if (button.className === "key") {
    game.handleInteraction(button);
    button.setAttribute("disabled", "");
  }
});

// User keyboard input
window.addEventListener("keyup", e => {
  const keypress = e.key;
  const keyboard = document.getElementById("qwerty");
  const keys = keyboard.querySelectorAll("button");

  for (let i = 0; i < keys.length; i++) {
    if (keypress === keys[i].textContent) {
      game.handleInteraction(keys[i]);
    }
  }
});
