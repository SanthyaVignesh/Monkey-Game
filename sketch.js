
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime,y;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


s
function setup() {
  createCanvas(500,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,350,850,10);
  ground.velocityX=-5;
  ground.x = ground.width/2;
  
  bananaGroup  = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
  background(256);
  
  survivalTime = Math.ceil(frameCount/frameRate());
  textSize(20);
  text("Survival Time : "+survivalTime,300,50);
  
  if(keyDown("space") && monkey.y > 200){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY+0.5;
  
  monkey.collide(ground);
  if(ground.x < 0){
    ground.x = ground.width/2;  
  }
  drawSprites();
  if(frameCount % 80 == 0){
    food();
    generateObstacle();
  }
   if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    }
 
}

function food(){
  banana = createSprite(400,250,20,20);
  y = Math.round(random(100,280));
  banana.y = y;
  banana.velocityX = -4;
  banana.lifetime = 80;
  banana.addImage(bananaImage);
  banana.scale = 0.08;  
  bananaGroup.add(banana);
}

function generateObstacle(){
  obstacle = createSprite(400,330,50,50);
  obstacle.velocityX = -5;
  obstacle.lifetime = 90;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacleGroup.add(obstacle);
}




