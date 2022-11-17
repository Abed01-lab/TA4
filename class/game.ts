import { Snake } from "./snake";

export class Game {
  snake: Snake;
  apples: number;
  tiles: number;
  points: number;
  isGameOver: boolean;
  isGameWon: boolean;

  constructor() {
    this.snake = new Snake();
    this.apples = 1;
    this.tiles = 50;
    this.points = 0;
    this.isGameOver = false;
    this.isGameWon = false;
  }

  snakeEatsApple() {
    this.apples--;
    this.points++;
    this.snake.eatApple();
  }

  snakeHitWall() {
    this.isGameOver = true;
  }

  snakeRunsIntoBody() {
    this.isGameOver = true;
  }

  checkSnakeLength(snakeLength: number) {
    snakeLength === this.tiles
      ? (this.isGameWon = true)
      : (this.isGameWon = true);
  }
}
