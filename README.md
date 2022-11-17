## Technologies

- Typescript
- Cucumber (BDD)
- Jest (Code Coverage) url [https://about.codecov.io/blog/measuring-typescript-code-coverage-with-jest-and-github-actions/](https://about.codecov.io/blog/measuring-typescript-code-coverage-with-jest-and-github-actions/)
- Styrker Mutation (Mutation Testing) url [https://stryker-mutator.io/docs/stryker-js/typescript-checker/](https://stryker-mutator.io/docs/stryker-js/typescript-checker/)
- ESLint (Static Analysis) url [https://typescript-eslint.io/](https://typescript-eslint.io/docs/)

## Scenarios

Game

Given the game has started
Then game must have a snake
And game must have “1” apple
And snake must have direction “left”
And game must have 50 tiles
And game must have 0 points

Given the game has started
When snake eats an apple
Then games must have “0” apples

Given the game has started
When the snake length is 50
Then the game is won

Given the game has started
When snake hits wall
Then game is over

Given the game has started
When snake runs into its own body
Then game is over

Snake

Given the game has started
When a snake eats an apple
Then snake must grow by “1”

Given the game has started
And the snakes direction is not <startDirection>
When snake changes direction to <desiredDirection>
Then snakes direction must change to <expectedDirection>

Features:

## Getting started

1. Clone project
2. npm install
3. To run BDD test: npm test
4. To run mutation testing: npm run mutation
5. To run code coverage: npm run coverage
6. To run linting: npm run lint
