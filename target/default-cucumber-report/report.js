$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FormAuthentication.feature");
formatter.feature({
  "name": "Form Authentication",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user opens the Form Authentication page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_opens_the_form_authentication_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.FormAuthentication.FormAuthenticationStepDef.GoToFormAuthenticationStepDef.user_logs_in_with_valid_credentials(GoToFormAuthenticationStepDef.java:31)\n\tat ✽.user logs in with valid credentials(file:src/test/resources/features/FormAuthentication.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "the success message should be visible \"You logged into a secure area!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.the_success_message_should_be_visible(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with invalid credentials Username and Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user opens the Form Authentication page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_opens_the_form_authentication_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with invalid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_logs_in_with_invalid_credentials()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.FormAuthentication.FormAuthenticationStepDef.GoToFormAuthenticationStepDef.user_logs_in_with_invalid_credentials(GoToFormAuthenticationStepDef.java:47)\n\tat ✽.user logs in with invalid credentials(file:src/test/resources/features/FormAuthentication.feature:13)\n",
  "status": "failed"
});
formatter.step({
  "name": "the error message should be visible \"Your username is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.the_error_message_should_be_visible(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with invalid credential \"only Username, Password should be correct\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user opens the Form Authentication page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_opens_the_form_authentication_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with invalid username",
  "keyword": "When "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_logs_in_with_invalid_username()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.FormAuthentication.FormAuthenticationStepDef.GoToFormAuthenticationStepDef.user_logs_in_with_invalid_username(GoToFormAuthenticationStepDef.java:62)\n\tat ✽.user logs in with invalid username(file:src/test/resources/features/FormAuthentication.feature:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "the error message should be visible for invalid username \"Your username is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.the_error_message_should_be_visible_for_invalid_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with invalid credential \"only Password, Username should be correct\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user opens the Form Authentication page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_opens_the_form_authentication_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with invalid Password",
  "keyword": "When "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_logs_in_with_invalid_Password()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.FormAuthentication.FormAuthenticationStepDef.GoToFormAuthenticationStepDef.user_logs_in_with_invalid_Password(GoToFormAuthenticationStepDef.java:76)\n\tat ✽.user logs in with invalid Password(file:src/test/resources/features/FormAuthentication.feature:23)\n",
  "status": "failed"
});
formatter.step({
  "name": "the error message should be visible for invalid password \"Your password is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.the_error_message_should_be_visible_for_invalid_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login with invalid credential \"Username and Password field should be empty\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user opens the Form Authentication page",
  "keyword": "Given "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_opens_the_form_authentication_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in with empty username and password",
  "keyword": "When "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.user_logs_in_with_empty_username_and_password()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat com.FormAuthentication.FormAuthenticationStepDef.GoToFormAuthenticationStepDef.user_logs_in_with_empty_username_and_password(GoToFormAuthenticationStepDef.java:90)\n\tat ✽.user logs in with empty username and password(file:src/test/resources/features/FormAuthentication.feature:28)\n",
  "status": "failed"
});
formatter.step({
  "name": "the error message should be visible for empty credentials \"Your username is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoToFormAuthenticationStepDef.the_error_message_should_be_visible_for_empty_credentials(String)"
});
formatter.result({
  "status": "skipped"
});
});