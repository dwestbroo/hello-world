let canvasWidth = 800;
let canvasHeight = 600;
let shapes = [];
let currentShapeIndex = 0;
let backgroundColors = ['#FF5733', '#F9FF33', '#33FF57', '#33C1FF', '#FA33FF'];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  generateShapes();
  setInterval(changeShape, random(1000, 5000));
}

function draw() {
  background(random(backgroundColors));
  shapes[currentShapeIndex].draw();
}

function changeShape() {
  currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
}

function generateShapes() {
  for (let i = 0; i < 5; i++) {
    let shapeType = floor(random(3));
    let shapeColor = color(random(255), random(255), random(255), random(150, 200));
    let shapeSize = random(50, 200);
    let shape;
    switch (shapeType) {
      case 0:
        shape = { draw: () => { fill(shapeColor); noStroke(); ellipse(random(width), random(height), shapeSize, shapeSize); } };
        break;
      case 1:
        shape = { draw: () => { fill(shapeColor); noStroke(); rectMode(CENTER); rect(random(width), random(height), shapeSize, shapeSize); } };
        break;
      case 2:
        shape = { draw: () => { fill(shapeColor); noStroke(); triangle(random(width), random(height) - shapeSize / 2, random(width) - shapeSize / 2, random(height) + shapeSize / 2, random(width) + shapeSize / 2, random(height) + shapeSize / 2); } };
        break;
    }
    shapes.push(shape);
  }
}
