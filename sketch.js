var box
function setup() {
  createCanvas(400, 400);
  box = new Box(50, 70, 110, 160);
}

function draw() {
  background(220);
  box.show()
  box.move()
}

