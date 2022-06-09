let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let you = document.querySelector("#you");
let computer = document.querySelector("#computer");

const picdiv = document.createElement("div");
picdiv.setAttribute("class", "img");
const pic = document.createElement("img");
let comdiv = document.createElement("div");
comdiv.setAttribute("class", "img");
const cip = document.createElement("img");
const check = (e) => {
  // generate random item
  let items = ["Rock", "Paper", "Scissors"];
  let randomItem = items[Math.floor(Math.random() * items.length)];
  console.log(randomItem);
  //
  const win = () => {
    setTimeout(() => {
      alert("Win");
      location.reload();
    }, 500);
  };
  const lose = () => {
    setTimeout(() => {
      alert("Lose");
      location.reload();
    }, 500);
  };
  if (e == randomItem) {
    setTimeout(() => {
      alert("Tie");
      location.reload();
    }, 500);
  }
  if (e == "Rock") {
    pic.src = "rock.png";
    picdiv.appendChild(pic);
    you.appendChild(picdiv);
    if (e == "Rock" && randomItem == "Paper") {
      lose();
    }
    if (e == "Rock" && randomItem == "Scissors") {
      win();
    }
  }
  if (e == "Paper") {
    pic.src = "paper.png";
    picdiv.appendChild(pic);
    you.appendChild(picdiv);
    if (e == "Paper" && randomItem == "Scissors") {
      lose();
    }
    if (e == "Paper" && randomItem == "Rock") {
      win();
    }
  }
  if (e == "Scissors") {
    pic.src = "scissors.png";
    picdiv.appendChild(pic);
    you.appendChild(picdiv);
    if (e == "Scissors" && randomItem == "Rock") {
      lose();
    }
    if (e == "Scissors" && randomItem == "Paper") {
      win();
    }
  }
  const comp = () => {
    if (randomItem == "Rock") {
      cip.src = "rock.png";
      comdiv.appendChild(cip);
      computer.appendChild(comdiv);
    }
    if (randomItem == "Paper") {
      cip.src = "paper.png";
      comdiv.appendChild(cip);
      computer.appendChild(comdiv);
    }
    if (randomItem == "Scissors") {
      cip.src = "scissors.png";
      comdiv.appendChild(cip);
      computer.appendChild(comdiv);
    }
  };
  comp();
};

rock.addEventListener("click", function () {
  check("Rock");
});
paper.addEventListener("click", function () {
  check("Paper");
});
scissors.addEventListener("click", function () {
  check("Scissors");
});
