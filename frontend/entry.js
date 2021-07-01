import Disc from "./disc.js";
import Game from "./game.js";
import GameView from "./game_view.js";

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("game");
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;
  const ctx = canvasEl.getContext("2d");
  // let game;
  let game = new Game();
  document.getElementById("game").style.cursor = "pointer";
  

  let isDrawing = false
  function draw(e){
    if(!isDrawing) return;
    if((e.offsetX>299 && e.offsetX< 1101) && (e.offsetY>169 && e.offsetY<671)) {
      document.getElementById("game").style.cursor = "crosshair";
    } else {
      document.getElementById("game").style.cursor = "pointer";
    }
    ctx.stroke();
  }
  canvasEl.addEventListener('mousemove', draw);
  canvasEl.addEventListener('mousemove', (e) => {
    if((e.offsetX>299 && e.offsetX< 1101) && (e.offsetY>169 && e.offsetY<671)) {
      isDrawing = true
    }
  });
  canvasEl.addEventListener('mouseup', () => isDrawing = false);
  canvasEl.addEventListener('mouseout', () => isDrawing = false);
  canvasEl.addEventListener('mousedown', (e) => {
      var x = 400, y = 385;
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      new GameView(game,ctx).start();
      new Disc(ctx, x, y)
      // ctx.fillStyle = 'red';
      // ctx.fill();

      // if(x < e.offsetX) {
      //   x += 1; 
      // } else if(x > e.offsetX) {
      //   x -= 1
      // }
      // if(y < e.offsetY) {
      //   y += 1;
      // } else if(y > e.offsetY) {
      //   y -= 1;
      // }
      if(x !== e.offsetX || y !== e.offsetY) {
        // let vx = (e.offsetX - x)/(e.offsetY - y)
        // if (vx < 0) vx *= -1
        // let vy = (e.offsetY - y)/(e.offsetX - x)
        drawBoard(x, y, e.offsetX, e.offsetY);
      }
    
  });


  new GameView(game, ctx);

  
  function drawBoard(a,b, ea, eb) {
    if((ea>299 && ea< 1101) && (eb>169 && eb<671)) {
      ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      new GameView(game,ctx).start();
      new Disc(ctx, a, b)
      let redo = false;
      if(a < ea-4) {
        a += 4; 
        redo = true;
      } else if(a > ea+4) {
        a -= 4
        redo = true;
      }
      if(b < eb-1) {
        b += 1;
        redo = true;
      } else if(b > eb+1) {
        b -= 1;
        redo = true;
      }
      if(redo === true) {
        // setInterval(drawBoard(a,b, ea, eb), 1000);
        requestAnimationFrame(() => drawBoard(a,b,ea,eb))
        // setInterval(function(){ alert("Hello"); }, 3000);
      }
    }
  }

}); 

