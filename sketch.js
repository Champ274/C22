var bullet;
var speed,weight;
var wall,thickness;
function setup() {
  createCanvas(1600,400);
  bullet =createSprite(100, 120, 5, 10);
 thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
  wall=createSprite(1200,200,thickness,height/2)
  bullet.velocityX=speed;
  //console.log('deformation');
}

function draw() {
  background(255,255,255); 
if (wall.x-bullet.x<(bullet.width+wall.width)/2)
{
bullet.velocityX=0
var deformation=0.5 * weight*  speed* speed/22509;
if (deformation>10)
{
  bullet.shapeColor=('green')
}
if (deformation<10){
bullet.shapeColor=('red')
}
//if(deformation<100){
  //bullet.shapeColor=('green');
//}
}
  drawSprites();
}