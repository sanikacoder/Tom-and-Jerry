var garden , image;
var tom , jerry , tomImage ,jerryImage; 
var tomImage2,tomImage3,jerryImage2,jerryImage3;


function preload() {
    
    tomImage=loadImage("tomOne.png");
    gardenImage= loadImage("garden.png");
    jerryImage=loadImage("jerryOne.png");
    tomImage2=loadAnimation("tomTwo.png","tomThree.png");
    tomImage3 = loadImage("tomFour.png");
    jerryImage2=loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImage3 = loadImage("jerryFour.png");




}

function setup(){
    createCanvas(800,600);
    
    
   garden = createSprite(400,300,800,600);
   garden.addImage("den",gardenImage);
   
   
  
   
     tom = createSprite(716,474,300,20);
     tom.addImage("run",tomImage);
     tom.scale = 0.13;
     tom.setCollider("rectangle",100,200,400,tom.height);
     tom.debug = false;
    

     jerry = createSprite(200,499,300,20);
     jerry.addImage("cherry",jerryImage);
     jerry.scale=0.13;
     jerry.setCollider("rectangle",900,200,400,jerry.height);
     jerry.debug = false;
    

}

function draw() {

    background(225,225,225);

   

   
    keyPressed();
    drawSprites();
    stroke(10);
    text( mouseX + ',' + mouseY,60,45);
}


function keyPressed(){

  if (keyCode === RIGHT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tom_running",tomImage2);
    tom.changeAnimation("tom_running");

    jerry.addAnimation("jerry_teasing",jerryImage2);
    jerry.changeAnimation("jerry_teasing");

  }

  if (tom.x - jerry.x < (tom.width - jerry.width) / 2){
    tom.velocityX = 0;
    tom.addImage("final",tomImage3);
    tom.changeImage("final");
    jerry.addImage("finalImage",jerryImage3);
    jerry.changeImage("finalImage");
  }

}
