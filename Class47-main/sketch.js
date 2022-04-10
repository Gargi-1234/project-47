const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var startButton, clickHereButton
var ball, ground, slingshot1, slingshot1Img
var background1Img, backgroundSprite, background2Img, background3Img
var gate, gateImg, invisibleSprite1, invisibleSprite2, instructionBox2, instructionBox2Img
var block1, block2, block3, block4, block5, block6, block7, block8, block9, blockImg
var block1s, block2s, block3s, block4s, block5s, block6s, block7s, block8s, block9s
var carnival1, carnival1Img, carnival2, carnival2Img, carnival5, carnival5Img, carnival6, carnival6Img
var carnival3, carnival3Img, carnival4, carnival4Img, stone, stoneImg
var openButton, openButtonImg, chest1, chest2, key1chest, key1chest2, bronzeKey, bronzeKeyImg
var ticket, ticketImg, ticketBooth, ticketBoothImg, instructionBox3, instructionBox3Img

var lifeBarA, lifeBarImage, lifeBarB

var wall1m, wall2m, wall3m, wall4m, wall5m, wall6m, wall7m, wall8m

var wall9m, wall10m, wall13m, wall14m, wall15m, wall16m, wall17m, wall18m
var wall12m, wall19m, wall11m, wall20m,
wall21m, wall23m, wall22m

var maze1, maze2, maze3, maze1Img, maze2Img, maze3Img, player1

var mazeEntrance, mazeEntranceImg, playNow, playNowImg
var instructionBox4, instructionBox4Img, instructionBox5, instructionBox5Img
var welcome, welcomeImg, instructionBox1, instructionBox1Img
var play, clickHere, canvasSprite1, canvasSprite2
var gameState = 0 

// maze, maze visuals, map for the maze, entrance and exit , gameState = 3 >> maze , gameState = 4 >> maze end  

function preload(){
  background1Img = loadImage("images/background.jpg")
  background2Img = loadImage("images/carnival/1.jpg")
  background3Img = loadImage("images/background2.jpg")
  welcomeImg = loadImage("images/welcome.png")
  carnival1Img = loadImage("images/carnival/1.jpg")
  carnival2Img = loadImage("images/carnival/2.jpg")
  carnival3Img = loadImage("images/carnival/3.jpg")
  carnival4Img = loadImage("images/carnival/4.jpg")
  carnival5Img = loadImage("images/carnival/5.jpg")
  carnival6Img = loadImage("images/carnival/6.jpg")
  gateImg = loadImage("images/gate.png")
  play = loadImage("images/play.png")
  clickHere = loadImage("images/clickHere.png")
  ticketImg = loadImage("images/ticket.png")
  ticketBoothImg = loadImage("images/ticketBooth.png")
  instructionBox1Img = loadImage("images/Instruction1.png")
  instructionBox2Img = loadImage("images/Instruction2.png")
  chest1 = loadImage("images/chest1.png")
  chest2 = loadImage("images/chest2.png")
  openButtonImg = loadImage("images/open.png")
  instructionBox3Img = loadImage("images/Instruction3.png")
  blockImg = loadImage("images/block.png")
  stoneImg = loadImage("images/stone.png")
  bronzeKeyImg = loadImage("images/bronzeKey.png")
  instructionBox4Img = loadImage("images/instruction4.png")
  mazeEntranceImg = loadImage("images/maze/maze1.jpg")
  instructionBox5Img = loadImage("images/instruction5.png")
  playNowImg = loadImage("images/playNow.png")
  maze1Img = loadImage("images/maze/maze2.jpg")
  maze2Img = loadImage("images/maze/maze3.jpg")
  maze3Img = loadImage("images/maze/maze4.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  maze1 = createSprite(400,200,800,400)
  maze1.addImage(maze1Img)
  maze1.scale = 0.499

  maze2 = createSprite(400,200,800,400)
  maze2.addImage(maze2Img)
  maze2.scale = 1.1

  canvasSprite1 = createSprite(102,102,200,200)
  canvasSprite1.shapeColor = "black"

  cardboard1 = createSprite(50/2,30/2,10/2,50/2);
  cardboard1.shapeColor = "white";
  
  cardboard2 = createSprite(100/2,100/2,100/2,10/2);
  cardboard2.shapeColor = "white";
  
  cardboard3 = createSprite(100/2,65/2,10/2,80/2);
  cardboard3.shapeColor = "white";
  
  cardboard4 = createSprite(250/2,100/2,100/2,10/2);
  cardboard4.shapeColor = "white";
  
  cardboard5 = createSprite(52/2,150/2,95/2,10/2);
  cardboard5.shapeColor = "white";
  
  cardboard6 = createSprite(50/2,250/2,10/2,100/2);
  cardboard6.shapeColor = "white";
  
  cardboard7 = createSprite(120/2,200/2,150/2,10/2);
  cardboard7.shapeColor = "white";
  
  cardboard8 = createSprite(200/2,150/2,10/2,100/2);
  cardboard8.shapeColor = "white";
  
  cardboard9 = createSprite(150/2,125/2,10/2,152/2);
  cardboard9.shapeColor = "white";
  
  cardboard10 = createSprite(250/2,50/2,100/2,10/2);
  cardboard10.shapeColor = "white";
  
  cardboard11 = createSprite(320/2,150/2,50/2,10/2);
  cardboard11.shapeColor = "white";
  
  cardboard12 = createSprite(300/2,100/2,10/2,100/2);
  cardboard12.shapeColor = "white";
  
  cardboard13 = createSprite(175/2,250/2,150/2,10/2);
  cardboard13.shapeColor = "white";
  
  cardboard14 = createSprite(250/2,200/2,10/2,100/2);
  cardboard14.shapeColor = "white";
  
  cardboard15 = createSprite(250/2,380/2,10/2,50/2);
  cardboard15.shapeColor = "white";
  
  cardboard16 = createSprite(380/2,250/2,55/2,10/2);
  cardboard16.shapeColor = "white";
  
  cardboard17 = createSprite(350/2,175/2,10/2,250/2);
  cardboard17.shapeColor = "white";
  
  cardboard18 = createSprite(50/2,350/2,100/2,10/2);
  cardboard18.shapeColor = "white";
  
  cardboard19 = createSprite(100/2,350/2,10/2,100/2);
  cardboard19.shapeColor = "white";
  
  cardboard20 = createSprite(250/2,350/2,200/2,10/2);
  cardboard20.shapeColor = "white";
  
  cardboard21 = createSprite(180/2,300/2,150/2,10/2);
  cardboard21.shapeColor = "white";
  
  cardboard22 = createSprite(300/2,270/2,10/2,150/2);
  cardboard22.shapeColor = "white";
  
  cardboardLeft = createSprite(5,110,5,180)
  cardboardLeft.shapeColor = "white";
  cardboardRight = createSprite(200,95,5,180)
  cardboardRight.shapeColor = "white";
  cardboardTop = createSprite(90,200,180,5)
  cardboardTop.shapeColor = "white";
  cardboardBottom = createSprite(112,4,180,5)
  cardboardBottom.shapeColor = "white";

  wall1m = createSprite(15,30,15,16)
  wall1m.visible 

  wall2m = createSprite(15,50,15,25)
  wall2m.shapeColor = "yellow"

  player1 = createSprite(15,20/2,15/2,15/2)
  player1.shapeColor = "red"


  lifeBarA = createSprite(600,100,150,40)
  lifeBarA.shapeColor = "white"
  lifeBarB = createSprite(600,100,150,40)
  lifeBarB.shapeColor = "red"
 

}

function draw() {
    background("yellow")
    Engine.update(engine);
    

    if(player1.isTouching(wall1m)){
      maze2.scale = maze2.scale+0.005

    }

    if(player1.isTouching(wall2m)){
      maze1.visible = true
      maze2.visible = false
      maze1.scale = maze1.scale+0.005
      maze2.scale = 1.1
    }

    
  drawSprites();

/*
  fill("white")
  lifeBarA = rect(600,100,150,40)
  fill("red")
  lifeBarB = rect(600,100,150,40)
*/

// score, chances 
// graudual disappereance for life bar or reappearence till chances are 0  , if() , c41, c40
  if(player1.isTouching(cardboard1)){
    lifeBarB.width = lifeBarB.width/5
    // lifeBarB.x = lifeBarB.x + 1
     player1.velocityX = 0
     player1.velocityY = 0
   } 



}

function keyPressed(){
  if(keyCode === UP_ARROW){
  //  player1.y = player1.y - 4
   player1.velocityX= 0
   player1.velocityY= -0.5
  }

  if(keyCode === DOWN_ARROW){
   // player1.y = player1.y + 4
   player1.velocityX= 0
   player1.velocityY= 0.5
  }

  if(keyCode === RIGHT_ARROW){
   // player1.x = player1.x + 4
   player1.velocityX= -0.5
   player1.velocityY= 0
  }

  if(keyCode === LEFT_ARROW){
   // player1.x = player1.x - 4
   player1.velocityX= 0.5
   player1.velocityY= 0
  }
}

function lives(){

}