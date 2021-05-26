const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var tram1,tram2,tram3,tram4,tram5,tram6;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var rock

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  tram1 = new Tram (200,200,100,50);
  tram2 = new Tram (300,200,100,50);
  tram3 = new Tram (400,200,100,50);
  tram4 = new Tram (500,200,100,50);
  tram5 = new Tram (600,200,100,50);
  tram6 = new Tram (700,200,100,50);
  rock = new Rock (1000,210,200,100);

  chain1 = new Chain (tram1.body, tram2.body);
  chain2 = new Chain (tram2.body, tram3.body);
  chain3 = new Chain (tram3.body, tram4.body);
  chain4 = new Chain (tram4.body, tram5.body);
  chain5 = new Chain (tram5.body, tram6.body);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  tram1.show();
  tram2.show();
  tram3.show();
  tram4.show();
  tram5.show();
  tram6.show();
  rock.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();

  }
  
  function keyPressed(){
  
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(tram6.body,{x:tram6.body.position.x, y: tram6.body.position.y})

    }



  }

  
