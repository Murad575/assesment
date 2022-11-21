package com.FormAuthentication.FormAuthenticationStepDef;

import com.FormAuthentication.FormAuthenticationPage.GoToFormAuthenticationPage;
import com.FormAuthentication.Utils.ConfigurationReader;
import com.FormAuthentication.Utils.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


public class GoToFormAuthenticationStepDef {

    GoToFormAuthenticationPage authenticationPage = new GoToFormAuthenticationPage();
    String username= "tomsmith";
    String password = "SuperSecretPassword!";
    String successMessageStr = "You logged into a secure area!";
    String invalidUsernameErrorMessage = "Your username is invalid!";
    String invalidPasswordErrorMessage = "Your password is invalid!";




    @Given("user opens the Form Authentication page")
    public void user_opens_the_form_authentication_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("user logs in with valid credentials")
    public void user_logs_in_with_valid_credentials() {
        authenticationPage.userNameElement.sendKeys(username);
        authenticationPage.passwordElement.sendKeys(password);
        authenticationPage.loginButtonElement.click();
    }

    @Then("the success message should be visible {string}")
    public void the_success_message_should_be_visible(String string) {
        String str = authenticationPage.successMessage.getText().trim();
        if(str.contains(successMessageStr)){
            Assert.assertTrue(true);
        }else {
            Assert.assertTrue(false);
        }
    }


    @When("user logs in with invalid credentials")
    public void user_logs_in_with_invalid_credentials() {
        authenticationPage.userNameElement.sendKeys("username");
        authenticationPage.passwordElement.sendKeys("password");
        authenticationPage.loginButtonElement.click();
    }


    @Then("the error message should be visible {string}")
    public void the_error_message_should_be_visible(String string) {
        String str = authenticationPage.successMessage.getText().trim();
        if(str.contains(invalidUsernameErrorMessage)){
            Assert.assertTrue(true);
        }else {
            Assert.assertTrue(false);
        }

    }

    @When("user logs in with invalid username")
    public void user_logs_in_with_invalid_username() {
        authenticationPage.userNameElement.sendKeys("username");
        authenticationPage.passwordElement.sendKeys(password);
        authenticationPage.loginButtonElement.click();
    }

    @Then("the error message should be visible for invalid username {string}")
    public void the_error_message_should_be_visible_for_invalid_username(String string) {
        String str = authenticationPage.successMessage.getText().trim();
        if(str.contains(invalidUsernameErrorMessage)){
            Assert.assertTrue(true);
        }else {
            Assert.assertTrue(false);
        }

    }

    @When("user logs in with invalid Password")
    public void user_logs_in_with_invalid_Password() {
        authenticationPage.userNameElement.sendKeys(username);
        authenticationPage.passwordElement.sendKeys("password");
        authenticationPage.loginButtonElement.click();
    }

    @Then("the error message should be visible for invalid password {string}")
    public void the_error_message_should_be_visible_for_invalid_password(String string) {
        String str = authenticationPage.successMessage.getText().trim();
        if(str.contains(invalidPasswordErrorMessage)){
            Assert.assertTrue(true);
        }else {
            Assert.assertTrue(false);
        }

    }

    @When("user logs in with empty username and password")
    public void user_logs_in_with_empty_username_and_password() {
        authenticationPage.loginButtonElement.click();
    }

    @Then("the error message should be visible for empty credentials {string}")
    public void the_error_message_should_be_visible_for_empty_credentials(String string) {
        String str = authenticationPage.successMessage.getText().trim();
        if(str.contains(invalidUsernameErrorMessage)){
            Assert.assertTrue(true);
        }else {
            Assert.assertTrue(false);
        }

    }



}
