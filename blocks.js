class blocks {
    constructor(x,y,width,height) {
      var options = {
          friction:10
      }
      this.body = Bodies.rectangle(x,y,25,35,options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };