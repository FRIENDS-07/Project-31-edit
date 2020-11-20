const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var bodies;

var ground,division7;
var division1,division2,division3;
var division4,division5,division6;
var particles;

function setup() {

  createCanvas(480,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  division1 = new Division(15);
  division2 = new Division(90);
  division3 = new Division(165);
  division4 = new Division(240);
  division5 = new Division(315);
  division6 = new Division(390);
  division7 = new Division(465);

}

function draw() {

  rectMode(CENTER);
  background("lavender");

  Engine.update(engine);

  fill("maroon");
  rect(5,350,10,700);
  rect(350,695,700,10);
  rect(475,350,10,700);

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  spawn_particles();

}

function spawn_particles(){

  if(frameCount % 100 === 0){
    particles = new Particle(Math.round(random(30,450)),-50);
  }

}

