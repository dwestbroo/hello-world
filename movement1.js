let x, y;
let speedX, speedY;
let starSize = 50;

function setup() {
  createCanvas(600, 400);
  x = width / 2;
  y = height / 2;
  speedX = random(-3, 3);
  speedY = random(-3, 3);
}

function draw() {
  background(220);
  drawStar(x, y, starSize);
  
  // Move the star
  x += speedX;
  y += speedY;
  
  // Bounce off edges
  if (x + starSize / 2 >= width || x - starSize / 2 <= 0) {
    speedX *= -1;
  }
  if (y + starSize / 2 >= height || y - starSize / 2 <= 0) {
    speedY *= -1;
  }
}

function drawStar(x, y, size) {
  beginShape();
  for (let i = 0; i < 10; i++) {
    let angle = TWO_PI * i / 10 - HALF_PI;
    let radius = (i % 2 === 0) ? size * 0.5 : size * 0.2;
    let xPos = x + cos(angle) * radius;
    let yPos = y + sin(angle) * radius;
    vertex(xPos, yPos);
  }
  endShape(CLOSE);
}
