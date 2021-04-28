    

class Util {

  tree(ctx, a, b) {
    ctx.moveTo(a, b);
    ctx.lineTo(a+15,b+25);
    ctx.lineTo(a+5,b+25);
    ctx.lineTo(a+24,b+50);
    ctx.lineTo(a-24, b+50);
    ctx.lineTo(a-5,b+25);
    ctx.lineTo(a-15,b+25);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
  }
}

export default Util;

