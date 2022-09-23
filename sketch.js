var bg
var ss,ssImg
var alien,a1,a2,a3,a4,a5,a6,a7,a8,a9
var alienGroup
var laser,laserGroup
var score=0
var gameState="play"
function preload(){
  bg=loadImage("assets/bg2.jpg")
  ssImg=loadImage("assets/ss1.jpg")
  a1=loadImage("assets/a1.png")
  a2=loadImage("assets/a2.png")
  a3=loadImage("assets/a3.png")
  a4=loadImage("assets/a4.png")
  a5=loadImage("assets/a5.png")
  a6=loadImage("assets/a6.png")
  a7=loadImage("assets/a7.png")
  a8=loadImage("assets/a8.png")
  a9=loadImage("assets/a9.png")
}

function setup() {
  createCanvas(1500, 700);
ss=createSprite(100,350)
  ss.addImage(ssImg)
  ss.scale=0.5
  alienGroup=new Group()
laserGroup=new Group()
}

function draw() {
  
  background(bg);
fill (255)
textSize(30)
text("score:"+score,50,50)
if(keyDown("space")){
releaseLaser()
}
if(keyDown(UP_ARROW)){
  ss.y-=5
  }
  if(keyDown(DOWN_ARROW)){
    ss.y+=5
    }
  spawnAliens()
  laserGroup.isTouching(alienGroup,destroyAlien)
  if(alienGroup.isTouching(ss)){
gameState="end"
  }
  if(gameState==="end"){
text("game over",600,250)
  }
 drawSprites()



}

function spawnAliens(){
   if(frameCount%150===0){
   var rand=Math.round(random(100,600))
   alien=createSprite(1500,rand)
   alien.velocityX=-6
   var rand=Math.round(random(1,9))
   switch(rand){
   case 1:
    alien.addImage(a1)
    alien.scale=0.5
    break
    case 2:
      alien.addImage(a2)
      alien.scale=0.5
      break
      case 3:
    alien.addImage(a3)
    alien.scale=0.5
    break
    case 4:
      alien.addImage(a4)
      alien.scale=0.5
      break
      case 5:
        alien.addImage(a5)
        alien.scale=0.5
        break
        case 6:
          alien.addImage(a6)
          alien.scale=0.5
          break
          case 7:
            alien.addImage(a7)
            alien.scale=0.5
            break
            case 8:
              alien.addImage(a8)
              alien.scale=0.5
              break
              case 9:
    alien.addImage(a9)
    alien.scale=0.5
    break
   }
   alien.lifetime=400
   alienGroup.add(alien)
   }
}
   function releaseLaser(){
    laser=createSprite(200,ss.position.y,60,5)
    laser.shapeColor="lime"
    laser.velocityX=10
    laser.lifetime=160
    laserGroup.add(laser)
   }
function destroyAlien(laser,alien){
alien.destroy()
laserGroup.destroyEach()
score+=5
}



