const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball;
var blower;
var blowerMouth;

var button;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(500, 200, 80, 80);
  blower = new Blower(500, 400, 160, 160);
  blowerMouth = new BlowerMouth(275, 400, 300, 50)

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton")
  button.mouseClicked(blow);
}

function draw() {
  background("pink");  

  Engine.update(engine);

  ball.show();
  blower.show();
  blowerMouth.show();
}

function blow() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x: 0, y: 0.05});
}