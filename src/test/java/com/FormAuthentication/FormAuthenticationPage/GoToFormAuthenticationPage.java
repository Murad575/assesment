package com.FormAuthentication.FormAuthenticationPage;

import com.FormAuthentication.Utils.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class GoToFormAuthenticationPage {


        public GoToFormAuthenticationPage() {
                PageFactory.initElements(Driver.get(), this);
        }

        @FindBy(css = "input[id='username']")
        public WebElement userNameElement;

        @FindBy(css = "input[id='password']")
        public WebElement passwordElement;

        @FindBy(css = "button[type='submit']")
        public WebElement loginButtonElement;

        @FindBy(css = "div[id='flash']")
        public WebElement successMessage;




}
