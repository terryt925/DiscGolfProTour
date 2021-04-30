import Basket from "./basket.js";

class Disc {
  constructor(ctx, x, y) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.disc()
  }

  disc() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, true);  
    this.ctx.fillStyle = 'red';
    this.ctx.closePath();
    this.ctx.fill();
  }


  collideWith(otherObject) {
    if (otherObject instanceof Basket) {
      console.log('Good Job!')
    }
  }

  // clear() {
  //   ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  //   ctx.fillRect(0,0,canvas.width,canvas.height);
  // }
  
  // this.ctx.addEventListener('mousemove', function(e) {
  // if ((x >= 300 && x <= 1100) && (y >= 170 && y <= 570)) {
  //   clear();
  //   a = e.clientX;
  //   b = e.clientY;
  //   drawDashedLine(a, b);
  // }})

  // drawDashedLine(x, y) {
  //   ctx.beginPath();
  //   ctx.setLineDash(10, 10);
  //   ctx.moveTo(x+50, y+25);
  //   ctx.lineTo(300, y);
  //   ctx.stroke();
  //   y += 20;
  // }

}

// Disc.prototype.collideWith = function collideWith(otherObject) {
//   if (otherObject instanceof Basket) {
//     console.log('Good Job!')
//   }
//   return false;
// };

export default Disc;