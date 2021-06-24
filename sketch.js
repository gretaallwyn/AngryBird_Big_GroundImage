const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,590,1200,20);
    platform = new Platform(150,500, 300, 350);

    
    box1 = new Box(700,550,100,100);
    box2 = new Box(800,550,100,100);
    pig1 = new Pig(770, 550);
    log1 = new Log(760,500,300,PI);

    box3 = new Box(700,470,100,100);
    box4 = new Box(800,470,100,100);
    pig3 = new Pig(770, 470);

    log3 =  new Log(760,420,300,PI);

    box5 = new Box(750,380,90,90);
    log4 = new Log(710,320,170, PI/17);
    log5 = new Log(800,320,170, -PI/7);

    bird = new Bird(200,160);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:160});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    platform.display();

    box1.display();
    box2.display();
    
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    
    //log6.display();
    slingshot.display();    

    text(mouseX + "," + mouseY, mouseX, mouseY);
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}