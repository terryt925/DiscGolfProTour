import CourseOne from './courses/courseOne.js';
import Player from "./player.js";
import Basket from './basket.js';


class Game {
  constructor() {
    this.attempts = [];
    this.hole = 1

  }

  course(ctx) {
    if(this.hole === 1) return new CourseOne(ctx);
  }

  player(ctx) {
    return new Player(this.hole, ctx)
  }

  placeBasket(ctx) {
    return new Basket(this.hole, ctx)
  }



}




export default Game;
