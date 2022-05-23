package Pages.Scholastic;

import DriverWrapper.Web;
import Pages.BasePage;
import org.openqa.selenium.By;

public class CheckOutPage extends BasePage {

    By estimatedTax = By.xpath("//ul/li[@class='std-total-msg']/span[@class='or-inner-data']");

    By continueCheckOut = By.id("btn-continue-checkout");











   public double estimatedTax(){
       String text = textFromElement(estimatedTax).substring(1);
       double estimation = Double.parseDouble(text);
       return estimation;

   }

   public boolean isEstimatedGreaterThanZero(){
       boolean isTaxPositive = false;
       if (estimatedTax()>0){
           isTaxPositive= true;

       }else{
           isTaxPositive = false;
       }
       return isTaxPositive;
   }

   public boolean isEstimatedTaxEqualToZero(){
       boolean isTaxZero = false;
       if (estimatedTax()== 0){
           isTaxZero = true;
       }
       else {
           isTaxZero = false;
       }
       return isTaxZero;
   }


   public void clickContinueCheckOut(){
       clickThis(continueCheckOut);
   }








}
