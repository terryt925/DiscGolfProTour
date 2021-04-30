import Disc from './disc.js';

class Player {

  constructor(hole, ctx) {
    this.hole = hole;
    this.ctx = ctx;
    this.teePad(300, 360)
  }

  teePad(x, y) {
    if (this.hole === 1) {
      this.horizontalTeePad(x, y);
      // new Disc(this.ctx, x+50, y+25)
    }
  }

    horizontalTeePad(x, y) {
      this.ctx.beginPath();
      this.ctx.moveTo(x,y);
      this.ctx.lineTo(x+100, y);
      this.ctx.lineTo(x+100, y+50);
      this.ctx.lineTo(x, y+50);
      this.ctx.closePath();
      this.ctx.fillStyle = '#689f38';
      this.ctx.fill();
    }

    


}

export default Player;