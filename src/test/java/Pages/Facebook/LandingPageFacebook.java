package Pages.Facebook;

import Pages.BasePage;
import org.openqa.selenium.By;

public class LandingPageFacebook extends BasePage {
    By userNamelocator =By.id("email");
    By passwordLocator = By.xpath("//input[@id='pass']");
    By logInLocator = By.xpath("//button[@name='login']");

    public void typeUserName( String userName){

        type(userNamelocator,userName);
    }

    public void typePassword(String password)  {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        type(passwordLocator,password);
    }

    public void clickLogInLand(){
        clickThis(logInLocator);
    }


}
