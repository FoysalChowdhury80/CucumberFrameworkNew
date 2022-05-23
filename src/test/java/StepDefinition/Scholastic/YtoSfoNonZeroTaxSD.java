package StepDefinition.Scholastic;

import Pages.Scholastic.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

import java.util.Collections;

public class YtoSfoNonZeroTaxSD {

    SfoPage sfPage = new SfoPage();
    CheckOutPage chPage = new CheckOutPage();

    ShippingAndPaymentPage shPage = new ShippingAndPaymentPage();
    SubmitPage sPage = new SubmitPage();
    FinalCheckOutPage fchPage = new FinalCheckOutPage();


    @And("^I click on your teacher order$")
    public void clickOnYto(){
        sfPage.clickYto();
    }
    @And("^I click on By Flyer$")
    public void clickFlyer(){
        sfPage.clickFlyer();
    }
    @And("^I select item 4S5 and quantity '(.+)'$")
    public void typeItem4S5Qty(String itemQty){
        sfPage.enterItem4S5(itemQty);
    }

    @And("^I select item 5S5 and quantity '(.+)'$")
    public void typeItem5S5Qty(String itemQty){
        sfPage.enterItem5S5(itemQty);
    }

    @Then("^I verify estimated tax as greater than zero$")
    public void verifyNonZeroTax(){
        Assert.assertTrue(chPage.isEstimatedGreaterThanZero(),"Tax amount is not greater than zero");
    }


    @Then("^I verify estimated tax is zero$")
    public void verifyZeroTax(){
        Assert.assertTrue(chPage.isEstimatedTaxEqualToZero(), "Estimated tax is not zero");
    }

    @And("^I click on continue check out button$")
    public void clickOnContCheckout(){
        chPage.clickContinueCheckOut();
    }


    @And("^I select credit card option$")
    public void selectCard(){
        shPage.selectCreditCardOption();
        shPage.clickCreditCard();

    }

    @And("^I select add a new card$")
    public void selectANewCard(){
        shPage.selectCard();
    }


    @And("^I enter '(.+)' as credit card number$")
    public void enterCardNumber(String data){
        shPage.enterCreditCardNumber(data);
    }


    @And("^I select '(.+)' as month$")
    public void selectMonth(String data){
        shPage.selectMonth(data);
    }

    @And("^I select year '(.+)' as year$")
    public void selectYear(String year){
        shPage.electYear(year);
    }

    @And("^I enter '(.+)' as security code$")
    public void enterCode(String code){
        shPage.enterSecurityCode(code);
    }

    @And("^I enter '(.+)' as first name")
    public void enterFName(String name){
        shPage.enterFirstName(name);
    }

    @And("^I enter '(.+)' as ;ast name$")
    public void enterLName(String name){
        shPage.enterLastName(name);
    }

    @And("^I enter '(.+)' as address1$")
    public void enterAdd1(String add){
        shPage.enterAdd1(add);
    }

    @And("^I enter '(.+)' as address2$")
    public void enterAdd2(String add){
        shPage.enterAdd2(add);
    }

    @And("^I enter '(.+)' as zip code$")
    public void enterZipCode(String zip){
        shPage.enterZipCode(zip);
    }

    @And("^I enter '(.+)' as cell no$")
    public void enteMobile(String mob){
        shPage.enterCell(mob);
    }

    @And("^I select ship to school option$")
    public void selectShipToSchool(){
        shPage.selectShipToSchool();
    }


    @And("^I click continue checkout button$")
    public void clicklContinueCheckout(){
        shPage.clickContinueCheckout();
    }

    @And("^I click submit$")
    public void clickSubmit(){
        sPage.clickSubmit();
    }

    @Then("^I verify a thank you text displayed for the order$")
    public void verifyThankYouText(){
        Assert.assertEquals("Thank You for Your Order!",fchPage.getText(),"Two texts are not same");
    }



}
