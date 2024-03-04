function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  strokeWeight(4);
  stroke(0);
// LETER "D"
  line(50, 100, 50, 300);
  arc(50, 200, 200, 200, -HALF_PI, HALF_PI);

// LETTER "L"
  line(175, 100, 175, 300);
  line(250, 300, 175, 300);
// Letter "W"
  
  line(250, 100, 275, 300);

  // Draw the middle diagonal line of the letter "W"
  line(315, 200, 275, 300);

  // Draw the right diagonal line of the letter "W"
  line(315, 200, 350, 300);
  
  line(375, 100, 350, 300);
  
}
