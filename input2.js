function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  
  // Draw dashed line
  stroke(0);
  for (let i = 0; i < height; i += 5) {
    line(width / 2, i, width / 2, i + 2);
  }
  
  // Determine cursor position
  let position;
  if (mouseX < width / 2) {
    position = "Left";
  } else {
    position = "Right";
  }
  
  // Display text indicating cursor position
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Cursor is on the " + position + " side", width / 2, height / 2);
}
