package Pages.Scholastic;

import Pages.BasePage;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

public class LandingPageTest extends BasePage {

    By fullName = By.xpath("//input[@id=\"input{\"]");
    By email = By.xpath("//input[@id=\"userEmail\"]");
    By add1 = By.xpath("//textarea[@id=\"currentAddress\"]");


    public void writeName(String name){
        type(fullName, name);
    }

}
