var sea;
var ship;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,20,20)
  sea.addImage(seaImg);
  sea.velocityX = -10;
  ship = createSprite(200,270);
  ship.addAnimation("ship", shipImg1);
  ship.scale= 0.3;
}

function draw() {
  background("blue")
  drawSprites();

  if(sea.x<0){
    sea.x = sea.width/2;
  }

}