function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw left eye
  drawEye(width / 2 - 100, height / 2);
  
  // Draw right eye
  drawEye(width / 2 + 100, height / 2);
}

function drawEye(x, y) {
  // Draw eye
  fill(255);
  ellipse(x, y, 50, 50);
  
  // Calculate pupil position based on cursor
  let angle = atan2(mouseY - y, mouseX - x);
  let pupilX = x + cos(angle) * 15;
  let pupilY = y + sin(angle) * 15;
  
  // Draw pupil
  fill(0);
  ellipse(pupilX, pupilY,20,20);
}
