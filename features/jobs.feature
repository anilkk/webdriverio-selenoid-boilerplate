Feature:bitgrip jobs
  As a job seeker
  I want to see open positions at bitgrip

  Background:
    Given Job seeker is on a bitgrip home page

  @openJobsPage
  Scenario: Open jobs page
    When click on jobs
    Then sees the jobs page
    And open positions are shown

