export class Snake {
  direction: string;
  length: number;

  constructor() {
    this.length = 3;
    this.direction = "left";
  }

  eatApple() {
    this.length++;
  }

  changeDirectionTo(desiredDirection: string) {
    if (this.direction === desiredDirection) return;
    if (desiredDirection === "left" && this.direction !== "right") {
      this.direction = desiredDirection;
    } else if (desiredDirection === "right" && this.direction !== "left") {
      this.direction = desiredDirection;
    } else if (desiredDirection === "up" && this.direction !== "down") {
      this.direction = desiredDirection;
    } else if (desiredDirection === "down" && this.direction !== "up") {
      this.direction = desiredDirection;
    }
  }
}
