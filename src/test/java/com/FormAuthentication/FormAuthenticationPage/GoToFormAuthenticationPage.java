package com.FormAuthentication.FormAuthenticationPage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;



public class GoToFormAuthenticationPage {



        @FindBy(css = "input[id='username']")
        public WebElement userNameElement;

        @FindBy(css = "input[id='password']")
        public WebElement passwordElement;

        @FindBy(css = "button[type='submit']")
        public WebElement loginButtonElement;

        @FindBy(css = "div[class='flash success']")
        public WebElement successMessage;




}
