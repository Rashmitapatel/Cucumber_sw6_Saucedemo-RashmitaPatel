$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As User I want to Login into Saucedemo website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12978349700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User Should login  successfully  with valid credentials",
  "description": "",
  "id": "login-test;user-should-login--successfully--with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should login sucessfully",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I shouild see the Produts \"Products\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 431483900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 536566100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 297986300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 21700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSucessfully()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.iShouildSeeTheProdutsText(String)"
});
formatter.result({
  "duration": 219600,
  "status": "passed"
});
formatter.after({
  "duration": 3297550500,
  "status": "passed"
});
});