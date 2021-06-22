
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinObj = new
		dustbin(1200, 650);
	paperObject = new paper(200, 450, 40);
	groundObject = new ground(width / 2, 670, width, 20);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	dustbinObj.display(); paperObject.display(); groundObject.display();


	drawSprites();

}



function
	keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -85 });
	}
}