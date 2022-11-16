package com.FormAuthentication.Utils;

import io.cucumber.java.Scenario;
import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;



public class Hooks {

    @Before
    public void setUp() {
        System.out.println("Before hooks");
        // Driver.get().get("chrome://extension");
        Driver.get().get(ConfigurationReader.get("url"));
        //Driver.get().manage().window().maximize();
        Driver.get().manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

    }


    @After
    public void tearDown(Scenario scenario){
        System.out.println("After hooks");
        // check if the scenario is failed
        if (scenario.isFailed()){
            // take screenshot
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            // attache the screenshot to the report
//            scenario.embed(screenshot,"image/png");
        }
        Driver.closeDriver();
    }


}
