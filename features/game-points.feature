Feature: Game points

  Scenario: 
    Given the game has started
    And game has 0 points
    When a snake eats an apple
    Then game points must be 1
