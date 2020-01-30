var spr;
var anim;
function preload() {
  anim = loadAnimation("asterisk_normal0001.png",
    "asterisk_normal0002.png",
    "asterisk_normal0003.png");
}
function setup() {
  createCanvas(400, 400);
  spr = createSprite(width/2, height/2);
  spr.addAnimation("default", anim);
}
function draw() {
  background(255);
  spr.position.x = mouseX;
  spr.position.y = mouseY;
  if (mouseIsPressed) {
    spr.rotation -= 2;
  }
  drawSprites();
}
