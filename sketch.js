//==============================================
//2d sprites for the different objects:
//==============================================


var box1;
var box2; 
var box3;
var box4;
var box5;
var terrain;
var terrain3; 
var sprite2;
var robotSprite;
var robot2;
var robot3;
var robot4;
var robot5;
var robot6;
var robot7;
var robot8;
var robot9;
var boss;
var exitblock
var gameover = false;
var soundtrack
var hahaha
var human
var robotnoise
var bossX
var bossY

//==============================================
//cam variable
//==============================================

let cam1
//==============================================
//texture asset variables
//==============================================

let sky
let plant
let shelf
let dirt
let scuffwall
let title
let intro
let exit
let start
let brick
let walltech
let walltechI
let pipe
let roof
let steel
let blaster
let robot
let saw
let boxes
let woodbox
let radioactive
let container
let metalwall
let slimewall
let circuit
let machinecomp
let alien
let alienfloor
let bossbrain
let bossmob
let alien2
let alien3
let alien4
let alien5
let alienwall
let alienbox
let robotyellow
let death
let exitdoor

//==============================================
//Text font variables
//==============================================

let myFont
//==============================================
//player position variables
//==============================================

var playerX = 0;
var playerY = 0;
var playerZ = 0;
var playerA = 0;
//==============================================

//==============================================
//robot position variables
//==============================================

// var robotX = 0; //tbr
// var robotY = 0;
// var robotZ = 0;
// var robotA = 0;
//robot new movement variables:
var robotNewX = 0;
var robotNewY = 0;
var robotNewZ = 0;
var robotNewA = 0;
//robot change x
// var robotChangeX = 0; 
// var robotChangeY = 0;
// var robotChangeZ = 0;
// var robotChangeA = 0;

//robotcontrol variables
// var robotMove = true

//==============================================
//preloads textures

function preload() {
  //texture loading
  hahaha = loadSound('hahaha.mp3')
  human = loadSound('human.mp3')
  robotnoise = loadSound('robot.mp3')
  soundtrack = loadSound('soundtrack.mp3')
  exitdoor = loadImage('exitdoor.jpg')
  plant = loadImage('plant.png');
  win = loadImage('win.png')
  death = loadImage('death.png')
  robotyellow = loadImage('robot2.jpg'); 
  alienbox = loadImage('alienbox.JPG');
  alienwall = loadImage('alienwall.JPG');
  alien2= loadImage('alien2.JPG');
  alien3 = loadImage('alien3.JPG');
  alien4 = loadImage('alien4.JPG');
  alien5 = loadImage('alien 5.JPG');
  bossmob = loadImage('bossmob.JPG')
  bossbrain = loadImage('bossbrain.JPG')
  alienfloor = loadImage('alienfloor.jpg');
  alien = loadImage('alien.JPG');
  machinecomp = loadImage('machinecomp.jpg');
  circuit = loadImage('circuit.jpg');  
  blockwall = loadImage('blockwall.jpg');  
  metalwall = loadImage('metalwall.jpg');
 slimewall = loadImage('slimewall.jpg');
  radioactive = loadImage('radioactive.jpg');   
  container = loadImage('container.jpg'); 
  shelf = loadImage('shelf.jpg');
  dirt = loadImage('dirt.png');
  sky = loadImage('sky.jpg');
  scuffwall = loadImage('scuffwall.JPG');
  woodbox = loadImage('wood box.png')
  boxes = loadImage('boxes.jpg');
  title = loadImage('title.png');
  intro = loadImage('intro.png');
  exit = loadImage('exit.png');
  walltech = loadImage('walltech.jpg')
  walltech1 = loadImage('walltech1.jpg')
  pipe = loadImage('pipe.png')
  start = loadImage('start.png');
  brick = loadImage('brick.jpg');
  steel = loadImage('steel.jpg');
  roof = loadImage('roof.jpg')
  blaster = loadImage('blaster.jpg');
  robot = loadImage('robot.jpg');
  saw = loadImage('saw.png')
  //font loading
  myFont = loadFont('data font.ttf');

}
//==============================================
//environmetn setup functions:
//==============================================

function setup() {
  
  
  createCanvas(windowWidth, windowHeight, WEBGL);
    
  playerX = 0;
  playerY = 0;
  playerZ = 0;
  playerA = 0;
  
  gameover = false;
  
  cam1 = createCamera();
 cam1.setPosition(0,0,0);
  //  cam1.lookAt (0,0,0);
  
  //cam1.lookAt(0, 5000, -1000);
   cam1.setPosition(playerX,-6,playerY);
//cam1.setPosition(5000,-4000,6000);
  perspective(80, width / height, 10, 10000); //sets the perspective, minimum and maximum render distance.
  
 // cam1.setPosition(-2000,0,0);
//    cam1.lookAt (-4000,0,0);

  
  soundtrack.setVolume(0.7);
  soundtrack.loop();
  
  //==============================================
//sprites are generated:
//==============================================
//player sprite;
  sprite2 = new Sprite(0, 0, 100, 100);
  sprite2.position.x = 0;
  sprite2.rotatioLock = true;
  sprite2.position.y = 0;

  
//==============================================
//terrain sprites: //this section draws the terrain sprites in the correct locations to create the map.
//==============================================

 
//==================================================
//room 1:
//==================================================  

  //walls room 1:
  
  terrain = new Sprite(0,-750, 1500, 10);
  terrain.static = true
  
  terrain = new Sprite(750,0, 10, 1500);
  terrain.static = true
  
  terrain = new Sprite(-750,0, 10, 1500);
  terrain.static = true
  
  terrain = new Sprite(425,750, 650, 10);
  terrain.static = true
  
  terrain = new Sprite(-425,750, 650, 10);
  terrain.static = true
  
  //boxes room 1:
  
  terrain = new Sprite(300,300, 200, 200);
  terrain.static = true
  
  terrain = new Sprite(-300,300, 200, 200);
  terrain.static = true

  terrain = new Sprite(300,-300, 200, 200);
  terrain.static = true
  
  terrain = new Sprite(-300,-300, 200, 200);
  terrain.static = true
  
  
  //hallway:
  terrain = new Sprite(-100,1250, 10, 1000);
  terrain.static = true
  
  terrain = new Sprite(100,1250, 10, 1000);
  terrain.static = true
  
  //boxes:
  
  

  
//_______________________________________________________  

//==================================================
//room 2:
//==================================================  

  //walls room 2:
  
  terrain = new Sprite(1500,3250,10,3000);
  terrain.static = true
  
  terrain = new Sprite(-1500,3250,10,3000);
  terrain.static = true
  
  //small walls:
  
  terrain = new Sprite(-795,1750,1400,10);
  terrain.static = true
  
  terrain = new Sprite(795, 1750,1400,10);
  terrain.static = true
  
  terrain = new Sprite(795, 4750,1400,10);
  terrain.static = true
  
  terrain = new Sprite(-795, 4750,1400,10);
  terrain.static = true

  terrain = new Sprite(1100, 2500,800,10);
  terrain.static = true
  
  terrain = new Sprite(-700, 4000,1600,10);
  terrain.static = true
  
  terrain = new Sprite(500, 5500,3000,10);
  terrain.static = true
  
  terrain = new Sprite(-200, 5500,10,1500);
  terrain.static = true
  
  terrain = new Sprite(1750, 4700,500,10);
  terrain.static = true

  //   terrain = new Sprite(1500,0, 10, 3000);
//   terrain.static = true
  
//   terrain = new Sprite(-1500,0, 10, 3000);
//   terrain.static = true
  
//   terrain = new Sprite(425,1500, 1400, 10);
//   terrain.static = true
  
//   terrain = new Sprite(-425,1500, 1400, 10);
//   terrain.static = true
  
  //boxes room 2:
  
  terrain = new Sprite(-1500,3500,200,500);
  terrain.static = true
  
  terrain = new Sprite(-1500,3000,200,500);
  terrain.static = true
  
  terrain = new Sprite(-1500,2450,200,500);
  terrain.static = true
  
  terrain = new Sprite(1000,2000,600,400);
  terrain.static = true
  
  terrain = new Sprite(1000,3000,600,400);
  terrain.static = true
  
  terrain = new Sprite(100,3500,500,300);
  terrain.static = true


  
//boxes:
  
  box1 = new Sprite(0,750,100,100);
  box1.maxSpeed = 20;
  box1.drag = 20;
  box1.friction = 20;
  
  
  
  box2 = new Sprite(0,3000,200,200);
  box2.maxSpeed = 20;
  box2.drag = 20;
  box2.friction = 20
  
  box3 = new Sprite(250,3000,200,200);
  box3.maxSpeed = 20;
  box3.drag = 20;
  box3.friction = 20
  
  box4 = new Sprite(300,3000,50,50);
  box4.maxSpeed = 20;
  box4.drag = 8;
  box4.friction = 10
  
//_______________________________________________________    

//===============================================  
//room 3  
//===============================================  

  //walls:
  
  terrain = new Sprite(4000,6000,4000,10);
  terrain.static = true
  
  terrain = new Sprite(4000,4000,4000,10);
  terrain.static = true
  
  terrain = new Sprite(2000,4375,10,750);
  terrain.static = true
  
  terrain = new Sprite(2000,5650,10,750);
  terrain.static = true
  
  terrain = new Sprite(6000,4375,10,750);
  terrain.static = true
  
  terrain = new Sprite(6000,5650,10,750);
  terrain.static = true
  
  
  //boxes:
  
  terrain = new Sprite(2600,5000,500,1000);
  terrain.static = true
  
  terrain = new Sprite(5000,6000,1500,300);
  terrain.static = true
  
  terrain = new Sprite(2600,5000,500,1000);
  terrain.static = true
  
  terrain = new Sprite(4000,4600,400,600);
  terrain.static = true
  
    terrain = new Sprite(3500,5500,400,600);
  terrain.static = true
  
    terrain = new Sprite(5000,4500,400,600);
  terrain.static = true
 
//==============================================
//Maze room:
//==============================================
  
 terrain = new Sprite(8000,6000,4000,10);
  terrain.static = true
  
  terrain = new Sprite(8000,4000,4000,10);
  terrain.static = true
  
  
  //small walls:
  terrain = new Sprite(10000,4375,10,750);
  terrain.static = true
  
  terrain = new Sprite(10000,5650,10,750);
  terrain.static = true
  
  //inner walls:
  
  terrain = new Sprite(7350,4375,2000,40);
  terrain.static = true
  
  terrain = new Sprite(8350,4600,40,500);
  terrain.static = true
  
  terrain = new Sprite(8550,4800,350,40);
  terrain.static = true
  
  terrain = new Sprite(6800,5000,500,40);
  terrain.static = true
  
  terrain = new Sprite(7050,5250,40,500);
  terrain.static = true
  
  terrain = new Sprite(7550,5500,1000,40);
  terrain.static = true
  
  terrain = new Sprite(7600,4750,40,750);
  terrain.static = true
  
  terrain = new Sprite(8050,5400,40,600);
  terrain.static = true
  
  terrain = new Sprite(6500,5500,600,40);
  terrain.static = true
  
  terrain = new Sprite(8600,5400,40,600);
  terrain.static = true
  
  terrain = new Sprite(9000,4800,40,1000);
  terrain.static = true
  
  terrain = new Sprite(8700,4300,40,1000);
  terrain.static = true
  
  
//==============================================
//alien jar room:
//==============================================
  
  terrain = new Sprite(10700,3750,10,5000);
  terrain.static = true
  
  terrain = new Sprite(10750,5500,1500,10);
  terrain.static = true
  
  terrain = new Sprite(10000,3000,10,2000);
  terrain.static = true
  
  //==============================================
//alien boss room:
//==============================================
  
  terrain = new Sprite(8000,1500,6000,10);
  terrain.static = true
  
  terrain = new Sprite(6500,1500,10,4000);
  terrain.static = true
  
  terrain = new Sprite(7500,2500,300,300);
  terrain.static = true
  
  terrain = new Sprite(8600,2500,300,300);
  terrain.static = true
  
//==============================================
//exit room room:
//==============================================
  terrain = new Sprite(5500,2000,10,4000);
  terrain.static = true

  terrain = new Sprite(6000,1800,1000,50);
  terrain.static = true
  
//exit door:
  
  exitblock = new Sprite(6000,1900,200,200);
  exitblock.static = true;
  
  
  
  //===============================================  
  
  
  robotSprite = new Sprite(500,5200,50,50)
  robotSprite.rotationlock = true  //robot in hallway
  robotSprite.drag = 40;
  robotSprite.maxSpeed = 50;
  
  
  robot2 = new Sprite(3800,4500,50,50)
  robot2.rotationlock = true  //robot in second rooom
  robot2.drag = 40;
  robot2.maxSpeed = 50;
  
    robot3 = new Sprite(-500,3000,50,50)
  robot3.rotationlock = true  //robot in first room
  robot3.drag = 40;
  robot3.maxSpeed = 50;

  
  robot4 = new Sprite(5000,5500,50,50) //robot in second room
  robot4.rotationlock = true
  robot4.drag = 40;
  robot4.maxSpeed = 50;
  
  robot5 = new Sprite(7000,5600,50,50)
  robot5.rotationlock = true
  robot5.drag = 40; //maze robot
  robot5.maxSpeed = 50;
  
  
  robot6 = new Sprite(8000,5000,50,50)
  robot6.rotationlock = true
  robot6.drag = 40;
  robot6.maxSpeed = 50;
  
  robot7 = new Sprite(8500,4500,50,50)
  robot7.rotationlock = true
  robot7.drag = 40;
  robot7.maxSpeed = 50;
  
  boss = new Sprite(8400,2200,180,180)
  boss.rotationlock = true
  boss.drag = 30;
  boss.maxSpeed = 60;

  
  

//==============================================
//Robot movement timer
//==============================================

setInterval(moveTime, random(2000,5000));


//==============================================
 






}  
//==============================================
//makes the robot move at random times.
//==============================================

function moveTime() {
  robotNewX = random(-10000,10000);
  robotNewY = random(-10000,10000);
  robotNewZ = random(-10000,10000);
  robotNewA = random(-180,180);
  bossX = random(-500,500);
  bossY = random(-500,500);
  
  
}  
 

function draw() {

   //==============================================
  //handles Game reset after player wins or is killed:
//==============================================
  
  if (gameover == true) {
    if (keyIsDown(13)) {
    soundtrack.stop(); //stops the soundtrack so it can restart when the game is reset
      box1.remove();
      box2.remove();
      box3.remove();
      box4.remove();
      setup();
      gameover = false

    }
  }
  
 
  
  //==============================================
  //handles player collision with robots:
//==============================================
  
  
  if (robotSprite.collided(sprite2)) {
    
    print("hit!");
    gameover = true; 
     cam1.setPosition(-2000,0,0);
    cam1.lookAt (-4000,0,0);
   human.playMode('untilDone');
   human.play();  
  sprite2.position.x = -2000
     sprite2.position.y =0
    
  
  }
  
   if (robot2.collided(sprite2)) {
    
    print("hit!");
    gameover = true; 
     cam1.setPosition(-2000,0,0);
    cam1.lookAt (-4000,0,0);
   human.playMode('untilDone');
   human.play();  
  sprite2.position.x = -2000
     sprite2.position.y =0
    
  
  }
  
    if (robot3.collided(sprite2)) {
    
    print("hit!");
    gameover = true; 
    cam1.setPosition(-2000,0,0);
    cam1.lookAt (-4000,0,0);
   human.playMode('untilDone');
   human.play();  
  sprite2.position.x = -2000
     sprite2.position.y =0
    
  
  }
    if (robot4.collided(sprite2)) {
    
    print("hit!");
    gameover = true; 
    cam1.setPosition(-2000,0,0);
    cam1.lookAt (-4000,0,0);
   human.playMode('untilDone');
   human.play();  
  sprite2.position.x = -2000
     sprite2.position.y =0
    
  
  }
    if (robot5.collided(sprite2)) {
    
    print("hit!");
    gameover = true; 
    cam1.setPosition(-2000,0,0);
    cam1.lookAt (-4000,0,0);
   human.playMode('untilDone');
   human.play();
  sprite2.position.x = -2000
     sprite2.position.y =0
    
  
  }
    if (robot6.collided(sprite2)) {
    
    print("hit!");
    gameover = true; 
    cam1.setPosition(-2000,0,0);
    cam1.lookAt (-4000,0,0);
   human.playMode('untilDone');
   human.play();  
  sprite2.position.x = -2000
     sprite2.position.y =0
    
  
  }
    if (robot7.collided(sprite2)) {
    
    print("hit!");
    gameover = true; 
    cam1.setPosition(-2000,0,0);
    cam1.lookAt (-4000,0,0);
   human.playMode('untilDone');
   human.play();  
  sprite2.position.x = -2000
     sprite2.position.y =0
    
  
  }
  
    if (boss.collided(sprite2)) {
    
    print("hit!");
    gameover = true; 
    cam1.setPosition(-2000,0,0);
    cam1.lookAt (-4000,0,0);
   human.playMode('untilDone');
   human.play();  
  sprite2.position.x = -2000
     sprite2.position.y =0
    
  
  }
  
  
  
  
//==============================================
//handles the player collision with the exit door:
//==============================================
  
   if (sprite2.overlaps(exitblock)) {
    
    print("finished!");
    gameover = true; 
    cam1.setPosition(-2000,0,-4000);
    cam1.lookAt (-4000,0,-4000);
     sprite2.position.x = -2000
     sprite2.position.y =0
    
  
  }
  
  
  
  
//==============================================
//matches the sprite to the player x and y for movment
//==============================================
  
 
  
  sprite2.vel.x = (playerX-sprite2.x);
  sprite2.vel.y = (playerY-sprite2.y);

//==============================================
  
  
//==============================================
//robot attack and robot wander controll:
//==============================================
  if(dist(sprite2.position.x, sprite2.position.y, robotSprite.position.x, robotSprite.position.y) < 600) {
     robotSprite.attractionPoint(random(3,5.5),sprite2.position.x,sprite2.position.y);
    hahaha.playMode('untilDone');
    hahaha.play();
     } else {
       robotSprite.attractionPoint(5.5,robotNewX,robotNewY);
     }
  
  if(dist(sprite2.position.x, sprite2.position.y, robot2.position.x, robot2.position.y) < 600) {
     robot2.attractionPoint(random(3,5.5),sprite2.position.x,sprite2.position.y);
    robotnoise.playMode('untilDone');
    robotnoise.play();
     } else {
       robot2.attractionPoint(5,robotNewY,robotNewX);
     }
  
  if(dist(sprite2.position.x, sprite2.position.y, robot3.position.x, robot3.position.y) < 600) {
     robot3.attractionPoint(random(3,5.5),sprite2.position.x,sprite2.position.y);
    robotnoise.playMode('untilDone');
    robotnoise.play();
     } else {
       robot3.attractionPoint(5,-500,3000);
     }
  
    if(dist(sprite2.position.x, sprite2.position.y, robot4.position.x, robot4.position.y) < 600) {
     robot4.attractionPoint(random(3,5.5),sprite2.position.x,sprite2.position.y);
    hahaha.playMode('untilDone');
    hahaha.play();
     } else {
       robot4.attractionPoint(5,3900,5200);
     }
  
 if(dist(sprite2.position.x, sprite2.position.y, robot5.position.x, robot5.position.y) < 600) {
     robot5.attractionPoint(random(3,5.5),sprite2.position.x,sprite2.position.y);
    robotnoise.playMode('untilDone');
    robotnoise.play();
     } else {
       robot5.attractionPoint(5,6500,5600);
     }
  
  if(dist(sprite2.position.x, sprite2.position.y, robot6.position.x, robot6.position.y) < 600) {
     robot6.attractionPoint(random(3,5.5),sprite2.position.x,sprite2.position.y);
    robotnoise.playMode('untilDone');
    robotnoise.play();
     } else {
       robot6.attractionPoint(5,6500,5600);
     }
  
  if(dist(sprite2.position.x, sprite2.position.y, robot7.position.x, robot7.position.y) < 600) {
     robot7.attractionPoint(random(3,5.5),sprite2.position.x,sprite2.position.y);
    hahaha.playMode('untilDone');
    hahaha.play();
     } else {
       robot6.attractionPoint(5,8500,4500);
     }
  
  if(dist(sprite2.position.x, sprite2.position.y, boss.position.x, boss.position.y) < random(600,900)) {
     boss.attractionPoint(random(3,7),sprite2.position.x,sprite2.position.y);
     } else {
       boss.attractionPoint(5,8000,2500);
     }

//==============================================
  
  //x and y printout for debugging

  
  //orbitControl(); //only used for debugging and moving around the scene in dev.
  background(4, 1, 84);
  angleMode(DEGREES);
  //in game text test  
  push();
  textFont(myFont);
  //noFill();
  textSize(25);
  strokeWeight(10);
  translate(-70,-50,-200);
  text('HINT:\nUse   the   W     A     S    D     keys   to   move   around   and     the     left  \n   and     right     arrows     to    turn', -25, 0);
  pop();
  
  
   push();
  textFont(myFont);
  //noFill();
  textSize(25);
  rotateY(180);
  strokeWeight(10);
  translate(0,0,-500);
  text('HINT:\nyou   Can   push   wooden   boxes   out   of   your   way', 0, 0);
  
  pop();
  
  
   push();
  textFont(myFont);
  //noFill();
  textSize(20);
  rotateY(180);
  strokeWeight(10);
  translate(-75,-30,-1500);
  text('HINT:\nRUNNING   IN   A   STRAIT \nLINE   IS   FASTEST \n GOOD   LUCK', 0, 0);
  
  pop();
//==============================================
//drawing tutorials and displays:
//==============================================


//title 
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
translate(0,-75,-600);

  rotateY(frameCount/2);
  texture(title);
  plane(400,100);
  pop();
  
//intro computer screen
//   push(); 
//   textureMode(IMAGE);
//   //normalMaterial();
//   noStroke();
//   translate(-400,-15,-200);    
//   rotateY(90);

//   texture(intro);
//   plane(100,50);
//   pop();
  
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(-180,-10,-250);
  texture(intro);
  rotateY(90);
  plane(100,150);
  pop();
  
  push(); 
  textureMode(IMAGE);
  //normalMaterial();
  noStroke();
  translate(-400,0,-300);    
  rotateY(90);

  texture(exit);
  plane(75,20);
  pop();
  
  
//==============================================  
  
  
  //the enemies!!
// push();  
//   if (robotNewX < robotX) {
//     robotChangeX = robotX ++;    //old robot code tbd
//   } else{
//     robotChangeX = robotX --;
//   }
  
//   if (robotNewZ < robotZ) {
//     robotChangeZ = robotZ ++;
//   } else{
//     robotChangeZ = robotZ --;
//   }
// pop();  
//==============================================
//draws the robot sprite:
//==============================================
  push();
  noStroke();
  translate(robotSprite.position.x,10,robotSprite.position.y);
  rotateY(robotNewA);
  texture(robot);
  cylinder(10, 70);  
  pop(); 
  
  
  
  
  push();
  translate(robotSprite.position.x,10,robotSprite.position.y);
  noStroke();
  noFill();
  rotateX(90);
  rotateZ(frameCount * 10)
  texture(saw);
  cylinder(5, 50)  
  pop();

  push();
  noStroke();
  translate(robot2.position.x,0,robot2.position.y);
  rotateY(robotNewA);
  texture(robotyellow);
  box(40,70, 40);  
  pop(); 
  
  
  push();
  noStroke();
  translate(robot3.position.x,0,robot3.position.y);
  rotateY(robotNewA);
  texture(robotyellow);
  box(40,70, 40);  
  pop();
  
  push();
  noStroke();
  translate(robot4.position.x,10,robot4.position.y);
  rotateY(robotNewA);
  texture(robot);
  cylinder(10, 70);  
  pop(); 
  
  
    push();
  noStroke();
  translate(robot5.position.x,10,robot5.position.y);
  rotateY(robotNewA);
  texture(robot);
  cylinder(10, 70);  
  pop(); 
  
    push();
  noStroke();
  translate(robot6.position.x,0,robot6.position.y);
  rotateY(robotNewA);
  texture(robotyellow);
  box(40,70, 40);  
  pop();
  
      push();
  noStroke();
  translate(robot7.position.x,0,robot7.position.y);
  rotateY(robotNewA);
  texture(robotyellow);
  box(40,70, 40);  
  pop();
  
  push();
  noStroke();
  translate(boss.position.x,-10,boss.position.y);
  rotateY(robotNewA);
  texture(bossbrain);
  sphere(90);  
  pop();
  
  
  //player position controll
  push();

  if (gameover == false) {
  if (keyIsDown(37)) { //left arrow
    angleMode(DEGREES);
    playerA= playerA+2
    cam1.pan(2);
    //print(playerA);
    if (playerA == 360){
      playerA = 0
    }
  }
  }

 pop();

  push(); 

  if (gameover == false) {
  if (keyIsDown(39)) {  //right arrow
    angleMode(DEGREES);
    playerA= playerA-2
    sprite2.angle = sprite2.angle - 2;
    cam1.pan(-2);
    //print(playerA);
    if (playerA == 0){
      playerA = 360
    }
    
  }
  }

pop();
  

  

  
  if (gameover == false) {
  if (keyIsDown(87)) {  //w arrow
     
       playerX= playerX-((9) * sin(playerA))
      playerY= playerY-((9) * cos(playerA))
    //sprite2.collide(terrain1)
 //sprite2.collides(terrain1,terrain2); 
  cam1.setPosition(sprite2.position.x,0,sprite2.position.y);
     }
  }
  
    
//pop();    
  
//push();  
  if (gameover == false) {
  if (keyIsDown(83)) { //s arrow
    playerX= playerX+((8) * sin(playerA))
      playerY= playerY+((8) * cos(playerA))
    //sprite2.collide(terrain1)
  //sprite2.collides(terrain1,terrain2);
    
   cam1.setPosition(sprite2.position.x,0,sprite2.position.y);
    // print(playerX,playerY);
  }
  }

//strafing
  
  if (gameover == false) {
  if (keyIsDown(65)) {  // a arrow
      playerX= playerX-((5) * sin(playerA+90))
      playerY= playerY-((5) * cos(playerA+90))
    cam1.setPosition(sprite2.position.x,0,sprite2.position.y);
    
    }
  }
  
  if (gameover == false) {
  if (keyIsDown(68)) {  // d arrow
      playerX= playerX+((5) * sin(playerA+90))
      playerY= playerY+((5) * cos(playerA+90))      
      cam1.setPosition(sprite2.position.x,0,sprite2.position.y);
    
    
    }
  }

  
  
  
  
  //==============================================  
//ENVIRONMENT RENDERS
  //ground plane
//==============================================

  push(); 
  normalMaterial();
  textureMode(IMAGE);
  texture(steel);
  translate(0,50,0);
  rotateX(90);
  plane(3500,3500);
  pop();
  
  
  
  
  
  //roof
  
  push(); 
  normalMaterial();
  textureMode(IMAGE);
  texture(roof);
  translate(0,-160,0);
  rotateX(90);
  plane(1500,1500);
  pop();
  
 
  
 
  
  
//===========================================
//ROOM 1::
//===========================================
 //walls room 1:
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(750,0,0);    
  texture(walltech1);
  box(10,500,1500);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  rotateY(90);
  translate(750,0,0);    
  texture(walltech1);
  box(10,500,1500);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(-750,0,0);    
  texture(walltech1);
  box(10,500,1500);
  pop();
  
  //small walls
  push(); 
  textureMode(IMAGE);
  noStroke();
  rotateY(90);
  translate(-750,0,425);    
  texture(walltech);
  box(10,500,650);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  rotateY(90);
  translate(-750,0,-425);    
  texture(walltech);
  box(10,500,650);
  pop();
  
//environment boxes room 1:
  push();
  texture(boxes);
  translate(300, 0, 300);
  box(200, 200, 200);
  pop();
  
  push();
  texture(boxes);
  translate(-300, 0, -300);
  box(200, 200, 200);
  pop();
  
  push();
  texture(boxes);
  translate(300, 0, -300);
  box(200, 200, 200);
  pop();
  
  push();
  texture(boxes);
  translate(-300, 0, 300);
  box(200, 200, 200);
  pop();
  
  //hallway walls:
  
  
  push(); 
  textureMode(IMAGE);
  texture(brick);
  noStroke();
  translate(100,0,1250);     
  box(10,500,1000);
  pop();
  
  push(); 
  textureMode(IMAGE);
  texture(brick);
  noStroke();
  translate(-100,0,1250);   
  box(10,500,1000);
  pop();
  
  
  //door box:
  
  push();
  translate(box1.x,-50,box1.y);
  texture(woodbox);
  box(100,200,100);
  pop();
  
  
//_____________________________________________________________________________  

  
//===========================================
//ROOM 2::
//===========================================
 //floor:
  
  push(); 
  normalMaterial();
  textureMode(IMAGE);
  texture(dirt);
  translate(0,50,3250);
  rotateX(90);
  plane(3000,3000);
  pop();
  
   push(); 
  textureMode(IMAGE);
  noStroke();
  translate(500,60,5500);    
  rotateX(90);
  texture(metalwall);
  plane(3000,3000);
  pop();
  
  //roof:
  
  push(); 
  normalMaterial();
  textureMode(IMAGE);
  texture(roof);
  translate(0,-160,1250);
  rotateX(90);
  plane(200,1000);
  pop();
  
  
  //walls room 2:
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(1500,0,3250);    
  texture(scuffwall);
  box(10,500,3000);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(-1500,0,3250);    
  texture(scuffwall);
  box(10,500,3000);
  pop();
  

  
  
  
  
  //small walls
  
  
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(795,0,1750);    
  rotateY(90);
  texture(scuffwall);
  box(10,500,1400);
  pop();
  
  
   push(); 
  textureMode(IMAGE);
  noStroke();
  translate(-795,0,1750);    
  rotateY(90);
  texture(scuffwall);
  box(10,500,1400);
  pop();
  
   push(); 
  textureMode(IMAGE);
  noStroke();
  translate(795,0,4750);    
  rotateY(90);
  texture(scuffwall);
  box(10,500,1400);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(-795,0,4750);    
  rotateY(90);
  texture(scuffwall);
  box(10,500,1400);
  pop();
  
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(1100,0,2500);    
  rotateY(90);
  texture(brick);
  box(10,500,800);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(-700,0,4000);    
  rotateY(90);
  texture(walltech1);
  box(10,500,1600);
  pop();
 
  //hallway walls:
 
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(500,0,5500);    
  rotateY(90);
  texture(walltech1);
  box(10,500,3000);
  pop();
  
  
     push(); 
  textureMode(IMAGE);
  noStroke();
  translate(-200,0,5500);    
  
  texture(walltech1);
  box(10,500,1500);
  pop();
  
 
  
push(); 
  textureMode(IMAGE);
  noStroke();
  translate(1750,0,4700);    
  rotateY(90);
  texture(walltech1);
  box(10,500,500);
  pop();
  
  //environment boxes room 2:
  push();
  texture(shelf);
  translate(-1500, -50, 3500);
  box(200, 400, 500);
  pop();
  
  push();
  texture(boxes);
  translate(-1500, -50, 3000);
  box(200, 400, 500);
  pop();
  
  push();
  texture(shelf);
  translate(-1500, -50, 3500);
  box(200, 400, 500);
  pop();
  
  push();
  texture(roof);
  translate(-1500, -50, 2450);
  box(200, 400, 500);
  pop();
  
  push();
  texture(container);
  translate(1000, -50, 2000);
  box(600, 400, 400);
  pop();
  
  push();
  texture(container);
  translate(1000, -50, 3000);
  box(600, 400, 400);
  pop();
  
 
  
  push();
  noStroke();
  texture(radioactive);
  translate(1400, -5, 3500);
  cylinder(30,100);
  pop();
   
  push();
  noStroke();
  texture(radioactive);
  translate(1450, -5, 3530);
  cylinder(30,100);
  pop();
  
  push();
  noStroke();
  texture(radioactive);
  translate(1500, -5, 3620);
  cylinder(30,100);
  pop();
  
  push();
  noStroke();
  texture(radioactive);
  translate(1450, -5, 3600);
  cylinder(30,100);
  pop();
  
  push();
  texture(shelf);
  translate(100, -50, 3500);
  box(500, 200, 300);
  pop();
  
  
  //hallway walls:
  
  
  push(); 
  textureMode(IMAGE);
  texture(brick);
  noStroke();
  translate(100,0,1250);     
  box(10,500,1000);
  pop();
  
  push(); 
  textureMode(IMAGE);
  texture(brick);
  noStroke();
  translate(-100,0,1250);   
  box(10,500,1000);
  pop();
  
  
  //boxes:
  
  push();
  translate(box2.x,-50,box2.y);
  texture(woodbox);
  box(200,200,200);
  pop();
  
  push();
  translate(box3.x,-50,box3.y);
  texture(woodbox);
  box(200,200,200);
  pop();
  
  push();
  translate(box4.x,25,box4.y);
  texture(woodbox);
  box(50,50,50);
  pop();
  
  
  // push();
  // translate(box1.x,-50,box1.y);
  // texture(woodbox);
  // box(100,200,100);
  // pop();
  
  
//_____________________________________________________________________________  
  
  //===========================================
//ROOM 3::
//===========================================
 //floor:
  
  push(); 
  normalMaterial();
  textureMode(IMAGE);
  texture(steel);
  translate(4000,50,5000);
  rotateX(90);
  plane(4000,2000);
  pop();
  
  roof:
  
  push();
  normalMaterial();
  textureMode(IMAGE);
  texture(roof);
  translate(4000,-500,5000);
  rotateX(90);
  plane(4000,2000);
  pop();
  
  
//walls:
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(4000,-200,6000);  
  rotateY(90);
  texture(slimewall);
  box(10,1000,4000);
  pop();
  
  
  
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(4000,-200,4000);  
  rotateY(90);
  texture(metalwall);
  box(10,1000,4000);
  pop();
  
  
  //small walls
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(2000,-200,4375);  
  texture(metalwall);
  box(10,1000,750);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(2000,-200,5650);  
  texture(metalwall);
  box(10,1000,750);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(6000,-200,4375);  
  texture(slimewall);
  box(10,1000,750);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(6000,-200,5650);  
  texture(slimewall);
  box(10,1000,750);
  pop();
  
 
  
  //boxes:
   
  
  push();
  texture(blockwall);
  translate(2600, -50, 5000);
  box(500, 1500, 1000);
  pop();
  
   push();
  noStroke();
  texture(circuit);
  translate(5000, -50, 6000);
    rotateX(frameCount);
  rotateZ(90);
  cylinder(300, 1500);
  pop();
  
    push();
  noStroke();
  texture(circuit);
  translate(5000, -50, 6000);
    //rotateX(frameCount);
  rotateZ(90);
  cylinder(300, 1500);
  pop();
  
    push();
  noStroke();
  texture(machinecomp);
  translate(5850,-50, 6000);
    //rotateX(frameCount);
  rotateZ(90);
  cylinder(300, 200);
  pop();
  
  push();
  noStroke();
  texture(machinecomp);
  translate(4150,-50, 6000);
    //rotateX(frameCount);
  rotateZ(90);
  cylinder(300, 200);
  pop();
  
  push();
  texture(metalwall);
  translate(4000, -50, 4600);
  box(400, 900, 600);
  pop();

    push();
  texture(metalwall);
  translate(3500, -50, 5500);
  box(400, 900, 600);
  pop();
  
  push();
  texture(metalwall);
  translate(5000, -50, 4500);
  box(400, 900, 600);
  pop();
  
  //other:
  
  push();
  noStroke();
  texture(radioactive);
  translate(6000, 0, 5500);
  cylinder(30,100);
  pop();
  
  push();
  noStroke();
  texture(radioactive);
  translate(6000, 0, 5550);
  cylinder(30,100);
  pop();
  
  push();
  noStroke();
  texture(radioactive);
  translate(6000, 0, 5650);
  cylinder(30,100);
  pop();
  
  push();
  noStroke();
  texture(radioactive);
  translate(3000, 0, 4050);
  cylinder(30,100);
  pop();
  
//_____________________________________________________________________________  
  

   //===========================================
//ROOM 4: maze room
//===========================================
  
  //floor;
  
  push(); 
  normalMaterial();
  textureMode(IMAGE);
  texture(steel);
  translate(8000,50,5000);
  rotateX(90);
  plane(4000,2000);
  pop();
  
  //roof:
  
  // push(); 
  // normalMaterial();
  // textureMode(IMAGE);
  // texture(roof);
  // translate(8000,-500,5000);
  // rotateX(90);
  // rotateY(5);
  // plane(4000,2000);
  // pop();
  
  
  //walls:
  
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8000,-200,6000);  
  rotateY(90);
  texture(slimewall);
  box(10,1000,4000);
  pop();
  
  
  
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8000,-200,4000);  
  rotateY(90);
  texture(metalwall);
  box(10,1000,4000);
  pop();
  
  //small walls:
  
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10000,-200,4375);  
  texture(slimewall);
  box(10,1000,750);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10000,-200,5650);  
  texture(slimewall);
  box(10,1000,750);
  pop();
  
  //inner walls:
  
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(7350,-200,4375);  
  rotateY(90);
  texture(blockwall);
  box(40,1000,2000);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8350,-200,4600);  
  texture(blockwall);
  box(40,1000,500);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8700,-200,4300);  
  texture(blockwall);
  box(40,1000,1000);
  pop();
  
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8550,-200,4800);  
  rotateY(90);
  texture(blockwall);
  box(40,1000,350);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(6800,-200,5000);  
  rotateY(90);
  texture(blockwall);
  box(40,1000,500);
  pop();
  
   push(); 
  textureMode(IMAGE);
  noStroke();
  translate(7050,-200,5250);  
  texture(blockwall);
  box(40,1000,500);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(7550,-200,5500);  
  rotateY(90);
  texture(blockwall);
  box(40,1000,1000);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(7600,-200,4750);  
  
  texture(blockwall);
  box(40,1000,750);
  pop();
  
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8050,-200,5400);  
  texture(blockwall);
  box(40,1000,600);
  pop();
  
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(6500,-200,5500);  
  rotateY(90);
  texture(blockwall);
  box(40,1000,600);
  pop();
  
   push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8600,-200,5400);  
  texture(blockwall);
  box(40,1000,600);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(9000,-200,4800);  
  texture(blockwall);
  box(40,1000,1000);
  pop();
  
  
  //other:
  
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8000,-100,5000);  
  rotateY(90);
  texture(alien);
  cylinder(100,250);
  pop();
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8000,20,5000);  
  rotateY(90);
  texture(roof);
  cylinder(110,40);
  pop();
  
  
//==============================================
  //alien room:
//room 5:  
//==============================================
  
 //floor;
  
push(); 
  normalMaterial();
  textureMode(IMAGE);
  texture(alienfloor);
  translate(10700,51,3750);
  rotateX(90);
  plane(1500,5000);
  pop();
  
  //walls:
  
   push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10700,-200,3750);  
  
  texture(roof);
  box(10,1000,5000);
  pop();
  
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10750,-200,5500);  
  rotateY(90);
  texture(roof);
  box(10,1000,1500);
  pop();
  
   push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10000,-200,3000);  
  
  texture(walltech1);
  box(10,1000,2000);
  pop();
  
  // alien jars:
     
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10585,-100,3750);  
  rotateY(180);
  //rotateZ(45);
  texture(alien2);
  cylinder(100,250);
  pop();
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10585,20,3750);  
  rotateY(90);
  texture(roof);
  cylinder(110,40);
  pop();
  
      push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10585,20,4250);  
  rotateY(90);
  texture(roof);
  cylinder(110,40);
  pop();
  
  
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10585,-100,4750);  
  rotateY(90);
  texture(alien3);
  cylinder(100,250);
  pop();
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10585,20,4750);  
  rotateY(90);
  texture(roof);
  cylinder(110,40);
  pop();
  
  
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10585,-100,3250);  
  rotateY(90);
  texture(alien4);
  cylinder(100,250);
  pop();
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10585,20,3250);  
  rotateY(90);
  texture(roof);
  cylinder(110,40);
  pop();
  
   push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10585,-100,2750);  
  rotateY(90);
  texture(alien5);
  cylinder(100,250);
  pop();
    push(); 
  textureMode(IMAGE);
  noStroke();
  translate(10585,20,2750);  
  rotateY(90);
  texture(roof);
  cylinder(110,40);
  pop();
//========================================
//boss room  
//========================================
  //floor
  
  push(); 
  normalMaterial();
  textureMode(IMAGE);
  texture(alienfloor);
  translate(8000,50,2000);
  rotateX(90);
  plane(4000,4000);
  pop();
  
  //walls
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(8000,-200,1500);  
  rotateY(90);
  texture(alienwall);
  box(10,1000,6000);
  pop();
  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(6500,-200,1500);  
 
  texture(alienwall);
  box(10,1000,4000);
  pop();
  
  
  //boxes:
  
  
  push();
  texture(alienbox);
 translate(7500,-50,2500);
  box(300, 1500, 300);
  pop();
  
    push();
  texture(alienbox);
 translate(8600,-50,2500);
  box(300, 1500, 300);
  pop();
  
//=========================================
//exit room:
//=========================================
  //floor:
  
  push(); 
  normalMaterial();
  textureMode(IMAGE);
  texture(alienfloor);
  translate(4000,50,2000);
  rotateX(90);
  plane(4000,4000);
  pop();
  
  
  //walls:

  
  push(); 
  textureMode(IMAGE);
  noStroke();
  translate(5500,-200,2000);  
 //rotateY(90);
  texture(metalwall);
  box(10,1000,4000);
  pop();
  
  
  
 
  
  //boxes:
  
   push(); 
  textureMode(IMAGE);
  noStroke();
  translate(6000,-15,1800);    
  texture(machinecomp);
  box(1000,700,100);
  pop();
  
 //exit door:
  
  push(); 
  textureMode(IMAGE);
  noStroke();    
  translate(6000,-15,1900);    
  texture(exitdoor);
  box(200,500,100);
  pop();
  
  
//=========================================  
  

  
  //surroundign objects:
  
  push();
  noStroke();
  translate(3000,-1000,0);
  rotateY(90);
  texture(plant);
  plane(6000,1500);
  pop();
  
  
  
//===========================================
  //end of game
//=====================================
  //death ending
  
  push();
  noStroke();
  translate(-3000,-10,0);
  rotateY(90);
  texture(death);
  plane(1500,1500);
  pop();
//escape ending:
  
  push();
  noStroke();
  translate(-3000,-10,-4000);
  rotateY(90);
  texture(win);
  plane(1500,1500);
  pop();
  


  
}


//keypressed functionality

function keyPressed() {
  if (keyCode == 70) {
    let fs = fullscreen();
    fullscreen(!fs);
  } 
  
  
  
}
