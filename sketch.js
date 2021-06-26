var jakeImg, pathImg, path, jake, left_boundary, right_boundary;

function preload(){
  //pre-load images
   pathImg = loadImage("path.png");
  jakeImg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //moving background
  path = createSprite(200, 200);
  path.addImage(pathImg); 
  path.scale= 1.2;
  path.velocityY=5;

  

  //creating Jake
  jake = createSprite(200, 200, 20, 20);
  jake.addAnimation("running", jakeImg);

  //creating the boundaries
  left_boundary = createSprite(10, 300, 100, 400);
  left_boundary.visible = false;

  right_boundary = createSprite(390, 300, 80, 400);
  right_boundary.visible = false;

}

function draw() {
  background(0);


//code to reset the background
if(path.y > 400) {
  path.y = height/2;
}


jake.collide(left_boundary);
jake.collide(right_boundary);

drawSprites();
}
