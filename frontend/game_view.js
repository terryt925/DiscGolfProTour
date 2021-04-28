
class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.fieldSetup(300, 170)
    this.game.player(this.ctx);
    this.game.course(this.ctx);
    this.game.placeBasket(this.ctx);
  }

  start() {
    this.lastTime = 0;
  }
  
  
  fieldSetup(x, y) {
    this.ctx.beginPath();
    this.ctx.moveTo(x,y);
    this.ctx.lineTo(x+800, y);
    this.ctx.lineTo(x+800, y+500);
    this.ctx.lineTo(x, y+500);
    this.ctx.closePath();
    this.ctx.fillStyle = '#aed581';
    this.ctx.fill();
  }
    
  // basketExample() {
  //   this.ctx.beginPath();
  //   this.ctx.moveTo(950, 380)
  //   this.lineTo()
  // }

}



export default GameView;