class Flower{
constructor(){
  this.r = 70;
  this.x = width;
  this.y = height - 20;
}

move(){
  //rolling speed
this.x -= random(8,25);
}


show(){
  image(fImg, this.x, this.y - 50, this.r, this.r);
}

}
