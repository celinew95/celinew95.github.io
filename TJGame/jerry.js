
class Jerry{
constructor(){
this.r = 100;
this.x = this.r;
this.y = height - this.r;
this. vy = 0;
this.gravity = 3 ;
//gravity defines acceleration
}

jump(){
  if (this.y == height - this.r){
  this.vy = - 40;
  // this.vy defines the jumping height
  }
}

hits(flower){
let x1 = this.x + this.r * 0.5;
let y1 = this.y + this.r * 0.5;
let x2 = flower.x + flower.x * 0.5;
let y2 = flower.y + flower.r * 0.5;
return collideRectCircle (x1, y1, this.r - 30, this.r, x2, y2, flower.r);

 //return collideRectCircle(this.x,this.y,this.r - 30,this.r,flower.x,flower.y,flower.r);
}

move(){
this.y += this.vy;
this.vy += this.gravity;
this.y = constrain(this.y, 0, height - this.r);
}

show(){
image(aImg, this.r, this.y, 100, 100);
//image(aImg, this.y, this.r - 30, this.r);
}

}
