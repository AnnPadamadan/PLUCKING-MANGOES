
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg, boy;

function preload()
{
	boyImg = loadImage("imgs/boy.png");
	
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(200, 630, 10, 10);
	boy.addImage(boyImg);
	boy.scale = 0.1;



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone1 = new stone(150, 570, 25);
mango1 = new mangoes(530, 400, 50);
mango2 = new mangoes(480, 450, 40);
mango3 = new mangoes(680, 450, 50);
mango4 = new mangoes(550, 350, 20);
mango5 = new mangoes(600, 420, 30);
mango6 = new mangoes(600, 350, 40);
tree1 = new trees(550,500, 300, 400);
ground1 = new grounds(400, 700, 800, 50);
band1 = new band({x:150, y:570}, stone1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground1.display();
  
  drawSprites();
  stone1.display();
  band1.display();
}




function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    band1.fly();
}

function detectCollision(lstone, lmango){
mangoPos=lmango.body.position;
stonePos = lstone.body.position

var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body, false);

}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body, {x: 150, y:570})
		band1.attach(stone1.body);
	}
}



