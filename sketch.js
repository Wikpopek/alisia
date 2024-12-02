var sandy=0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(200,0,130); //an RGB color for the canvas' background
}

//The draw function happens over and over again
function draw() {
  
  //circle
  strokeWeight(8)
  stroke(255,255,150) // an RGB color for the circle's border
  fill(255,255,255,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),mouseX,mouseY); // center of canvas, 20px dia
  fill(255,100,255,150)
  ellipse(200,sandy,50)
  textFont('Helvetica');
  textSize(30);
  text('The end of Alisia story',170,400);
  strokeWeight(0)
  ellipse(mouseX,mouseY,180,mouseX);

}
  


function mousePressed(){
  if(sandy>=255) {
    sandy+0;
}else{
  sandy=sandy+5;
}
sandy=sandy+5;
}