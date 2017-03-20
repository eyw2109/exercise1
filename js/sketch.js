// ***** Global variables ***** //
var maxPixel = 800;

// ***** Preload function ***** //

// ***** Setup function 1 ***** //
function setup(){
    createCanvas(800, 800);
    console.log('Setup complete...');
}

function drawPixels(){
  for(var i = 0; i < maxPixel; i += 10){
    for(var j = 0; j < maxPixel; j += 10){
      noStroke();
      colorMode(HSB, 800);
      c = color(i, j, 800);
      fill(c);
      rect(i, j, 10, 10);
    }
  }
}
// ***** Draw function 1 ***** //
function draw(){
  background(0);
  drawPixels();
}
