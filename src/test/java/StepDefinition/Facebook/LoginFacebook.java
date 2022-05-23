package StepDefinition.Facebook;

import Pages.Facebook.HomePageFacebook;
import Pages.Facebook.LandingPageFacebook;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

public class LoginFacebook {

    LandingPageFacebook lpFaceBook = new LandingPageFacebook();
    HomePageFacebook homePageFacebook = new HomePageFacebook();

    @When("^User enters '(.+)' as user name$")
    public void enterUserName(String user){
        lpFaceBook.typeUserName(user);

    }
    @And("^User enters '(.+)' as password$")
    public void enterPasswrord(String Password) throws InterruptedException {
        lpFaceBook.typePassword(Password);

    }
    @And("^User click on log in button$")
    public void clickLogIn(){
        lpFaceBook.clickLogInLand();

    }
    @And("^User accepts to get notification alert$")
    public void acceptAlert(){
        homePageFacebook.allowsAlertForNotication();

    }


}
