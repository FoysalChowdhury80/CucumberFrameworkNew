package Pages.Scholastic;

import Pages.BasePage;
import org.openqa.selenium.By;

public class SubmitPage extends BasePage {

    By submit = By.xpath("//button[@name='dwfrm_summary_submitOrder']");


    public void clickSubmit(){
        clickThis(submit);
    }
}
