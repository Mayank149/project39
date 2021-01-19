var player;
var stone;
var w1,w2;
var rock,boy;

var track;
var power = 4;

var gameState = 0;

function preload(){

rock = loadImage("rock.png");
boy = loadImage("boy.png");
track = loadImage("track.jpg");

}


function setup() {
  createCanvas(displayWidth-50,displayHeight-50);
  
 w1 = createSprite(displayWidth/2,30,width,10);
 w1.visible = false;

 w2 = createSprite(displayWidth/2,displayHeight-30,width,10);
 w2.visible = false;

  player = createSprite(displayWidth/2,displayHeight/2,40,50);
  player.addImage(boy);
  player.scale = 0.08;
  player.setCollider('circle',0,0,450)

  stone = createSprite(player.x+500,random(20,900),70,70);
  stone.addImage(rock);
  stone.scale = 0.3
  stone.setCollider('circle',0,0,200)

  textSize(25);
  fill("red")

 
 
}

function draw() {
  background(track);  
  
  drawSprites();

  player.collide(w1);
  player.collide(w2);

  camera.position.x = player.x;
  camera.position.y = displayHeight/2;
  
   if(gameState === 0){
       textSize(25);
       fill("red")
       text("Press Space To Begin, Up And Down Arrow To Control",player.x-50,player.y+70);
     
   }
  
  if(gameState === 1){

    if(frameCount%30 === 0){
      stone = createSprite(player.x+500,random(displayWidth-200,displayHeight-700),70,70);
      stone.addImage(rock);
      stone.setCollider('circle',0,0,200)

      
      stone.scale = 0.3
      
    }

    player.x = player.x+20;
    w1.x = w1.x+20;
    w2.x = w2.x+20;
    
    

  }

 
 
  if(player.isTouching(stone) && power !==0){

    
     stone.destroy();
     power=power-1;
    }

    if(power === 0 ){

      gameState =2;
    }

    if(gameState === 2){
      textSize(25);
      fill("red")
      text("GAME OVER, PRESS R TO RESTART",player.x,player.y);

     

    }
     
    if( keyIsDown(UP_ARROW)&&gameState === 1 ){

      player.y = player.y-20


    }

    if( keyIsDown(DOWN_ARROW)&&gameState === 1 ){

      player.y = player.y+20


    }

  

  if(keyWentDown(82)&&gameState ===2 ){
     
    
    gameState = 0;
    
    stone.destroy();
    power = 4;
   
    
    

  }
  if(keyWentDown(32)&&gameState === 0){

    gameState = 1;
  
    }
     fill("blue")
    text("Power :"+power,player.x,player.y-60);
    
}