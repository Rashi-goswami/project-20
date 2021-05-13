var forest ,forestImg;
var cat ,catImg;
var mouse,mouseImg;

function preload() {

    forestImg=loadImage("images/garden.png");
    cat_sleeping=loadAnimation("images/cat1.png");
    cat_walking = loadAnimation("images/cat2.png","images/cat3.png")
    cat_sitting = loadAnimation("images/cat4.png")
    mouseImg=loadAnimation("images/mouse1.png");
    mouse_teasing=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse_quite=loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   

    cat=createSprite(800,700,110,30);
    cat.addAnimation("sleeping",cat_sleeping);
    cat.scale = 0.1;


    mouse=createSprite(200,700);
    mouse.addAnimation("cheese",mouseImg);
    mouse.scale=0.1;

}

function draw() {

    background(forestImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x -mouse.x < 70){

    }
    if (cat.isTouching(mouse)){
          cat.velocityX=0;
          cat.addAnimation("sitting",cat_sitting);
          cat.changeAnimation("sitting",cat_sitting);
          mouse.addAnimation( "normal",mouse_quite);
          mouse.changeAnimation( "normal",mouse_quite);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -3;
      cat.addAnimation("walking",cat_walking);
      cat.changeAnimation("walking",cat_walking); 
      mouse.addAnimation("teasing",mouse_teasing)
      mouse.changeAnimation("teasing",mouse_teasing)
  }


}