// P5.js Link "https://editor.p5js.org/dwestbrook/full/7nNuY3ftk"


let table;
let dataRows = [];

function preload() {
  // Load the CSV file
  table = loadTable(
    "https://raw.githubusercontent.com/dwestbroo/hello-world/SelfPortrait/DeAndreWestbrook_glucose_3-29-2024.csv",
    "csv",
    "header"
  );
}

function setup() {
  createCanvas(900, 500); 
  strokeWeight(3);
  if (table) {
    // Store all data rows in an array
    dataRows = table.getRows();

    for (let i = 0; i < min(5, dataRows.length); i++) {
      let dataRow = dataRows[i];
      console.log(dataRow);
    }
  } else {
    console.log("Error: Unable to load CSV file.");
  }
}

function draw() {
  background(255);

  // Draw axes
  line(50, height - 50, width - 50, height - 50); // x-axis
  line(50, 50, 50, height - 50); // y-axis

  // Draw x-axis label
  textAlign(CENTER, TOP);
  text("Time", width / 2, height - 10);

  // Draw y-axis label
  textAlign(RIGHT, CENTER);
  text("Level", 40, height / 2);
  
  // Draw data points
  stroke(255, 0, 0); 
  for (let i = 0; i < dataRows.length; i++) {
    let dataRow = dataRows[i];
    let glucoseLevel = dataRow.getNum("Historic Glucose mg/dL");
    let x = map(i, 0, dataRows.length - 1, 50, width - 50);
    let y = map(glucoseLevel, 0, 300, height - 50, 50); 
    point(x, y); // Draw individual data points
  }
}
