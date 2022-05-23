package StepDefinition.Scholastic;

import Pages.Scholastic.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.Collections;

public class SfoMultipleOrderSD {
    LandingPage lPage = new LandingPage();
    SighnInPage sPage = new SighnInPage();
    SfoPage sfPage = new SfoPage();
    ReviewPage rPage = new ReviewPage();
    CheckOutPage chPage = new CheckOutPage();



    @When("^I click on sign in button$")
    public void clicksignIn(){
        lPage.clickSignIn();

    }

    @And("^I enter '(.+)' as my email$")
    public void enterEmail(String email){
        sPage.typeEmail(email);


    }

    @And("^I enter '(.+)' as my password$")
    public void enterPassword(String pass){
        sPage.typePassword(pass);

    }

    @And("^I click on sighin in button$")
    public void clickSignIn(){
        sPage.clickSignIn();

    }
    @And("^I minimize bar$")
    public void minimizeNotificationBar(){
        lPage.clickOnHeader();

    }

    @And("^I move to enter order button$")
    public void moveToEnterOrder(){
        lPage.moveToEnterOrder();

    }

    @And("^I select student flyer order$")
    public void selectSFO(){
        lPage.clickSFO();

    }
    @And("^I enter '(.+)' as student name$")
    public void enterName(String name) {
        sfPage.typeName(name);

    }

    @And("^I enter '(.+)' as item name$")
    public void enterItem(String item){
        sfPage.typeItem(item);

    }

    @And("^I click add button$")
    public void clickAddButton(){
        sfPage.clickButton();

    }

    @And("^I verify Student name, Item, and quantity are displayed as expected$")
    public void verifyNameItemQuantity(){
        Assert.assertEquals("Harry",sfPage.getName1(),"Expected and actual are not same");
        Assert.assertEquals("Harry",sfPage.getName2(),"Expected and actual are not same");
        Assert.assertEquals("Harry",sfPage.getName3(),"Expected and actual are not same");

        Assert.assertEquals("3V2",sfPage.getItem1(),"Expected and actual are not same");
        Assert.assertEquals("2V2",sfPage.getItem2(),"Expected and actual are not same");
        Assert.assertEquals("1V2",sfPage.getItem3(),"Expected and actual are not same");

        Assert.assertEquals("2",sfPage.geiQuantity1(),"Expected and actual are not same");
        Assert.assertEquals("3",sfPage.geiQuantity2(),"Expected and actual are not same");
        Assert.assertEquals("3",sfPage.geiQuantity3(),"Expected and actual are not same");

    }
    @And("^I click review button$")
    public void clickReviewButton(){
        sfPage.clickReview();
    }

    @And("^I verify Harry total and SFO total and total as expected of the calculation$")
    public void verifyTotal() throws InterruptedException {
        Assert.assertEquals(rPage.harryTotal(),rPage.sfoTotal(),"two values are not same");
        Assert.assertEquals(rPage.harryTotal(),rPage.totalCalculation(),"Totals are not same");

    }

    @And("^I enter '(.+)' as item quantity$")
    public void enterQuantity(String quantity) throws InterruptedException {
        sfPage.enterQuantity(quantity);
    }

    @And("^I verify multiple student names, multiple items and multiple quantities are entered as expected$")
    public void verificationsOfMultipleNamesItemAndQuantity(){
        Assert.assertEquals("Harry", sfPage.getTextOfHarry1(),"Names are not same");
        Assert.assertEquals("Harry", sfPage.getTextOfHarry2(), "Names are not same");
        Assert.assertEquals("John", sfPage.getTextOfjohn1(),"Names are not same");
        Assert.assertEquals("John", sfPage.getTextOfjohn2(), "Names are not same");
        Assert.assertEquals("Michael", sfPage.getTextOfmichael1(),"Names are not same");
        Assert.assertEquals("Michael", sfPage.getTextOfMichael2(), "Names are not same");


        Assert.assertEquals("1V2", sfPage.getHarryFirstItem(), "Items are not same");
        Assert.assertEquals("5V2", sfPage.getHarrySecondItem(), "Items are not same");
        Assert.assertEquals("2V2", sfPage.getjohnFirstItem(), "Items are not same");
        Assert.assertEquals("7V2", sfPage.getjohnSecondItem(), "Items are not same");
        Assert.assertEquals("3V2", sfPage.getmichaelFirstItemt(), "Items are not same");
        Assert.assertEquals("8V2", sfPage.getmichaelSecondItem(), "Items are not same");


        Assert.assertEquals("4", sfPage.quantityHarry1(), "Quantities are not same");
        Assert.assertEquals("5", sfPage.quantityHarry2(), "Quantities are not same");
        Assert.assertEquals("6", sfPage.quantityJohn1(), "Quantities are not same");
        Assert.assertEquals("6", sfPage.quantityJohn2(), "Quantities are not same");
        Assert.assertEquals("10", sfPage.quantityMichael1(), "Quantities are not same");
        Assert.assertEquals("9", sfPage.quantitymichael2(), "Quantities are not same");


    }

    @Then("^I verify Individual students total as expected to the calculation and all students total is same as SFO$")
    public void verifyMultipleStudentsTotal(){
        Assert.assertEquals(rPage.harryTotalMultiple(),rPage.calculationOfHarryTotal(),"Two total are not same");
        Assert.assertEquals(rPage.johnTotalMultiple(),rPage.calculationOfJohnTotal(),"Two totals are not same");
        Assert.assertEquals(rPage.michaelTotalMultiple(),rPage.calculationOfMichaelTotal(),"Two totals are not same");
        Assert.assertEquals(rPage.allstudentTotal(),rPage.allStudentSfo(),"Two totals are not same");
    }

    @And("^I click proceed to checkout$")
    public void clickOnProceedToCheckOut(){
        rPage.clickProceedToCheckOut();
    }
    @And("^I click proceed$")
    public void clickProceed(){
        rPage.clickProceed();
    }

    @Then("^I verify tax amount is zero$")
    public void verifyEstimatedTax(){
        Assert.assertEquals(0.0,chPage.estimatedTax(),"two values are not same");
    }

    @And("^I get john subtotal$")
    public double johnSubTotalBeforeRemove(){
        return rPage.johnSubTotalPriceBeforeRemove();

    }
    @And("^John Subquantity$")
    public int johnSubTotaQtylBeforeRemove(){

        return rPage.qtyJohnBeforeRemove();

    }
    @And("^Total price$")
    public double totalBeforeRemove(){

        return rPage.totalPriceBeforeRemove();

    }
    @And("^Total Qty$")
    public int totalQtyBeforeRemove(){

       return rPage.totalQtyAllBeforeRemove();
    }



    @And("^I click remove button$")
    public void clickRemove(){
        rPage.clickRemove();
    }

    @And("^I click yes button to delete$")
    public void clickYes(){
        rPage.clickYes();
    }

    @Then("^I verify item is deleted and quantities and items are updated$")
    public void verifyUpdateAfterRemoval(){

        //System.out.println("JSA"+rPage.johnSubTotalPriceAfterRemove());
        //System.out.println("JSQA"+rPage.qtyJohnBeforeRemove());
       // System.out.println("TA"+rPage.totalPriceAfterRemove());
       // System.out.println("TQ"+rPage.totalQtyAllAfterRemove());

        Assert.assertNotEquals(johnSubTotalBeforeRemove(),rPage.johnSubTotalPriceAfterRemove(),"Not updated");
        Assert.assertNotEquals(johnSubTotaQtylBeforeRemove(),rPage.qtyJohnAfterRemove(),"not updated");
        Assert.assertNotEquals(totalBeforeRemove(),rPage.totalPriceAfterRemove(),"not updated");
        Assert.assertNotEquals(totalQtyBeforeRemove(),rPage.totalQtyAllAfterRemove(),"not updated");



    }









}
