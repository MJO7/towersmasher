class Building {
  constructor(x, y) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("build.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    image(this.image, pos.x, pos.y);
  }
}
