
Feature: Login Test
  As User I want to Login into Saucedemo website

@smoke
  Scenario:User Should login  successfully  with valid credentials
    Given I am on homepage
    When I enter username "standard_user"
    And  I enter password "secret_sauce"
    And I click on login button
    And I should login sucessfully
    Then I shouild see the Produts "Products" text


  @sanity @regression
    Scenario: User should verify 6 Products are displayed after login
    Given I am on Login Page
    When  I enter username "standard_user"
    And  I enter password "secret_sauce"
    And I click on login button
    Then I should login sucessfully
    And I should see number of products on the page as  6