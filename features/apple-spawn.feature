Feature: Spawn apple

  Scenario: Spawn apple after snake eats one
    Given the game has started
    When snake eats this apple
    Then games must have 0 apples
