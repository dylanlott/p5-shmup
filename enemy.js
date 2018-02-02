function Enemy (x, y, stats) {
  const _stats = Object.assign({}, stats)
  this.x = x;
  this.y = y;
  this.done = false;
  this.sizeX = stats.sizeX || 20;
  this.sizeY = stats.sizeY || 30;

  this.move = function () {
    if (this.y > 0) {
      this.y -= 1;
    }

    if (this.y <= 0 + 2) {
      this.done = true;
    }
  }

  this.display = function () {
    ellipse(this.x, this.y, this.sizeX, this.sizeY)
  }
}
