
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,600,1600,20);
	ball = new Ball(100,200,80,80);	
	bps1 = new basket_parts(950,580,300,20);
	bps2 = new basket_parts(800,490,20,200)
	bps3 = new basket_parts(1100,490,20,200)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  ball.display();
  bps1.display();
  bps2.display();
  bps3.display();
  
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position,{x:350,y:-350})
	}
}	

