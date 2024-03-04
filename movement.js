function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    stroke(0);
    line(mouseX, mouseY, x, y);
  }
}
