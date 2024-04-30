var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var r = 10;
var f = 10;
var paddleh = 10;
var paddlew = 75;
var paddlex;
var rightDown = false;
var leftDown = false;
var intervalId;

function init() {
    paddlex = WIDTH / 2;
    intervalId = setInterval(draw, 10);
}

function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function onKeyDown(evt) {
    if (evt.keyCode == 39)
        rightDown = true;
    else if (evt.keyCode == 37)
        leftDown = true;
}

function onKeyUp(evt) {
    if (evt.keyCode == 39)
        rightDown = false;
    else if (evt.keyCode == 37)
        leftDown = false;
}

function onMouseMove(evt) {
    if (evt.pageX > 0 && evt.pageX < WIDTH) {
        paddlex = evt.pageX - canvas.offsetLeft - paddlew / 2;
    }
}

function init_paddle() {
    paddlex = WIDTH / 2;
}

function init_mouse() {
    canvas.addEventListener('mousemove', onMouseMove, false);
}

function init_bricks() {
    var NROWS = 5;
    var NCOLS = 5;
    var BRICKWIDTH = (WIDTH / NCOLS) - 1;
    var BRICKHEIGHT = 15;
    var PADDING = 1;
    bricks = new Array(NROWS);
    for (var i = 0; i < NROWS; i++) {
        bricks[i] = new Array(NCOLS);
        for (var j = 0; j < NCOLS; j++) {
            bricks[i][j] = 1;
        }
    }
}

function draw() {
    clear();
    circle(x, y, 10);
    if (rightDown) {
        if ((paddlex + paddlew) < WIDTH) {
            paddlex += 5;
        } else {
            paddlex = WIDTH - paddlew;
        }
    } else if (leftDown) {
        if (paddlex > 0) {
            paddlex -= 5;
        } else {
            paddlex = 0;
        }
    }
    rect(paddlex, HEIGHT - paddleh, paddlew, paddleh);
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (bricks[i][j] == 1) {
                rect(j * (BRICKWIDTH + 1), i * (BRICKHEIGHT + 1), BRICKWIDTH, BRICKHEIGHT);
            }
        }
    }
    rowheight = BRICKHEIGHT + 1 + f / 2;
    colwidth = BRICKWIDTH + 1 + f / 2;
    row = Math.floor(y / rowheight);
    col = Math.floor(x / colwidth);
    if (y < 5 * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
        dy = -dy;
        bricks[row][col] = 0;
    }
    if (x + dx > WIDTH - r || x + dx < 0 + r)
        dx = -dx;
    if (y + dy < 0 + r)
        dy = -dy;
    else if (y + dy > HEIGHT - (r + f)) {
        if (x > paddlex && x < paddlex + paddlew)
            dy = -dy;
        else if (y + dy > HEIGHT - r)
            clearInterval(intervalId);
    }
    x += dx;
    y += dy;
}

init_paddle();
init_mouse();
init_bricks();
document.addEventListener('keydown', onKeyDown, false);
document.addEventListener('keyup', onKeyUp, false);
init();