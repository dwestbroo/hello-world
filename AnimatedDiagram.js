let startColor, endColor;
let numGradientSteps;
let paused = false;

function setup() {
  createCanvas(400, 400);
  
  // Defines the starting and ending colors for the gradient
  startColor = color(255, 0, 0);  // Red
  endColor = color(0, 0, 255);  // Blue

  // Initialize the number of gradient steps
  numGradientSteps = height;

  // Initialize the color transition factor
  colorTransition = 0;

  // Set up the animation loop
  frameRate(30);
}

function draw() {
  if (!paused) {
    // Clear the background past the stop line
    background(255);

    // Calculate the color increment for each gradient step
    let redIncrement = (red(endColor) - red(startColor)) / numGradientSteps;
    let greenIncrement = (green(endColor) - green(startColor)) / numGradientSteps;
    let blueIncrement = (blue(endColor) - blue(startColor)) / numGradientSteps;

    // Iterate through each gradient step and draw it with a slightly different color
    for (let i = 0; i < numGradientSteps; i++) {
      let currentColor = color(
        red(startColor) + i * redIncrement,
        green(startColor) + i * greenIncrement,
        blue(startColor) + i * blueIncrement
      );

      // Draw each gradient step
      stroke(currentColor);
      line(0, i, width, i);
    }

    // Increment the color transition factor smoothly
    colorTransition += 0.01;

    // Update the number of gradient steps based on the color transition factor
    numGradientSteps = int(map(sin(colorTransition), -1, 1, 10, height));
  }
}

function mousePressed() {
  // Toggle pause on mouse click
  paused = !paused;
}
