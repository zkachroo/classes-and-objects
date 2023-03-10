class Box {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height

  }
  move() {
    this.x += 1
  }
  show() {
    rect(this.x, this.y, this.width, this.height)
  }


}


