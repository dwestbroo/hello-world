let centerX, centerY;
let numPoints = 10;
let radius = 100;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(255);
  
  for (let i = 0; i < numPoints * 2; i++) {
    let angle = map(i, 0, numPoints * 2, 0, TWO_PI);
    let currentRadius = i % 2 === 0 ? radius * 2 : radius;
    
    let x1 = centerX + currentRadius * cos(angle);
    let y1 = centerY + currentRadius * sin(angle);
    
    let nextIndex = (i + 1) % (numPoints * 2);
    let nextAngle = map(nextIndex, 0, numPoints * 2, 0, TWO_PI);
    let nextRadius = nextIndex % 2 === 0 ? radius * 2 : radius;
    
    let x2 = centerX + nextRadius * cos(nextAngle);
    let y2 = centerY + nextRadius * sin(nextAngle);
    
    line(x1, y1, x2, y2);
  }
}
