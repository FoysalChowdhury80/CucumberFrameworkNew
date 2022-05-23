package Pages.Scholastic;

import Pages.BasePage;
import org.openqa.selenium.By;

public class CreateANewAccPage extends BasePage {

    By teacherAdmin = By.id("acccountTeacther");

    By nextButton = By.id("linkChooseAcount");


    public void clickOnTeacher(){
        clickThis(teacherAdmin);
    }

    public void clickOnNextButton(){
        clickThis(nextButton);
    }
}
