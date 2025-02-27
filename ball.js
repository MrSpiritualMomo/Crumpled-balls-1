class Ball{
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.1,
          density: 2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("brown");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };