let user = document.getElementById("player1");
let comp = document.getElementById("player2");

// comp.classList.add("shake");

document.querySelector(".rock").addEventListener("click", function () {
  userChoice("r");
  user.classList.add("shake");
  setTimeout(() => {
    user.classList.remove("shake");
    user.classList.add("rock");
  }, 1800);
});
document.querySelector(".paper").addEventListener("click", function () {
  userChoice("p");
  user.classList.add("shake");
  setTimeout(() => {
    user.classList.remove("shake");
    user.classList.add("paper");
  }, 1800);
});
document.querySelector(".scissors").addEventListener("click", function () {
  userChoice("s");
  user.classList.add("shake");
  setTimeout(() => {
    user.classList.remove("shake");
    user.classList.add("scissors");
  }, 1800);
});

function userChoice(userChoice) {
  function compChoice() {
    let value = Math.floor(Math.random() * 3);
    if (value === 0) {
      comp.classList.add("shake");
      setTimeout(() => {
        comp.classList.remove("shake");
        comp.classList.add("rock");
      }, 1800);
      return "r";
    } else if (value === 1) {
      comp.classList.add("shake");
      setTimeout(() => {
        comp.classList.remove("shake");
        comp.classList.add("paper");
      }, 1800);
      return "p";
    } else if (value === 2) {
      comp.classList.add("shake");
      setTimeout(() => {
        comp.classList.remove("shake");
        comp.classList.add("scissors");
      }, 1800);
      return "s";
    }
  }

  let compChoiceValue = compChoice();

  if (userChoice === "r") {
    if (compChoiceValue === "r") {
      displayResult("draw");
    } else if (compChoiceValue === "p") {
      displayResult("lose");
    } else if (compChoiceValue === "s") {
      displayResult("win");
    }
  } else if (userChoice === "p") {
    if (compChoiceValue === "r") {
      displayResult("win");
    } else if (compChoiceValue === "p") {
      displayResult("draw");
    } else if (compChoiceValue === "s") {
      displayResult("lose");
    }
  } else if (userChoice === "s") {
    if (compChoiceValue === "r") {
      displayResult("lose");
    } else if (compChoiceValue === "p") {
      displayResult("win");
    } else if (compChoiceValue === "s") {
      displayResult("draw");
    }
  }
}

function displayResult(result) {
  setTimeout(() => {
    document.getElementById(result).classList.remove("hidden");
  }, 1800);
  setTimeout(() => {
    window.location.reload();
  }, 3200);
}
