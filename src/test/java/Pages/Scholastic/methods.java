package Pages.Scholastic;

import DriverWrapper.Web;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class methods {

    public WebElement findElement(By locator){
        WebElement element = Web.getDriver().findElement(locator);
        return element;
    }

    public List<WebElement> findElements(By locator){
        List<WebElement> elementList = Web.getDriver().findElements(locator);
        return elementList;
    }

    public void typeText(By locator, String text){
        Web.getDriver().findElement(locator).sendKeys(text);
    }

    public void selectFromDropDown(By locator, String data){
        WebElement element = Web.getDriver().findElement(locator);
        Select sc = new Select(element);
        sc.selectByVisibleText(data);


    }


}
