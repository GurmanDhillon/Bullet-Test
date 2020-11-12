var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
speed=random(55,90);
weight=random(400,1500);
bullet=createSprite(50, 200, 20, 70);
bullet.shapeColor="White";
speed=random(223,321);
weight=random(30,52);
wall=createSprite(1200, 200, thickness, height/2);
wall.shapeColor="80,80,80";
thickness=random(22,83);
}

function draw() {
background(255,255,255);
if (wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/22500;  
if (deformation>9){ 
bullet.shapeColor=color(green);  
}
if (deformation<10){
  bullet.shapeColor=color(red);  
  }
}  
  
  drawSprites();
}