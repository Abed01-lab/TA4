Feature: Snake growth

  Scenario: Snake eats an apple
    Given the game has started
    When a snake eats an apple
    Then snake must grow by 1
