
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	box1 = new Box(800,680,200,25)
	box2 = new Box(700,680,25,200)
	box3 = new Box(900,680,25,200)

	ball = new Ball(100,680,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

 ball.display();
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:38, y:-38})
	}
}


