function setup() {
  createCanvas(1000, 600);
  noLoop(); // No need to loop
}

function draw() {
  background(255); // White background

  // Sun
  drawSun(800, 50, 60);

  // Land
  drawLand();

  // Lake
  drawLake(width * 0.5, height * 0.8, width * 0.6, 100);

  // Clouds and rain
  drawCloudsAndRain();

  // Water cycle arrows
  drawWaterCycleArrows();
}

function drawSun(x, y, size) {
  noStroke();
  ellipse(x, y, size); // Sun
}

function drawLand() {
  noStroke();
  rect(0, height * 0.75, width, height * 0.25); // Ground
}

function drawLake(x, y, w, h) {
  ellipse(x, y, w, h); // Lake
}

function drawCloudsAndRain() {
  // Clouds
  drawCloud(750, 100, 180, 90);

  // Rain (precipitation)
  stroke(0);
  strokeWeight(3);
  for (let i = 0; i < 6; i++) {
    line(750 + i * 10, 150, 750 + i * 10, 250); // Rain from cloud
  }
}

function drawCloud(x, y, w, h) {
  noStroke();
  ellipse(x, y, w, h); // Main cloud body
  ellipse(x - w / 3, y, w / 2, h / 2); // Left cloud puff
  ellipse(x + w / 3, y, w / 2, h / 2); // Right cloud puff
}

function drawWaterCycleArrows() {
  // Condensation arrow pointing right
  drawArrow(250, 100, 750, 100, 'Condensation');

  // Precipitation arrow pointing down
  drawArrow(750, 100, 750, height * 0.75, 'Precipitation');

  // Collection arrow pointing left
  drawArrow(750, height * 0.75, 250, height * 0.75, 'Collection');

  // Evaporation arrow pointing up
  drawArrow(250, height * 0.75, 250, 100, 'Evaporation');
}

function drawArrow(x1, y1, x2, y2, label) {
  push();
  stroke(0);
  strokeWeight(2);

  // Line
  line(x1, y1, x2, y2);

  // Arrowhead
  let angle = atan2(y2 - y1, x2 - x1);
  drawArrowhead(x2, y2, angle);

  // Label
  fill(0);
  noStroke();
  textSize(16);
  textAlign(CENTER, CENTER);
  text(label, (x1 + x2) / 2, (y1 + y2) / 2 - 20); // Adjust label position

  pop();
}

function drawArrowhead(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);
  let arrowSize = 10;
  noStroke();
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

// Resize the canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
