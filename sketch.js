const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    polygon = new Polygon(100,400);
    platform = new Ground(550,600,300,20);
    log1 = new Log(475,590,70,45,0);
    log2 = new Log(515,590,70,45,0);
    log3 = new Log(545,590,70,45,0);
    log4 = new Log(575,590,70,45,0);
    log5 = new Log(605,590,70,45,0);

    log6 = new Log(475,490,70,45,0);
    log7 = new Log(515,490,70,45,0);
    log8 = new Log(545,490,70,45,0);
    log9 = new Log(605,490,70,45,0);

    log10 = new Log(515,390,70,45,0);
    log11 = new Log(545,390,70,45,0);
    log12 = new Log(605,390,70,45,0);

    slingshot = new SlingShot(polygon.body, {x:200, y:400});
}

function draw(){
    background(255);
    Engine.update(engine);
    text("Score: " + score , 750, 40);
    strokeWeight(4);
    ground.display();
    polygon.display();
    slingshot.display();
    platform.display(); 
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    log1.score();
    log2.score();
    log3.score();
    log4.score();
    log5.score();
    log6.score();
    log7.score();
    log8.score();
    log9.score();
    log10.score();
    log11.score();
    log12.score();
    console.log(score);
}
function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased() {
    slingshot.fly()
}

function keyPressed(){
    if(keyCode === 82){
       World.remove(world, polygon);
       polygon = new Polygon(100,400);
       slingshot.Attached(polygon.body);
    }
}
