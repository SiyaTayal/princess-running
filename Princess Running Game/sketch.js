var bg, bgImg,background


function preload(){
bgImg = loadImage("background.png")
princessImg = loadAnimation("princess1.png","princess2.png","princess3.png")
pondImg = loadImage("pond.png")
barrierImg = loadImage("barrier.png")
fallingImg = loadImage("falling_princess.png")
}

function setup(){
createCanvas(1500,700)
//background image
bg = createSprite(750,350,1,1);
bg.addImage(bgImg);
bg.scale = 1.3
princess=createSprite(50,570)
princess.addAnimation("princessRunning",princessImg )
princess.addAnimation("fall",fallingImg)
princess.scale=0.3
bg2 = createSprite(50,620,1500,10);
bg2.visible=false
obstaclesGroup = new Group ()
}

function draw() {
  
  background("black");
        
  bg.velocityX=-4
  if (bg.x<0){
    bg.x=750
  }
  
   
        
        if(keyDown("space")){
          princess.velocityY=-12
        }
       princess.velocityY+=1
          princess.collide(bg2)
         
          makeObstacles()
          if (obstaclesGroup.isTouching(princess)){
          princess.changeAnimation("fall",fallingImg)

          }
        drawSprites();
}
function makeObstacles(){
  if(frameCount%200===0){
  obstacles=createSprite(width,610)
  obstacles.velocityX=-4
  
  obstacles.scale = 0.3
 var d= Math.round(random(1,2))
 if (d===1){
  obstacles.addImage(pondImg)
 }else {
  obstacles.addImage(barrierImg)
 }
 obstaclesGroup.add(obstacles)
  }

}
