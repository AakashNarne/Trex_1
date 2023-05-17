


var trex ,trex_running, trex_img
function preload(){
  trex_img=loadAnimation("trex1.png", "trex3.png", "trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(20, 170, 40, 50);
 ground=createSprite(150, 500, 100, 10);
 trex.addAnimation("trex1.png", "trex3.png", "trex4.png")
 trex.scale="0.4"
 ground.shapeColour=("black")
}

function draw(){
  background("White")
  drawSprites();

}
