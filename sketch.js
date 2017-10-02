function setup() {
  createCanvas(1334, 750);
  background(0);
  noStroke();
}

function draw() {
  fill(255);
  arc(width/2, height*3.5/4, width/2*1.5, height*1.5, PI+QUARTER_PI, TWO_PI-QUARTER_PI, CHORD);
  arc(width/2, height*(-1/15), width/2*1.5, height*1.5, TWO_PI+QUARTER_PI, PI-QUARTER_PI, CHORD);
  fill(0);
  ellipse(width/2, height*0.4, width*0.22, height/3);
}