function Shot(shipx, shipy, movement) {
  this.x = shipx;
  this.y = shipy;
  this.type = movement;
  this.done = false;

  this.move = function() {
    if (this.type === 'parabola') {
      this.moveParabola();
    }

    if (this.type === 'flat') {
      this.moveFlat();
    }

  }

  this.moveParabola = function() {
    if (this.x + 1 > width/2) {
      this.x -= 1;
    }

    if (this.x + 1 < width/2) {
      this.x += 1;
    }

    if (this.y + 1 > height/2) {
      this.y -= 1;
    }

    if (this.y + 1 < height/2) {
      this.y += 1;
    }

    if (this.y <= height/2 + 2 && this.x == width/2) {
        this.done = true;
    }
  }

  this.moveFlat = function() {
    if (this.y > 0) {
      this.y -= 1;
    }

    if (this.y <= 0 + 2) {
        this.done = true;
    }
  }

  this.display = function() {
    if (this.done == false) {
      ellipse(this.x, this.y, 4, 4);
    }
  }

}
