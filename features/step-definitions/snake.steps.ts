import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { Snake } from "../../class/snake";

When("a snake eats an apple", function () {
  this.game.snakeEatsApple();
});

Then("snake must grow by {int}", function (expectedGrowth: number) {
  const startLength = new Snake().length;
  assert.equal(this.game.snake.length, expectedGrowth + startLength);
});

Given(
  "the snakes direction is not {string}",
  function (startDirection: string) {
    this.game.snake.direction = startDirection;
  }
);

When(
  "snake changes direction to {string}",
  function (desiredDirection: string) {
    this.game.snake.changeDirectionTo(desiredDirection);
  }
);

Then(
  "snakes direction must change to {string}",
  function (expectedDirection: string) {
    assert.equal(this.game.snake.direction, expectedDirection);
  }
);
