class CourseOne {
  constructor(ctx) {
    this.ctx = ctx;
    this.placeTree(this.ctx, 800, 200)
    this.placeTree(this.ctx, 400, 250)
    this.placeTree(this.ctx, 500, 450)
  }

  placeTree(ctx, x, y) {
    let tree = new Image();
    tree.src = '../public/tree1.png';
    tree.onload = function(){
      ctx.drawImage(tree, x, y, 60, 100);
    }
  }
}
export default CourseOne;
