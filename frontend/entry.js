import Game from "./game.js";
import GameView from "./game_view.js";

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("game");
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;

  // 

let isDrawing = false

function draw(e){
  if(!isDrawing) return;
  if((e.offsetX>299 && e.offsetX< 1101) && (e.offsetY>169 && e.offsetY<671)) {
    ctx.lineTo(e.offsetX, e.offsetY);
  }
  ctx.stroke();
}

canvasEl.addEventListener('mousemove', draw);

canvasEl.addEventListener('mousemove', (e) => {
  if((e.offsetX>299 && e.offsetX< 1101) && (e.offsetY>169 && e.offsetY<671)) {
    isDrawing = true
    ctx.moveTo(e.offsetX, e.offsetY)
  }
});
canvasEl.addEventListener('mouseup', () => isDrawing = false);
canvasEl.addEventListener('mouseout', () => isDrawing = false);
  // 

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
});
