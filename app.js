
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const resetButton = document.getElementById("reset");
const easyBtn = document.getElementById("easyBtn");
const hardBtn = document.getElementById("hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    reset();
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    reset();
});

resetButton.addEventListener("click", function () {
    reset();
});

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        const clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            changeColors(pickedColor);
        } else {
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
