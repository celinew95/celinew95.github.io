var screen = 0;
let jerry;
let aImg;
let fImg;
let bImg;
let tImg;
let lImg;
var gif_loadImg, gif_createImg;
let flowers = [];
let score = 0;
let beginScreenBool = true;
let gameBool = false;
let endScreenBool = false;
var mySound;

function preload(){
  aImg = loadImage('image/jerry.png');
  fImg = loadImage('image/bomb.png');
  tImg = loadImage('image/tom.png');
  bImg = loadImage('background.jpg');
  lImg = loadImage('image/logo2.png');
  mySound = loadSound('music.mp3');
}

function setup() {
  createCanvas(windowWidth, 450);
  jerry = new Jerry();
  mySound.setVolume(0.3);
  mySound.play();
  gif_createImg = createImg("image/tomkissesjerry.gif");
  gif_createImg.hide();
}

function keyPressed(){
  if(key == " "){
    jerry.jump();
  }
}


function draw() {
  if(beginScreenBool == true){
    beginScreen();
  }

  if(gameBool == true){
    game();

  }

  if(endScreenBool == true){
    endScreen();
    gif_createImg.show();
  }

}

function mousePressed(){
  //  mySound.play();
  // if (mySound.isPlaying()) {
  //   // .isPlaying() returns a boolean
  //   mySound.stop();
  //
  // } else {
  //   mySound.play();
  //   print("play audio");
  // }
  if(beginScreenBool == true){

    gameBool = true;
    if(gameBool = true){
       mySound.play();
    }
    beginScreenBool = false;
  }

  if(endScreenBool == true){
    score = 0;
    gif_createImg.hide();
    endScreenBool = false
    gameBool = false;
    beginScreenBool = true;

  }

}
function beginScreen(){
  background(bImg)
  strokeWeight(2);
  fill(245, 200, 66)
  textSize(35);
  textAlign(CENTER);
  text('Click to Start', width/2, height/2);
}

function game(){
  if(flowers.length == 0){
    // if(random(1)<0.007){
    flowers.push(new Flower());
     //mySound.play();
  }

  background(bImg);
  image(tImg, windowWidth - 200, height - 250, 250, 250);
  image(lImg,10, 10, 80, 80);
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text("Score" + score + "00", width/2, 50);

  jerry.show();
  jerry.move();

  for(let f of flowers){
    f.move();
    f.show();
    if(jerry.hits(f)){
      endScreenBool = true;
      console.log('game over');
      //noLoop();
    }

    if(f.x < 0 ){
      score++;
      flowers.splice(f, 1);
    }
  }

}
//game over scene
function endScreen(){
  background(245, 200, 66);
  //gif_loadImg = loadImage("image/tomkissesjerry.gif");

  //image(gif_loadImg, 50, 50);
  gif_createImg.position(width/2 - 120, height/2 + 20);
  stroke(0, 58, 139);
  strokeWeight(3);
  fill(0, 58, 139);
  textSize(50);
  textAlign(CENTER);
  //text(CENTER);
  text("GAME OVER", width/2, height/2);
  mySound.stop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  //constantly resize the size of canvas
}
