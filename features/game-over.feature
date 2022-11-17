Feature: Game over

  Scenario: snake hits wall
    Given the game has started
    When snake hits wall
    Then game over

  Scenario: snake runs into its own body
    Given the game has started
    When snake runs into its own body
    Then game over
