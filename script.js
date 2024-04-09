

function drawIt() {
var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var r=10;
var ctx;

  function init() {
    ctx = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();
    return setInterval(draw, 10);
  }

  function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }

  function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }
  //END LIBRARY CODE
  function draw() {
    clear();
    circle(x, y, 10);
    x += dx;
    y += dy;
  }

  init();




  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  //draw a circle
  ctx.beginPath();
  ctx.arc(75, 75, 10, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();

  var x = 150;
  var y = 150;
  var dx = 2;
  var dy = 4;
  var ctx;
  var canvas
  function init() {
    canvas=document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    return setInterval(draw, 10); //klic funkcije draw vsakih 10 ms; http://www.w3schools.com/jsref/met_win_setinterval.asp
    }
    function draw() {
      ctx.clearRect(0,0,300,300);
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fill();
      x += dx;
      y += dy;
      }
      init();
       }
      function draw() {
        clear();
        circle(x, y, 10);
        if (x + dx > WIDTH (-r)|| x + dx < 0 (+r))
        dx = -dx;
        if (y + dy > HEIGHT (-r)|| y + dy < 0 (+r))
        dy = -dy;
        x += dx;
        y += dy;
        }
        var paddlex;
        var paddleh;
        var paddlew;

      function init_paddle() {
        paddlex = WIDTH / 2;
        paddleh = 10;
        paddlew = 75;
      }

      function draw() {
        clear();
        circle(x, y, 10);
        rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);

        if (x + dx > WIDTH-r || x + dx < 0+r)
          dx = -dx;

        if (y + dy < 0+r)
          dy = -dy;
  
        else if (y + dy > HEIGHT-r) {
          if (x > paddlex && x < paddlex + paddlew)
          dy = -dy;
          else
          clearInterval(intervalId);
        }

        x += dx;
        y += dy;
      }
      init_paddle();

      var rightDown = false;
      var leftDown = false;

      //nastavljanje leve in desne tipke
      function onKeyDown(evt) {
        if (evt.keyCode == 39)
          rightDown = true;
        else if (evt.keyCode == 37) leftDown = true;
        }

      function onKeyUp(evt) {
        if (evt.keyCode == 39)
          rightDown = false;
        else if (evt.keyCode == 37) leftDown = false;
        }
      $(document).keydown(onKeyDown);
      $(document).keyup(onKeyUp); 

      function draw() {
        clear();
        circle(x, y, 10);
        //premik ploščice levo in desno
        if (rightDown) paddlex += 5;
        else if (leftDown) paddlex -= 5;
        rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);
        if (x + dx > WIDTH -(r) || x + dx < 0 (+r))
          dx = -dx;

        if (y + dy < 0 (+r))
            dy = -dy;

        else if (y + dy > HEIGHT -(r+f)) {
            if (x > paddlex && x < paddlex + paddlew)
            dy = -dy;
            else if (y + dy > HEIGHT (-r))
            clearInterval(intervalId);
        }
        x += dx;
        y += dy;
        }
      var canvasMinX;
      var canvasMaxX;

      function init_mouse() {
        //canvasMinX = $("#canvas").offset().left;
        canvasMinX = $("canvas").offset().left;
        canvasMaxX = canvasMinX + WIDTH;
      }

      function onMouseMove(evt) {
        if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
          paddlex = evt.pageX - canvasMinX;
        }
      }
      $(document).mousemove(onMouseMove);


      init_mouse();

      var bricks;
      var NROWS;
      var NCOLS;
      var BRICKWIDTH;
      var BRICKHEIGHT;
      var PADDING;

      function initbricks() { //inicializacija opek - polnjenje v tabelo
        NROWS = 5;
        NCOLS = 5;
        BRICKWIDTH = (WIDTH/NCOLS) - 1;
        BRICKHEIGHT = 15;
        PADDING = 1;
        bricks = new Array(NROWS);
        for (i=0; i < NROWS; i++) {
              bricks[i] = new Array(NCOLS);
            for (j=0; j < NCOLS; j++) {
              bricks[i][j] = 1;
            }
        }
      }

      initbricks();

      function draw() {
        clear();
        circle(x, y, 10);
        //premik ploščice levo in desno
        if(rightDown){
          if((paddlex+paddlew) < WIDTH){
            paddlex += 5;
          }else{
            paddlex = WIDTH-paddlew;
          }
        }
        else if(leftDown){
          if(paddlex>0){
            paddlex -=5;
          }else{
            paddlex=0;
          }
        }

        rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);

        //riši opeke
        for (i=0; i < NROWS; i++) {
          for (j=0; j < NCOLS; j++) {
            if (bricks[i][j] == 1) {
              rect((j * (BRICKWIDTH + PADDING)) + PADDING,
                (i * (BRICKHEIGHT + PADDING)) + PADDING,
                BRICKWIDTH, BRICKHEIGHT);
            }
          }
        }

        if (x + dx > WIDTH -r || x + dx < 0+r)
          dx = -dx;
          if (y + dy < 0+r)
            dy = -dy;
          else if (y + dy > HEIGHT -(r+f)) {
            if (x > paddlex && x < paddlex + paddlew)
              dy = -dy;
            else if (y + dy > HEIGHT-r)
              clearInterval(intervalId);
          }
            x += dx;
            y += dy;
      }
      //deklaracija in inicializacija slike
      var oblak = new Image();
      oblak.src = "cloud.png";

      //vstavljanje slike
      ctx.drawImage(oblak, (j * (BRICKWIDTH + PADDING)) + PADDING, (i * (BRICKHEIGHT + PADDING)) + PADDING, BRICKWIDTH, BRICKHEIGHT);

      function draw() {
        clear();
        circle(x, y, 10);
        //premik ploščice levo in desno
        if(rightDown){
          if((paddlex+paddlew) < WIDTH){
            paddlex += 5;
          }else{
            paddlex = WIDTH-paddlew;
          }
        }
        else if(leftDown){
          if(paddlex>0){
            paddlex -=5;
          }else{
            paddlex=0;
          }
        }
        rect(paddlex, HEIGHT-paddleh, paddlew, paddleh);

        //riši opeke
        for (i=0; i < NROWS; i++) {
          for (j=0; j < NCOLS; j++) {
            if (bricks[i][j] == 1) {
              rect((j * (BRICKWIDTH + PADDING)) + PADDING,
              (i * (BRICKHEIGHT + PADDING)) + PADDING,
              BRICKWIDTH, BRICKHEIGHT);
            }
          }
        }

            rowheight = BRICKHEIGHT + PADDING + f/2; //Smo zadeli opeko?
            colwidth = BRICKWIDTH + PADDING + f/2;
            row = Math.floor(y/rowheight);
            col = Math.floor(x/colwidth);
            //Če smo zadeli opeko, vrni povratno kroglo in označi v tabeli, da opeke ni več
            if (y < NROWS * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
            dy = -dy; bricks[row][col] = 0;
            }
            if (x + dx > WIDTH -r || x + dx < 0+r)
                dx = -dx;
            if (y + dy < 0+r)
                dy = -dy;
            else if (y + dy > HEIGHT -(r+f)) {
                if (x > paddlex && x < paddlex + paddlew)
                dy = -dy;
                else if (y + dy > HEIGHT-r)
                clearInterval(intervalId);
            }
            x += dx;
            y += dy;
            }
            if(rightDown){
            if((paddlex+paddlew) < WIDTH){
            paddlex += 5;
            }else{
            paddlex = WIDTH-paddlew;
            }
            }
            else if(leftDown){
            if(paddlex>0){
            paddlex -=5;
            }else{
            paddlex=0;
            }
            }