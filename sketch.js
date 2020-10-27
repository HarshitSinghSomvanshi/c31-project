const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;

var division1,division2,division3,division4,division5,division6,division7;

var border1,border2,border3,border4;

var plinko1,plinko2,plinko3,plinko4,plinko5;
var plinko6,plinko7,plinko8,plinko9,plinko10;
var plinko11,plinko12,plinko13,plinko14,plinko15;
var plinko16,plinko17,plinko18,plinko19,plinko20;

var particles = [];

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
   ground = new Ground(240,780,480,40);

////

   division1 = new Division(60,780,20,480);
   division2 = new Division(120,780,20,480);
   division3 = new Division(180,780,20,480);
   division4 = new Division(240,780,20,480);
   division5 = new Division(300,780,20,480);
   division6 = new Division(360,780,20,480);
   division7 = new Division(420,780,20,480);

////

   border1 = new Ground(10,400,20,800);
   border2 = new Ground(470,400,20,800);
   border3 = new Ground(240,790,800,20);
   border4 = new Ground(240,10,800,20);

////

   plinko1 = new Plinko(50,100);
   plinko2 = new Plinko(130,100);
   plinko3 = new Plinko(230,100);
   plinko4 = new Plinko(330,100);
   plinko5 = new Plinko(430,100);

   plinko6 = new Plinko(50,200);
   plinko7 = new Plinko(130,200);
   plinko8 = new Plinko(230,200);
   plinko9 = new Plinko(330,200);
   plinko10 = new Plinko(430,200);

   plinko11 = new Plinko(50,300);
   plinko12 = new Plinko(130,300);
   plinko13 = new Plinko(230,300);
   plinko14 = new Plinko(330,300);
   plinko15 = new Plinko(430,300);

   plinko16 = new Plinko(50,400);
   plinko17 = new Plinko(130,400);
   plinko18 = new Plinko(230,400);
   plinko19 = new Plinko(330,400);
   plinko20 = new Plinko(430,400);

  ///
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
    
}


function draw() {
  Engine.update(engine);

  background(0); 
  textSize(30); 
  text("50",70,750);
  text("40",130,750);
  text("30",190,750);
  text("30",250,750);
  text("40",310,750);
  text("50",370,750);

  fill(255);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  fill("brown");
  border1.display();
  border2.display();
  border3.display();
  border4.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();

  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();

  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();

  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
    
  }
}