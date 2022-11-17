Feature: Game Setup

  Scenario: The game has started
    Given the game has started
    Then game must have a snake
    And game must have 1 apple
    And snake must have direction "left"
    And game must have 50 tiles
    And game must have 0 points
