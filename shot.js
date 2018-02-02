function Shot(shipx, shipy) {
  this.x = shipx;
  this.y = shipy-10;
  this.done = false;
  this.speed = 5;

  this.move = function() {
    if (this.y > 0) {
      this.y -= this.speed;
    }

    if (this.y <= 0 + 2) {
        this.done = true;
    }
  }

  this.display = function() {
    if (this.done == false) {
      rect(this.x, this.y, 4, 8);
    }
  }

}
