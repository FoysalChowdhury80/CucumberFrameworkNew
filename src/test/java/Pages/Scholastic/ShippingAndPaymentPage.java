package Pages.Scholastic;

import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ShippingAndPaymentPage extends BasePage {



    By dropDownCardOption = By.xpath("//div[contains(text(),'Select Payment Method')]");
    By creditCard = By.xpath("//div[@class='custom-scrollbar']/ul/li[@class='custom-option CREDIT_CARD']/span[text()='Credit Card']");

    By cardType = By.xpath("//div[contains(text(),'Select a Card')]");

    By addANewCard = By.xpath("//span[text()='Add a New Card']");

    By creditCardNumber = By.id("dwfrm_billing_paymentMethods_creditCard_number");

    By selectMonth = By.xpath("//div[@class='form-row month label-removed required']");
    By monthText = By.xpath("//div[@class='selection-list visible']/div/ul/li/span[starts-with(text(),'')]");
    By selectExpiredYear = By.xpath("//div[@class='form-row year label-removed required']");
    By yeartext = By.xpath("//div[@class='selection-list visible']/div/ul/li/span[starts-with(text(),'')]");

    By securityCode = By.id("dwfrm_billing_paymentMethods_creditCard_cvn");
    By firstName = By.id("dwfrm_billing_billingAddress_addressFields_firstName");
    By lastName = By.id("dwfrm_billing_billingAddress_addressFields_lastName");

    By address1 = By.id("dwfrm_billing_billingAddress_addressFields_address1");
    By address2 = By.id("dwfrm_billing_billingAddress_addressFields_address2");
    By zipCode = By.id("dwfrm_billing_billingAddress_addressFields_postal");

    By cellNo = By.id("dwfrm_billing_billingAddress_addressFields_phone");


    By continueCheckout = By.xpath("//button[@id='billingContinueButton']");

    By shipToSchoola = By.xpath("//span[contains(text(),'Ship to My School')]");












    public void selectCreditCardOption(){

        scrollDown(200);
        clickThis(dropDownCardOption);
    }

    public void clickCreditCard(){
        clickThis(creditCard);
    }

    public void selectCard(){
        scrollDown(200);
        clickThis(cardType);
        clickThis(addANewCard);
    }

    public void enterCreditCardNumber(String number){
        type(creditCardNumber, number);
    }

    public void selectMonth(String month) {
        scrollDown(200);
        clickThis(selectMonth);
        List<WebElement> months = findElementsUsingFluentWait(monthText);
        for (WebElement exMontn: months){
            if (month.equals(exMontn.getText())){
                exMontn.click();
            }
        }
    }

    public void electYear(String year){
        clickThis(selectExpiredYear);
        List<WebElement> years = findElementsUsingFluentWait(yeartext);

        for (WebElement exYear : years){
            if (year.equals(exYear.getText())){
                exYear.click();
            }
        }
    }

    public void enterSecurityCode(String code){

        scrollDown(200);
        type(securityCode,code);
    }

    public void enterFirstName(String name){
        type(firstName,name);
    }

    public void enterLastName(String name){
        type(lastName,name);
    }
    public void enterAdd1(String add){
        type(address1, add);

    }
    public void enterAdd2(String add){
        type(address2, add);

    }

    public void enterZipCode(String zip){
        type(zipCode,zip);
    }

    public void enterCell(String cell){
        type(cellNo,cell);
    }

    public void selectShipToSchool(){
        clickThis(shipToSchoola);
    }

    public void clickContinueCheckout(){
        scrollDown(500);
        clickThis(continueCheckout);
    }
}
