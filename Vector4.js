
function createVector4(x, y, z, w)
{
  return new Vector4(x, y, z, w);
}

class Vector4
{
  constructor(x, y, z, w)
  {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  
  rotateXZ(angle)
  {
    let x = this.x * cos(angle) - this.z * sin(angle);
    let z = this.x * sin(angle) + this.z * cos(angle);
    
    this.x = x;
    this.z = z;
  }
  
  rotateYZ(angle)
  {
    let y = this.y * cos(angle) - this.z * sin(angle);
    let z = this.y * sin(angle) + this.z * cos(angle);
    
    this.y = y;
    this.z = z;
  }
  
  rotateXW(angle)
  {
    let x = this.x * cos(angle) - this.w * sin(angle);
    let w = this.x * sin(angle) + this.w * cos(angle);
    
    this.x = x;
    this.w = w;
  }
  
  rotateYW(angle)
  {
    let y = this.y * cos(angle) - this.w * sin(angle);
    let w = this.y * sin(angle) + this.w * cos(angle);
    
    this.y = y;
    this.w = w;
  }
  
  rotateXY(angle)
  {
    let x = this.x * cos(angle) - this.y * sin(angle);
    let y = this.x * sin(angle) + this.y * cos(angle);
    
    this.x = x;
    this.y = y;
  }
  
  rotateZW(angle)
  {
    let z = this.z * cos(angle) - this.w * sin(angle);
    let w = this.z * sin(angle) + this.w * cos(angle);
    
    this.z = z;
    this.w = w;
  }
}
