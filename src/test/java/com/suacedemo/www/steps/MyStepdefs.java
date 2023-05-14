package com.suacedemo.www.steps;

import com.suacedemo.www.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String username)  {
        new LoginPage().enterUserName("Prime123@gmail.com");
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String Password)  {
        new  LoginPage().enterPassword("Testing123");

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
    }

    @Then("^I should login sucessfully$")
    public void iShouldLoginSucessfully() {
    }

    @Then("^I shouild see the Produts \"([^\"]*)\" text$")
    public void iShouildSeeTheProdutsText(String arg0)  {

    }

    @Given("^I am on Login Page$")
    public void iAmOnLoginPage() {
    }

    @And("^I should see number of products on the page as  (\\d+)$")
    public void iShouldSeeNumberOfProductsOnThePageAs(int number) {
    }
}
