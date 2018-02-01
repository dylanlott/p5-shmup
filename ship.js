function Ship(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 3;

  this.moveFlat = function(x, y) {

    this.x += x * this.speed;
    if (this.x > width) {
      this.x = width;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    this.y += y * this.speed;
    if (this.y > height) {
      this.y = height;
    }

    if (this.y < 0) {
       this.y = 0;
    }
  }

  this.moveParabola = function(x) {

    this.x += x * this.speed;

    if (this.x > width) {
      this.x = width;
    }

    if (this.x < 0) {
      this.x = 0;
    }

    this.y = (sqrt(sq(width/2) - sq(this.x - width/2)) + width/2);
  }

  this.display = function() {
    ellipse(this.x, this.y, 10, 10);
  }
}
