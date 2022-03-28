class CarClass {
  readonly name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

class BmwClass extends CarClass {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(this.name);
  }
}

const z4 = new BmwClass("blue");
z4.showName();

abstract class Shape {
  name: string;
  corner: number;
  constructor(corner: number) {
    this.corner = corner;
  }
  abstract showName(): void;
}

class Triangle extends Shape {
  constructor(corner: number) {
    super(corner);
    this.name = "Triangle"
  }
  showName(): void {
      console.log(this.name);
  }
}

const tri = new Triangle(3);
tri.showName()