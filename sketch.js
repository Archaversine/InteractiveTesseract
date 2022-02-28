let t;

let shiftPressed = false;
let altPressed = false;

let pmousePressed = false;

let graphSize = 40;

let CB_showIndices;

let CB_rotateXZ;
let CB_rotateYZ;
let CB_rotateXW;
let CB_rotateYW;
let CB_rotateXY;
let CB_rotateZW;

function setup()
{
  createCanvas(800, 800);
  
  t = new Tesseract(600);
  
  let cb_x = 13 * width / 40;
  
  CB_showIndices = new Checkbox(createVector(cb_x, 20 - height / 2), "Indices", false);
  
  CB_rotateXZ = new Checkbox(createVector(cb_x, 50 - height / 2), "Rotate XZ", false);
  CB_rotateYZ = new Checkbox(createVector(cb_x, 80 - height / 2), "Rotate YZ", false);
  CB_rotateXW = new Checkbox(createVector(cb_x, 110 - height / 2), "Rotate XW", false);
  CB_rotateYW = new Checkbox(createVector(cb_x, 140 - height / 2), "Rotate YW", false);
  CB_rotateXY = new Checkbox(createVector(cb_x, 170 - height / 2), "Rotate XY", false);
  CB_rotateZW = new Checkbox(createVector(cb_x, 200 - height / 2), "Rotate ZW", false);
}

function tick()
{
  if (mouseIsPressed && mouseButton == LEFT)
  {
    dir = createVector(mouseX, mouseY);
    dir.x -= pmouseX;
    dir.y -= pmouseY;
    dir.div(200);
    
    if (!shiftPressed && !altPressed)
    {
      t.rotateXZ(-dir.x);
      t.rotateYZ(-dir.y);
    }
    else if (!altPressed)
    { 
      t.rotateXW(-dir.x);
      t.rotateYW(-dir.y);
    }
    else
    {
      t.rotateXY(-dir.x);
      t.rotateZW(-dir.y);
    }
  }
  
  CB_showIndices.tick();
    
  CB_rotateXZ.tick();
  CB_rotateYZ.tick();
  CB_rotateXW.tick();
  CB_rotateYW.tick();
  CB_rotateXY.tick();
  CB_rotateZW.tick();
  
  t.showIndices = CB_showIndices.value();

  if (CB_rotateXZ.value()) { t.rotateXZ(-0.01); }
  if (CB_rotateYZ.value()) { t.rotateYZ(0.01); }
  if (CB_rotateXW.value()) { t.rotateXW(-0.01); }
  if (CB_rotateYW.value()) { t.rotateYW(-0.01); }
  if (CB_rotateXY.value()) { t.rotateXY(0.01); }
  if (CB_rotateZW.value()) { t.rotateZW(0.01); }
}

function draw()
{
  tick();
  
  translate(width / 2, height / 2);
  background(0);
  
  drawGraph();
  
  stroke(30);
  strokeWeight(2);
  fill(0);
  
  rectMode(CORNERS);
  rect(-width / 2, -height / 2, 250 - width / 2, 150 - height / 2, 0, 0, 8, 0);
  
  rectMode(CORNER);
  rect(13 * width / 40 - 25, -height / 2, width / 4, height / 4 + 25, 0, 0, 0, 8);
  
  fill(100);
  stroke(100);
  textAlign(LEFT);
  
  strokeWeight(1);
  
  text("Drag left/right", 10 - width / 2, 20 - height / 2);
  text("Drag up/down", 10 - width / 2, 40 - height / 2);
  text("Shift + Drag left/right", 10 - width / 2, 60 - height / 2);
  text("Shift + Drag up/down", 10 - width / 2, 80 - height / 2);
  text("Alt + Drag left/right", 10 - width / 2, 100 - height / 2);
  text("Alt + Drag up/down", 10 - width / 2, 120 - height / 2);
  
  line(145 - width / 2, 
        10 - height / 2, 
        145 - width / 2, 
        130 - height / 2);
  
  text("XZ Rotation", 155 - width / 2, 20 - height / 2);
  text("YZ Rotation", 155 - width / 2, 40 - height / 2);
  text("XW Rotation", 155 - width / 2, 60 - height / 2);
  text("YW Rotation", 155 - width / 2, 80 - height / 2);
  text("XY Rotation", 155 - width / 2, 100 - height / 2);
  text("ZW Rotation", 155 - width / 2, 120 - height / 2);
  
  t.render();
  
  CB_showIndices.render();
    
  CB_rotateXZ.render();
  CB_rotateYZ.render();
  CB_rotateXW.render();
  CB_rotateYW.render();
  CB_rotateXY.render();
  CB_rotateZW.render();
  
  pmousePressed = mouseIsPressed;
}

function drawGraph()
{
  stroke(10);
  strokeWeight(2);

  let vertLines = ceil(width / graphSize);
  let horizLines = ceil(height / graphSize);

  for (let i = -vertLines; i < vertLines; i++)
  {
      if (i % 5 == 0)
      {
          strokeWeight(2);
          stroke(25);
      }
      else
      {
          strokeWeight(1);
          stroke(20);
      }

      line(i * graphSize, -height, i * graphSize, height);
  }

  for (let i = -horizLines; i < horizLines; i++)
  {
      if (i % 5 == 0)
      {
          strokeWeight(2);
          stroke(25);
      }
      else
      {
          strokeWeight(1);
          stroke(20);
      }

      line(-width, i * graphSize, width, i * graphSize);
  }

  strokeWeight(2);
  stroke(50);

  line(-width, 0, width, 0);
  line(0, -height, 0, height);
}

function keyPressed()
{
  if (keyCode == SHIFT) { shiftPressed = true; }
  if (keyCode == ALT) { altPressed = true; }
  
  if (key == 'r') { t.resetPoints(); }
}

function keyReleased()
{
  if (keyCode == SHIFT) { shiftPressed = false; }
  if (keyCode == ALT) { altPressed = false; }
}
