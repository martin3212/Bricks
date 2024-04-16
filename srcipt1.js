var canvas;
var ctx;
var WIDTH = 300; // Define canvas width
var HEIGHT = 300; // Define canvas height
var intervalId;

var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var r = 10;
var f = 0; // Assuming f is defined elsewhere
var paddlex;
var paddleh = 10;
var paddlew = 75;
var rightDown = false;
var leftDown = false;
var tocke = 0;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    paddlex = WIDTH / 2;

    // Event listeners for keyboard input
    $(document).keydown(onKeyDown);
    $(document).keyup(onKeyUp);

    // Event listener for mouse input
    $(document).mousemove(onMouseMove);

    // Initialize bricks
    initBricks();

    // Start the timer
    var sekunde = 0;
    var intTimer = setInterval(timer, 1000);

    // Start the game loop
    intervalId = setInterval(draw, 10);
}

function timer() {
    sekunde++;
    var sekundeI = (sekunde % 60) > 9 ? sekunde % 60 : "0" + (sekunde % 60);
    var minuteI = Math.floor(sekunde / 60) > 9 ? Math.floor(sekunde / 60) : "0" + Math.floor(sekunde / 60);
    var izpisTimer = minuteI + ":" + sekundeI;
    $("#cas").html(izpisTimer);
}

function draw() {
    // Clear the canvas
    clear();

    // Draw the ball
    circle(x, y, 10);

    // Move the paddle left or right based on key presses
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

    // Draw the paddle
    rect(paddlex, HEIGHT - paddleh, paddlew, paddleh);

    // Draw the bricks
    for (var i = 0; i < NROWS; i++) {
        for (var j = 0; j < NCOLS; j++) {
            if (bricks[i][j] == 1) {
                rect((j * (BRICKWIDTH + PADDING)) + PADDING,
                    (i * (BRICKHEIGHT + PADDING)) + PADDING,
                    BRICKWIDTH, BRICKHEIGHT);
            }
        }
    }

    // Check for collisions with the walls and the paddle
    if (x + dx > WIDTH - r || x + dx < 0 + r) {
        dx = -dx;
    }
    if (y + dy < 0 + r) {
        dy = -dy;
    } else if (y + dy > HEIGHT - (r + f)) {
        if (x > paddlex && x < paddlex + paddlew) {
            dy = -dy;
        } else if (y + dy > HEIGHT - r) {
            clearInterval(intervalId);
        }
    }

    // Update the position of the ball
    x += dx;
    y += dy;
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
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
    var canvasMinX = canvas.offsetLeft;
    var canvasMaxX = canvasMinX + WIDTH;
    if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
        paddlex = evt.pageX - canvasMinX;
    }
}

function movePaddle() {
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
}

function drawPaddle() {
    rect(paddlex, HEIGHT - paddleh, paddlew, paddleh);
}

function initBricks() {
    // Your implementation for initializing bricks
}

function drawBricks() {
    // Your implementation for drawing bricks
}

function checkCollisions() {
    // Your implementation for checking collisions
}

// Call init to start the game
init();