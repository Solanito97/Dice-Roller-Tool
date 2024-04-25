const rollButtonElement = document.querySelector(".roll-button");
const resetButtonElement = document.querySelector(".reset-button");
const diceElement = document.querySelector(".dice-container");
const rollHistoryElement = document.querySelector(".history-list");
let count = 1;

rollButtonElement.addEventListener("click", () => {
    diceElement.classList.add("dice-rolling-animation");
    setTimeout(() => {
        diceElement.classList.remove("dice-rolling-animation");
        rollDiceFunction();
    }, 1000);
})

resetButtonElement.addEventListener("click", () => {
    count = 1;
    rollHistoryElement.innerHTML = "";
});

function rollDiceFunction() {
    const rollResult = Math.ceil(Math.random() * 6);
    const diceFace = getDiceFaceFunction(rollResult);
    diceElement.innerHTML = diceFace;
    const liElement = document.createElement("li");
    liElement.classList.add("history-item");
    liElement.innerHTML = `Roll ${count}: <span>${diceFace}</span>`;
    rollHistoryElement.appendChild(liElement);
    count++;
}

function getDiceFaceFunction(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856";
        case 2:
            return "&#9857";
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
    }
}
