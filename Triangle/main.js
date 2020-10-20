const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let length = 900;
let x = canvas.width / 2 - length / 2
let y = canvas.height / 2 + length / 2;
let level = 10;
let color = "black";
let unwantedColor = "red";


function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    sierpinski(level, length, x, y, color);
}


function sierpinski(level, length, x, y, color) {
    if (level == 0) {
        return;
    }

    triangle(x, y, length, color);

    setTimeout(() => {
        sierpinski(level - 1, length / 2, x, y, color);
        sierpinski(level - 1, length / 2, x + length / 2, y, color);
        sierpinski(level - 1, length / 2, x + length / 4, y - (length / 2 * Math.sqrt(3) / 2), color);
        removeCenterTriangle(x + length / 2, y, length);
    }, 1000)

}

function triangle(x, y, length, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length / 2, y - (length * Math.sqrt(3) / 2));
    ctx.lineTo(x + length, y);
    ctx.closePath();
    ctx.fill();
}

function removeCenterTriangle(x, y, length) {
    ctx.fillStyle = unwantedColor;
    ctx.beginPath()
    ctx.moveTo(x, y);
    ctx.lineTo(x + length / 4, y - (length / 2 * Math.sqrt(3) / 2));
    ctx.lineTo(x - length / 4, y - (length / 2 * Math.sqrt(3) / 2));
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

draw();

