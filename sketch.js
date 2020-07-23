const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, ball, ground, ground1, ground2, slingshot1;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
ball= new ball1(100, 150, 6, 30);
ground = new Ground(400, 390, 800, 20);
ground1 = new Ground (350, 290, 200, 20)
ground2 = new Ground (650, 190, 200, 20)
block8= new blocks(290, 265)
block7= new blocks(320, 265)
block6= new blocks(350, 265)
block5= new blocks(380, 265)
block4= new blocks(410, 265)

block3 = new blocks(320, 220)
block2 = new blocks(350, 220)
block1 = new blocks(380, 220)
block9 = new blocks(350, 180)

block18= new blocks(570, 155)
block17= new blocks(600, 155)
block16= new blocks(630, 155)
block15= new blocks(660, 155)
block14= new blocks(690, 155)

block13 = new blocks(600, 110)
block12 = new blocks(630, 110)
block11 = new blocks(660, 110)
block19 = new blocks(630, 70)

slingshot1 = new slingshot(ball.body,{x:100, y:150});

	//Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  text("x:"+mouseX,650,20)
  text("y;"+mouseY,650,40)
  strokeWeight(4);

ball.display();
ground.display();
ground1.display();
ground2.display();
block8.display();
block7.display();
block6.display();
block5.display();
block4.display();
block3.display();
block2.display();
block1.display();
block9.display();
slingshot1.display();
block18.display();
block17.display();
block16.display();
block15.display();
block14.display();
block13.display();
block12.display();
block11.display();
block19.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}