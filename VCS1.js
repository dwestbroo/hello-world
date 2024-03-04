let color1, color2;
let numLines;
let mouseXFactor = 0.5; // Default value for the factor influenced by mouseX

function setup() {
  createCanvas(400, 400);
  
  // Define the two colors for the gradient
  color1 = color(255, 0, 0);  // Red
  color2 = color(0, 0, 255);  // Blue
  
  numLines = height;
}

function draw() {
  background(255);
  
  // Calculate the color increment for each line
  let r = (red(color2) - red(color1)) / numLines;
  let g = (green(color2) - green(color1)) / numLines;
  let b = (blue(color2) - blue(color1)) / numLines;
  
  // Update numLines based on mouseX position
  numLines = int(map(mouseX, 0, width, 10, height));

  // Iterate through each line and draw it with a slightly different color
  for (let i = 0; i < numLines; i++) {
    let currentColor = color(
      red(color1) + i * r,
      green(color1) + i * g,
      blue(color1) + i * b
    );
    
    // Draw each line
    stroke(currentColor);
    line(0, i, width, i);
  }
}

function mouseMoved() {
  // Update the mouseXFactor based on mouseX position
  mouseXFactor = map(mouseX, 0, width, 0, 1);
  
  // Update color2 based on mouseXFactor
  color2 = lerpColor(color(255, 0, 0), color(0, 0, 255), mouseXFactor);
}
