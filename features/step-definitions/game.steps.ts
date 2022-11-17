import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { Game } from "../../class/game";
import { Snake } from "../../class/snake";

Given("the game has started", function () {
  this.game = new Game();
});

Then("game must have a snake", function () {
  const snake = new Snake();
  assert.deepEqual(this.game.snake, snake);
});

Then("game must have {int} apple", function (expectedNumberOfApples: number) {
  assert.equal(this.game.apples, expectedNumberOfApples);
});

When("snake eats this apple", function () {
  this.game.snakeEatsApple();
});

Then("games must have {int} apples", function (expectedNumberOfApples: number) {
  assert.equal(this.game.apples, expectedNumberOfApples);
});

Then(
  "snake must have direction {string}",
  function (expectedDirection: string) {
    assert.equal(this.game.snake.direction, expectedDirection);
  }
);

Then("game must have {int} tiles", function (expectedNumberOfTiles: number) {
  assert.equal(this.game.tiles, expectedNumberOfTiles);
});

When("the snake length is {int}", function (snakeLength: number) {
  this.game.checkSnakeLength(snakeLength);
});

Then("the game is won", function () {
  assert.equal(this.game.isGameWon, true);
});

Then("game must have {int} points", function (expectedPoints: number) {
  assert.equal(this.game.points, expectedPoints);
});

Given("game has {int} points", function (desiredPoints: number) {
  this.game.points = desiredPoints;
});

Then("game points must be {int}", function (expectedPoints) {
  assert.equal(this.game.points, expectedPoints);
});

When("snake hits wall", function () {
  this.game.snakeHitWall();
});

Then("game over", function () {
  assert.equal(this.game.isGameOver, true);
});

When("snake runs into its own body", function () {
  this.game.snakeRunsIntoBody();
});
