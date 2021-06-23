const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Ground1;

var particles = [];
var divisions = [];
var plinkos = [];


function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  
  Border1 = new Border(240,800,800,20);
  Border2 = new Border(480,400,20,800);
  Border3 = new Border(0,400,20,800);
  Border4 = new Border(240,0,800,20);

  Ground1 = new Ground(240,780,460,20);

  Division1 = new Ground(12,800,10,600);
  Division2 = new Ground(78,800,10,600);
  Division3 = new Ground(156,800,10,600);
  Division4 = new Ground(234,800,10,600);
  Division5 = new Ground(312,800,10,600);
  Division6 = new Ground(390,800,10,600);
  Division7 = new Ground(468,800,10,600);

  Plinko1 = new Plinko(0,150,15);

  Particle1 = new Particle(240,400,20);



}

function draw() {
  background("black");  

  Engine.update(engine);

  Ground1.display();

  Division1.display();
  Division2.display();
  Division3.display();
  Division4.display();
  Division5.display();
  Division6.display();
  Division7.display();

  Border1.display();
  Border2.display();
  Border3.display();
  Border4.display();
  
  //Particle1.display();

  Plinko1.display();

  if(frameCount%60 === 0) {
    particles.push(new Particle(random(200, 300), 10, 10));
  }

  for(var j = 0; j < particles.length; j++) {

      particles[j].display();
  }


  //console.log(Particle1.x);

  
  
  drawSprites();
}