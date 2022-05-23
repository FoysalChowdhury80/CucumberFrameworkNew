package Pages.Scholastic;

import Pages.BasePage;
import org.openqa.selenium.By;

public class FinalCheckOutPage extends BasePage {

    By thankYoyText = By.xpath("//h2[text()='Thank You for Your Order!']");


    public String getText(){
        return textFromElement(thankYoyText);
    }
}
