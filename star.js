function Star(movement) {
  this.x = random(0, width);
  this.y = random(0, height);
  this.z = random(width);
  this.movement = movement;
  this.speed = random(1,2);
  this.size = random(1,4);

  this.move = function() {
    if (this.movement == 'flat') {
      this.moveFlat();
    }

    if (this.movement == 'parabola') {
      this.moveParabola();
    }
  }

  this.moveFlat = function() {
    if (this.y > height) {
      this.y = 0;
      this.speed = random(0,4);
      this.size = random(0,4);
    }

    this.y = this.y + this.speed;
  }

  this.moveParabola = function() {
  }

  this.display = function() {
    ellipse(this.x, this.y, this.size, this.size);
  }
}
