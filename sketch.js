var movingrect 
var fixedrect
var object

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = "lightblue";

  movingrect = createSprite(300,200,25,25);
  movingrect.shapeColor = "orange";

  object = createSprite(200,200,25,25);
  object.shapeColor = "red";
  object.velocityX = 2;
}

function draw() {
  background(255,255,255);  

  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if (isTouching(fixedrect,movingrect)){
    fixedrect.shapeColor = "lightgreen";
    movingrect.shapeColor = "yellow";
  }  

  else{
    fixedrect.shapeColor = "lightblue";
    movingrect.shapeColor = "orange";
  }
bounceOff(object,fixedrect);

  drawSprites();
}








