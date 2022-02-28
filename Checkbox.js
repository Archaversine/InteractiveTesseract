
let CHECKBOX_SIZE = 20;

let INACTIVE = 0;
let INACTIVE_HOVER = 1;
let INACTIVE_PRESS = 2;
let ACTIVE = 3;
let ACTIVE_HOVER = 4;
let ACTIVE_PRESS = 5;

class Checkbox
{
  constructor(pos, text, defaultState)
  {
    this.pos = pos;
    this.text = text;
    this.selected = defaultState;
  }
  
  tick()
  {
    if (pmousePressed && !mouseIsPressed && this.touchingMouse())
    {
      this.selected = !this.selected;
    }
  }
  
  render()
  {
    fill(0);
    stroke(30);
    strokeWeight(2);

    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, CHECKBOX_SIZE, CHECKBOX_SIZE, 4);

    fill(100);
    textAlign(LEFT, CENTER);
    text(this.text, this.pos.x + CHECKBOX_SIZE, this.pos.y);
    
    switch (this.getState())
    {
        case INACTIVE_HOVER:
            fill(5);
            break;
        case INACTIVE_PRESS:
            fill(10);
            break;
        case ACTIVE:
            fill(45, 190, 120);
            break;
        case ACTIVE_HOVER:
            fill(60, 220, 145);
            break;
        case ACTIVE_PRESS:
            fill(65, 255, 165);
            break;
        default:
            fill(0);
    }
    
    noStroke();
    ellipse(this.pos.x + 0.5, this.pos.y, CHECKBOX_SIZE / 2, CHECKBOX_SIZE / 2);
  }
  
  touchingMouse()
  {
    if (mouseX < this.pos.x - CHECKBOX_SIZE + width / 2) { return false; }
    if (mouseX > this.pos.x + CHECKBOX_SIZE + width / 2) { return false; }
    
    if (mouseY < this.pos.y - CHECKBOX_SIZE + height / 2) { return false; }
    if (mouseY > this.pos.y + CHECKBOX_SIZE + height / 2) { return false; }
    
    return true;
  }
  
  getState()
  {
    let mouse = this.touchingMouse();
        
    if (!mouse)
    {
        return (this.selected) ? ACTIVE : INACTIVE;
    }
    else if (!mouseIsPressed)
    {
        return (this.selected) ? ACTIVE_HOVER : INACTIVE_HOVER;
    }

    return (this.selected) ? ACTIVE_PRESS : INACTIVE_PRESS;
  }
  
  value()
  {
    return this.selected;
  }
}
