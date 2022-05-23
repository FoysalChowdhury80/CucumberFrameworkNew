package Pages.Scholastic;

import Pages.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class SfoPage extends BasePage {

    By nameTextField = By.id("student-name");
    By itemTextField = By.id("item-number");
    By addButton = By.id("btn-add");

    By quantity1 = By.xpath("//tbody/tr[1]/td/input[1]");

    By quantity2 = By.xpath("//tbody/tr[2]/td/input[1]");
    By quantity3 = By.xpath("//tbody/tr[3]/td/input[1]");



   // By studenatName1 = By.xpath("//tbody/tr[1]/td[@class='studentName']");
   // By studenatName2 = By.xpath("//tbody/tr[2]/td[@class='studentName']");
   // By studenatName3 = By.xpath("//tbody/tr[3]/td[@class='studentName']");

    By studenatName1 = By.xpath("//tbody/tr[1]/td[2]");
    By studenatName2 = By.xpath("//tbody/tr[2]/td[2]");
    By studenatName3 = By.xpath("//tbody/tr[3]/td[2]");

    By item1 = By.xpath("//tbody/tr[1]/td[3]");
    By item2 = By.xpath("//tbody/tr[2]/td[3]");
    By item3 = By.xpath("//tbody/tr[3]/td[3]");

    By allNames = By.xpath("//tbody/tr/td[2]");

   // By quantity1 = By.xpath("//tbody/tr[1]/td[@class=item-qty']/input[@type='text']");
   // By quantity2 = By.xpath("//tbody/tr[2]/td[@class=item-qty']/input[@type='text']");
    //By quantity3 = By.xpath("//tbody/tr[3]/td[@class=item-qty']/input[@type='text']");

    By reviewButton = By.xpath("//button[@class='secondary']");

    By harry1 = By.xpath("//tbody/tr[6]/td[2]");
    By harry2 = By.xpath("//tbody/tr[5]/td[2]");
    By john1 = By.xpath("//tbody/tr[4]/td[2]");
    By john2 = By.xpath("//tbody/tr[3]/td[2]");
    By michael1 = By.xpath("//tbody/tr[2]/td[2]");
    By michael2 = By.xpath("//tbody/tr[1]/td[2]");

    By harryFirstItem = By.xpath("//tbody/tr[6]/td[3]");
    By harrySecondItem = By.xpath("//tbody/tr[5]/td[3]");
    By johnFirstItem = By.xpath("//tbody/tr[4]/td[3]");
    By johnSecondItem = By.xpath("//tbody/tr[3]/td[3]");
    By michaelFirstItem = By.xpath("//tbody/tr[2]/td[3]");
    By michaelSecondItem = By.xpath("//tbody/tr[1]/td[3]");
    By harryQty1= By.xpath("//tbody/tr[6]/td[8]/input[1]");
    By harryQty2= By.xpath("//tbody/tr[5]/td[8]/input[1]");
    By johnQty1= By.xpath("//tbody/tr[4]/td[8]/input[1]");
    By johnQty2= By.xpath("//tbody/tr[3]/td[8]/input[1]");
    By michaelQty1= By.xpath("//tbody/tr[2]/td[8]/input[1]");
    By michaelQty2= By.xpath("//tbody/tr[1]/td[8]/input[1]");


    By yourTeacherOrder = By.xpath("//li[@id='tab-yto']/a");
    By flyer = By.xpath("//div[@class='enter-method-toggle']/child::ul[@class='hidden-xs']/li/a");
    By item4S5 = By.xpath("//table[@id='yto-flyer-table']/tbody/tr[@data-product-id='4S5']/td/input[@data-itemid='4S5']");
    By item5S5 = By.xpath("//table[@id='yto-flyer-table']/tbody/tr[@data-product-id='5S5']/td/input[@data-itemid='5S5']");






    public void typeName(String name){
        clearText(nameTextField);
        type(nameTextField, name);
    }

    public void typeItem(String item){
        clearText(itemTextField);
        type(itemTextField, item);
    }

    public void clickButton(){
        clickThis(addButton);
    }

    /**

    public void typeQuantity1 (String iemeQty) throws InterruptedException{
        clearText(quantity1);
        type(quantity1,iemeQty);
    }
    public void typeQuantity2(String iemeQty)throws InterruptedException{
        clearText(quantity2);
        type(quantity2,iemeQty);
    }
    public void typeQuantity3(String iemeQty)throws InterruptedException{
        clearText(quantity3);
        type(quantity3,iemeQty);
    }
     */


    public String getName1(){
       return textFromElement(studenatName1);
    }

    public String getName2(){
        return textFromElement(studenatName2);
    }

    public String getName3(){
        return textFromElement(studenatName3);
    }


    public String getItem1(){ return textFromElement(item1); }
    public String getItem2(){
        return textFromElement(item2);
    }
    public String getItem3(){
        return textFromElement(item3);
    }

    public String geiQuantity1(){
      return textFromElement(quantity1);
    }
    public String geiQuantity2(){
        return textFromElement(quantity2);
    }
    public String geiQuantity3(){
        return textFromElement(quantity3);
    }

    public void clickReview(){
        clickThis(reviewButton);
    }

    public void enterQuantity(String qty) throws InterruptedException{
        clickThis(quantity1);
        clearText(quantity1);
        type(quantity1,qty);
    }

    public String getTextOfHarry1(){
        return textFromElement(harry1);
    }
    public String getTextOfHarry2(){
        return textFromElement(harry2);
    }
    public String getTextOfjohn1(){
        return textFromElement(john1);
    }
    public String getTextOfjohn2(){
        return textFromElement(john2);
    }
    public String getTextOfmichael1(){
        return textFromElement(michael1);
    }
    public String getTextOfMichael2(){
        return textFromElement(michael2);
    }

    public String getHarryFirstItem(){
        return textFromElement(harryFirstItem);
    }
    public String getHarrySecondItem(){
        return textFromElement(harrySecondItem);
    }
    public String getjohnFirstItem(){
        return textFromElement(johnFirstItem);
    }
    public String getjohnSecondItem(){
        return textFromElement(johnSecondItem);
    }
    public String getmichaelFirstItemt(){
        return textFromElement(michaelFirstItem);
    }
    public String getmichaelSecondItem(){
        return textFromElement(michaelSecondItem);
    }


    public String quantityHarry1(){
        return textFromElement(harryQty1);
    }
    public String quantityHarry2(){
        return textFromElement(harryQty2);
    }
    public String quantityJohn1(){
        return textFromElement(johnQty1);
    }
    public String quantityJohn2(){
        return textFromElement(johnQty2);
    }
    public String quantityMichael1(){
        return textFromElement(michaelQty1);
    }
    public String quantitymichael2(){
        return textFromElement(michaelQty2);
    }



    public void clickYto(){
        clickThis(yourTeacherOrder);
    }

    public void clickFlyer(){
        clickThis(flyer);
    }

    public void enterItem4S5(String data){
        clickThis(item4S5);
        type(item4S5,data);
    }
    public void enterItem5S5(String data){
        clickThis(item5S5);
        type(item5S5,data);
    }











}
