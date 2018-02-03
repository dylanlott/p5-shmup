function Ship(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 3;
  this.weapons = [new defaultWeapon()];

  this.move = function(x, y) {
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

  this.rotateWeapon = function() {
    this.weapons.unshift(this.weapons.pop());
  }

  this.shoot = function(direction) {
    this.weapons[0].fire(this.x, this.y, direction);
  }

  this.display = function() {
    ellipse(this.x, this.y, 10, 10);
  }
}
