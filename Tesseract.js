
class Tesseract
{
  constructor(size)
  {
    this.points = [];
    this.size = size;
    
    this.showIndices = true;
    this.resetPoints();
  }
  
  resetPoints()
  {
    for (let i = 0; i < 16; i++)
    {
      let x = pow(-1, floor(i / 8) % 2);
      let y = pow(-1, floor(i / 4) % 2);
      let z = pow(-1, floor(i / 2) % 2);
      let w = pow(-1, i % 2);

      this.points[i] = createVector4(x, y, z, w);
    }
  }
  
  render()
  {
    stroke(255);
    strokeWeight(8);

    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    
    let newPoints = [];
    
    for (let i = 0; i < this.points.length; i++)
    {
      let dz = 1 / (3 - this.points[i].z);
      let dw = 1 / (3 - this.points[i].w);
      let d = this.size * dz * dw;

      if (this.showIndices)
      {
          fill(0);
          noStroke();
          rect(this.points[i].x * d, this.points[i].y * d - 10, 15, 15);

          fill(255);
          text(i, this.points[i].x * d, this.points[i].y * d - 13);
      }

      newPoints[i] = createVector4(this.points[i].x * d, 
                                   this.points[i].y * d, 
                                   this.points[i].z, 
                                   this.points[i].w);
    }
    
    strokeWeight(4);
    
    for (let i = 0; i < 4; i++)
    {
      this.plotEdge(newPoints[0 + i], newPoints[4 + i]);
      this.plotEdge(newPoints[4 + i], newPoints[12 + i]);
      this.plotEdge(newPoints[8 + i], newPoints[12 + i]);
      this.plotEdge(newPoints[0 + i], newPoints[8 + i]);

      this.plotEdge(newPoints[i * 4], newPoints[i * 4 + 1]);
      this.plotEdge(newPoints[i * 4 + 2], newPoints[i * 4 + 3]);
      this.plotEdge(newPoints[i * 4], newPoints[i * 4 + 2]);
      this.plotEdge(newPoints[i * 4 + 1], newPoints[i * 4 + 3]);
    }
  }
  
  plotEdge(p1, p2)
  {
    let a = map((p1.z + p2.z) / 2, -1, 1, 50, 200);
    let c = map((p1.w + p2.w) / 2, -1, 1, 75, 175);
    
    stroke(255, c, 0, a);
    strokeWeight(4);
    
    line(p1.x, p1.y, p2.x, p2.y);
    
    noStroke();
    point(p1.x, p1.y);
    point(p2.x, p2.y);
  }
  
  rotateXZ(angle)
  {
    for (let i = 0; i < this.points.length; i++)
    {
      this.points[i].rotateXZ(angle);
    }
  }
  
  rotateYZ(angle)
  {
    for (let i = 0; i < this.points.length; i++)
    {
      this.points[i].rotateYZ(angle);
    }
  }
  
  rotateXW(angle)
  {
    for (let i = 0; i < this.points.length; i++)
    {
      this.points[i].rotateXW(angle);
    }
  }
  
  rotateYW(angle)
  {
    for (let i = 0; i < this.points.length; i++)
    {
      this.points[i].rotateYW(angle);
    }
  }
  
  rotateXY(angle)
  {
    for (let i = 0; i < this.points.length; i++)
    {
      this.points[i].rotateXY(angle);
    }
  }
  
  rotateZW(angle)
  {
    for (let i = 0; i < this.points.length; i++)
    {
      this.points[i].rotateZW(angle);
    }
  }
}
