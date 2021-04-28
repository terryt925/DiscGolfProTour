// import basket from '../public/basket.png'

class Basket {
  constructor(hole, ctx) {
    this.hole = hole;
    this.ctx = ctx;
    this.placeBasket(this.ctx);
  }


  placeBasket(ctx) {
    let basket = new Image();
    basket.src = '../public/basket.png';
    if (this.hole === 1) {
      basket.onload = function(){
      ctx.drawImage(basket, 1000, 260, 60, 100);
    }
    }
  }

}

export default Basket;