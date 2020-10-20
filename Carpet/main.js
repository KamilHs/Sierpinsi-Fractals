const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let length = 937;
let level = 5;
let color = "black";
let unwantedColor = "white";

let x = canvas.width / 2 - length / 2;
let y = canvas.height / 2 + length / 2;


function draw() {
    sierpinski(level, length, x, y, color);
}


function sierpinski(level, length, x, y, color) {
    if (level == 0) {
        return;
    }
    //Big Square
    drawSquare(x, y, length, color);
    //Center Square
    drawSquare(x + length / 3, y - length / 3, length / 3, unwantedColor);

    setTimeout(() => {
        //Top three
        sierpinski(level - 1, length / 3, x, y - length * 2 / 3, color);
        sierpinski(level - 1, length / 3, x + length / 3, y - length * 2 / 3, color);
        sierpinski(level - 1, length / 3, x + length * 2 / 3, y - length * 2 / 3, color);
        //Midlle two
        sierpinski(level - 1, length / 3, x, y - length / 3, color);
        sierpinski(level - 1, length / 3, x + length * 2 / 3, y - length / 3, color);
        //Bottom Three
        sierpinski(level - 1, length / 3, x, y, color);
        sierpinski(level - 1, length / 3, x + length / 3, y, color);
        sierpinski(level - 1, length / 3, x + length * 2 / 3, y, color);
    }, 1000);
}

function drawSquare(x, y, length, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - length);
    ctx.lineTo(x + length, y - length);
    ctx.lineTo(x + length, y);
    ctx.closePath();
    ctx.fill();
}

draw();