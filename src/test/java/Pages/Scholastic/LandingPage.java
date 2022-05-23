package Pages.Scholastic;


import Pages.BasePage;
import org.openqa.selenium.By;

import java.util.Set;

public class LandingPage extends BasePage {

    By signIn = By.linkText("Sign In");

    By buttonUp = By.xpath("//div[@class='notification-tab']//span[@class='notification-chevron fa fa-chevron-up']");

    By enterOrder = By.xpath("//body/div[@id='wrapper']/div[3]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[1]/a[1]");

    By SFO = By.linkText("Student Flyer Orders");

    By createAnAccount = By.linkText("Create an Account");








    public void clickSignIn(){
        clickThis(signIn);
    }

    public void clickOnHeader(){

        clickThis(buttonUp);

    }

   public void moveToEnterOrder(){
        moveToElement(enterOrder);
   }

   public void clickSFO(){
        clickThis(SFO);
   }

   public void clickOnCreateAnAccount(){
        clickThis(createAnAccount);
   }









}
