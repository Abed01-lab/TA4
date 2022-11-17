Feature: Game Won

  Scenario: Snake length reaches 50
    Given the game has started
    When the snake length is 50
    Then the game is won
