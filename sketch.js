const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score;
var reset;
var backgroundImg;
var bg = "download.jpeg";
var gameState = "ONSTRING";
function preload() {
  //backgroundImg = loadImage("sprites/bg.png");
  backgroundchange();
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(1500, 550);

  box1 = new Box(430, 235, 30, 40);
  box2 = new Box(460, 235, 30, 40);
  box3 = new Box(490, 235, 30, 40);
  box4 = new Box(520, 235, 30, 40);
  box5 = new Box(550, 235, 30, 40);
  box6 = new Box(460, 205, 30, 40);
  box7 = new Box(490, 205, 30, 40);
  box8 = new Box(520, 205, 30, 40);
  //topist
  box9 = new Box(490, 155, 30, 40);

  ground = new Ground(490, 280, 200, 20);

  ground1 = new Ground(810, 150, 200, 20);
  box11 = new Box(750, 120, 30, 40);
  box22 = new Box(780, 120, 30, 40);
  box33 = new Box(810, 120, 30, 40);
  box44 = new Box(840, 120, 30, 40);
  box55 = new Box(870, 120, 30, 40);
  box66 = new Box(780, 95, 30, 40);
  box77 = new Box(810, 95, 30, 40);
  box88 = new Box(840, 95, 30, 40);
  //topist123
  box99 = new Box(810, 50, 30, 40);

  circle = new Hey(100, 250, 500, 500);

  chain = new Chain(circle.body, { x: 100, y: 250 }, 10, 0.04);

  ground3 = new Ground(500, 500, 1500, 50);

  barrier = new Streetlight(340, 400, 10, 240);
  barrier2 = new Streetlight(700, 300, 10, 330);
  score = 0;
  reset = 0;
}

function draw() {
  if (backgroundImg) background(backgroundImg);
  Engine.update(engine);

  textSize(30);
  fill("red");
  text("SCORE = " + score, 100, 50);
  textSize(20);
  text("Reset Turns = " + reset, 900, 50);
  if (keyDown("r")) {
    score = 0;
    reset = 0;
  }
  if (reset === 6) {
    score = 0;
    World.remove(circle.body, world);
  }
  if (score === 360) {
    fill(grey);
    text("You Win!", 700, 250);
  }
  drawSprites();
  fill("red");

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  fill("green");
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box11.display();
  box11.score();
  box22.display();
  box22.score();
  box33.display();
  fill("blue");
  box33.score();
  box44.display();
  box44.score();
  box55.display();
  box55.score();
  box66.display();
  box66.score();
  box77.display();
  box77.score();
  box88.display();
  box88.score();
  box99.display();
  box99.score();
  fill("");
  ground.display();
  ground1.display();
  circle.display();
  chain.display();
  ground3.display();
  barrier.display();
  barrier2.display();
  if (keyDown(RIGHT_ARROW)) {
    camera.x = camera.x + 17;
  }
  if (keyDown(LEFT_ARROW)) {
    camera.x = camera.x - 17;
  }
}
function mouseDragged() {
  if (gameState !== "LAUNCHED") {
    Matter.Body.setPosition(circle.body, { x: mouseX, y: mouseY });
  }
}

function mouseReleased() {
  chain.fly();
  //mouseDragged=false
  gameState = "LAUNCHED";
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(circle.body, { x: 100, y: 250 });
    chain.attach(circle.body);
    mouseDragged();
    gameState = "ONSTRING";
    reset = reset + 1;
  }
}
async function backgroundchange() {
  var response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  console.log(response);
  var responseJson = await response.json();
  console.log(responseJson);
  var time = responseJson.datetime;
  console.log(time);
  var hour = time.slice(11, 13);
  console.log(hour);
  if (hour >= 6 && hour <= 19) {
    bg = "day1Img.jpg";
  } else {
    bg = "night2Img.jpg";
  }
  backgroundImg = loadImage(bg);
}
