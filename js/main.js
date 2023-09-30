let sequencePlayed = false;
let gameStarted = false;
const buttons = document.querySelectorAll(".buttons");
let sequence = [];

function playAnim() {
  sequence.push(Math.floor(Math.random() * 4));
  let index = 0;
  sequencePlayed = true;
  const timer = setInterval(() => {
    buttons[sequence[index]].style.opacity = 1;
    setTimeout(() => {
      buttons[sequence[index]].style.opacity = 0.6;
      index++;
      if (index >= sequence.length) {
        sequencePlayed = false;
        return clearInterval(timer);
      }
    }, 500);
  }, 1000);
  document.querySelector("span").innerText++;
  console.log(sequence);
}

const play = document.getElementById("play").addEventListener("click", () => {
  if (gameStarted) return;
  playAnim();
  gameStarted = true;
});

let iSeq = 0;
for (let iButtons = 0; iButtons < buttons.length; iButtons++) {
  buttons[iButtons].addEventListener("click", () => {
    if (sequencePlayed || !gameStarted) return;
    if (iButtons === sequence[iSeq]) {
      iSeq++;
      if (iSeq >= sequence.length) {
        iSeq = 0;
        playAnim();
      }
    } else {
      location.reload();
    }
  });
}
