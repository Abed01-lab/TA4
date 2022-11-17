Feature: Snake movement

  Scenario Outline: directions
    Given the game has started
    And the snakes direction is not <startDirection>
    When snake changes direction to <desiredDirection>
    Then snakes direction must change to <endDirection>

    Examples: 
      | startDirection | desiredDirection | endDirection |
      | "left"         | "right"          | "left"       |
      | "right"        | "left"           | "right"      |
      | "right"        | "up"             | "up"         |
      | "left"         | "down"           | "down"       |
      | "up"           | "up"             | "up"         |
      | "up"           | "down"           | "up"         |
