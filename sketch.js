var iPosi;
var right;
function setup() {
  createCanvas(1409, 880);
  background(0);
  noStroke();
  iPosi = width*0.5;
  right = true;
}

function draw() {
  fill(255);
  arc(width/2, height*3.5/4, width/2*1.5, height*1.5, PI+QUARTER_PI, TWO_PI-QUARTER_PI, CHORD);
  arc(width/2, height*(-1/15), width/2*1.5, height*1.5, TWO_PI+QUARTER_PI, PI-QUARTER_PI, CHORD);
  fill(0);
  ellipse(iPosi, height*0.4, width*0.22, height/3);
  if (right){
      iPosi = iPosi + width * 0.001;
  }
  else{
      iPosi = iPosi - width * 0.001;
  }
  if (iPosi>=width*0.6){
      right = false;
  }
  if (iPosi<=width*0.4){
      right = true;
  }
}