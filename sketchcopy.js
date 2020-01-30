//our custom variable
let pointX;
let mouseDist;
let triY;

function setup() {
  //create the canvas element
  createCanvas(1000, 500);

  //giving pointX a value of 300
  pointX = 300;
  rectMode(CENTER);
  print(pointX);
}



function draw() {
  background(255, 204, 255);
 mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
 print(mouseDist);
 smooth();
  //line and point styles
  strokeWeight(30);
  //point expects an x and y coordinate


  strokeWeight(mouseDist);
  //line expects two x, y coordinates
  //then conects the coordinates
  line(mouseX, mouseY, pmouseX, pmouseY);

  fill(0, 122, 204);
  ellipse(250, height/2, 500, 500);
  fill(204, 204, 0);
  ellipse(250, height/2, 100, 200);

  fill(0, 138, 230);
  ellipse(500, height/2, 500, 500);
  fill(230, 230, 0);
  ellipse(500, height/2, 100, 200);

  fill(0, 153, 255);
  ellipse(750, height/2, 500, 500);
  fill(255, 255, 0);
  ellipse(750, height/2, 100, 200);

  fill(26, 163, 255);
  ellipse(1000, height/2, 500, 500);
  


  //rect styles
  strokeWeight(3);
  stroke(0, 102, 153);
  //fills in shapes with color
  //affects shapes that come after
  fill(255, 255, 255);


  if(mouseIsPressed){
    //when mouse is pressed reset pointx to 200
    pointX = 30;
  } else {
    //when mouse is released reset pointx to 600
    pointX = 1500;
}

if(mouseIsPressed){
  //when mouse is pressed reset pointx to 200
  pointX = 900;
} else {
  //when mouse is released reset pointx to 600
  pointX = 30;
}

if(keyIsPressed){
  //when mouse is pressed reset pointx to 200
  triY= 50;
} else {
  //when mouse is released reset pointx to 600
  triY = 600;
}
}

function keyTyped(){
if (key === 's'){
save("download.png");
}
}
