package Pages.Scholastic;

import Pages.BasePage;
import org.openqa.selenium.By;

public class ReviewPage extends BasePage {

    By harryTotal = By.className("std-total-price stdPriceTotal");
    By studentFlyerOrder = By.id("student_flyer_orders");

    By price1 = By.xpath("//tbody/tr[1]/td[5");
    By price2 = By.xpath("//tbody/tr[2]/td[5");
    By price3 = By.xpath("//tbody/tr[3]/td[5");

    By quantity1 = By.xpath("//tbody/tr[1]/td/input");
    By quantity2 = By.xpath("//tbody/tr[2]/td/input");
    By quantity3 = By.xpath("//tbody/tr[3]/td/input");

    By harryTotalInMultiple = By.className("//li[text()='Harry Total']/following-sibling::li[@class='std-total-price stdPriceTotal']");
    By harrypriceItem1 = By.xpath("//tbody/tr[@id='1V2']/td[5]/span[1]");
    By harrypriceItem2 = By.xpath("//tbody/tr[@id='5V2']/td[5]/span[1]");
    By harryQtyItem1 = By.xpath("//tbody/tr[@id='1V2']/td[6]/input[1]");
    By harryQtyItem2 = By.xpath("//tbody/tr[@id='5V2']/td[6]/input[1]");

    By johnTotalMultiple = By.xpath("//li[text()='John Total']/following-sibling::li[@class='std-total-price stdPriceTotal']");

    By johnPrice1 = By.xpath("//tbody/tr[@id='2V2']/td[5]/span[1]");
    By johnPrice2 = By.xpath("//tbody/tr[@id='7V2']/td[5]/span[1]");
    By johnQuantity1 = By.xpath("//tbody/tr[@id='2V2']/td[6]/input[1]");
    By johnQuantity2 = By.xpath("//tbody/tr[@id='7V2']/td[6]/input[1]");



    By michaeltotalMultiple = By.xpath("//li[text()='Michael Total']/following-sibling::li[@class='std-total-price stdPriceTotal']");

    By michaelPrice1 = By.xpath("//tbody/tr[@id='3V2']/td[5]/span[1]");
    By michaelPrice2 = By.xpath("//tbody/tr[@id='8V2']/td[5]/span[1]");
    By michaelQuantity1 = By.xpath("//tbody/tr[@id='3V2']/td[6]/input[1]");
    By michaelQuntity2= By.xpath("//tbody/tr[@id='8V2']/td[6]/input[1]");

    By allStudentstotal = By.xpath("//li[text()='TOTAL']/following-sibling::li[@class='std-total-price sfoSubTotalPrice']");

    By allStudentSfoTotal =By.id("student_flyer_orders");

    By proceedToCheckOut = By.id("dwfrm_cart_checkoutCart");

    By proceed = By.xpath("//div/form[@action='/s/rco-us/startcheckout']");

    By removeButton = By.xpath("//tbody/tr[@id='2V2']/td/span/i[@class='fa fa-times-circle remove']");
    By yesButton = By.xpath("//tbody/tr[@id='2V2']/td/span/div/div/button[text()='Yes']");

    By johnTotalQty = By.xpath("//li[text()='John Total']/following-sibling::li[@class='std-total-qty']/child::span[@class='total-qty stdPriceQty']");

    By allstudentsTotalQty = By.xpath("//li[text()='TOTAL']/following-sibling::li[@class='std-total-qty']/child::span[@class='total-qty sfoSubTotalQty']");







    public double harryTotal() throws InterruptedException{
      String harryText = textFromElement(harryTotal);
      double harryTotal = Double.parseDouble(harryText.substring(1));
      return harryTotal;

    }

    public double sfoTotal() throws InterruptedException{
        String sfoText = textFromElement(studentFlyerOrder);
        double total = Integer.parseInt(sfoText.substring(1));
        return total;

    }

    public double totalCalculation()throws InterruptedException{
       double priceOf1 =Double.parseDouble(textFromElement(price1).substring(1));
       int quantityOf1 = Integer.parseInt(textFromElement(quantity1));

        double priceOf2 =Double.parseDouble(textFromElement(price2).substring(1));
        int quantityOf2 = Integer.parseInt(textFromElement(quantity2));

        double priceOf3 =Double.parseDouble(textFromElement(price3).substring(1));
        int quantityOf3 = Integer.parseInt(textFromElement(quantity3));

        double total = (priceOf1*quantityOf1)+ (priceOf2*quantityOf2)+(priceOf3*quantityOf3);

        return total;

    }

    public double harryTotalMultiple(){
        double total= Double.parseDouble(textFromElement(harryTotalInMultiple).substring(1));
        return total;
    }

    public double calculationOfHarryTotal(){
        double priceOf1 = Double.parseDouble(textFromElement(harrypriceItem1).substring(1));
        double priceOf2 = Double.parseDouble(textFromElement(harrypriceItem2).substring(1));

        int quantity1 = Integer.parseInt(textFromElement(harryQtyItem1));
        int quantity2 = Integer.parseInt(textFromElement(harryQtyItem2));

        double total = (priceOf1*quantity1)+(priceOf2*quantity2);
        return total;
    }

    public double johnTotalMultiple(){
        double total = Double.parseDouble(textFromElement(johnTotalMultiple).substring(1));
        return total;
    }
    public double calculationOfJohnTotal(){
        double priceOf1 = Double.parseDouble(textFromElement(johnPrice1).substring(1));
        double priceOf2 = Double.parseDouble(textFromElement(johnPrice2).substring(1));

        int quantity1 = Integer.parseInt(textFromElement(johnQuantity1));
        int quantity2 = Integer.parseInt(textFromElement(johnQuantity2));

        double total = (priceOf1*quantity1)+(priceOf2*quantity2);
        return total;
    }

    public double michaelTotalMultiple(){
        double total = Double.parseDouble(textFromElement(michaeltotalMultiple).substring(1));
        return total;
    }
    public double calculationOfMichaelTotal(){
        double priceOf1 = Double.parseDouble(textFromElement(michaelPrice1).substring(1));
        double priceOf2 = Double.parseDouble(textFromElement(michaelPrice2).substring(1));

        int quantity1 = Integer.parseInt(textFromElement(michaelQuantity1));
        int quantity2 = Integer.parseInt(textFromElement(michaelQuntity2));

        double total = (priceOf1*quantity1)+(priceOf2*quantity2);
        return total;
    }

    public double allstudentTotal(){
        double total = Double.parseDouble(textFromElement(allStudentstotal).substring(1));
        return total;
    }

    public double allStudentSfo(){
        double sfoTotal = Double.parseDouble(textFromElement(allStudentSfoTotal).substring(1));
        return sfoTotal;
    }

    public void clickProceedToCheckOut(){
        scrollDown(500);
        clickThis(proceedToCheckOut);
    }

    public void clickProceed(){
        clickThis(proceed);
    }

    public double johnSubTotalPriceBeforeRemove(){
        double johnTotal = Double.parseDouble(textFromElement(johnTotalMultiple).substring(1));
        return johnTotal;
    }

    public int qtyJohnBeforeRemove(){
        int johnQty =  Integer.parseInt(textFromElement(johnTotalQty));
        return johnQty;
    }

    public double totalPriceBeforeRemove(){
        double total = Double.parseDouble(textFromElement(allStudentSfoTotal).substring(1));
        return total;
    }

    public int totalQtyAllBeforeRemove(){
        int totalQty = Integer.parseInt(textFromElement(allstudentsTotalQty));
        return totalQty;
    }

    public void clickRemove(){
        clickThis(removeButton);
    }

    public void clickYes(){
        clickThis(yesButton);
    }


    public double johnSubTotalPriceAfterRemove(){
        double johnTotal = Double.parseDouble(textFromElement(johnTotalMultiple).substring(1));
        return johnTotal;
    }

    public int qtyJohnAfterRemove(){
        int johnQty =  Integer.parseInt(textFromElement(johnTotalQty));
        return johnQty;
    }

    public double totalPriceAfterRemove(){
        double total = Double.parseDouble(textFromElement(allStudentSfoTotal).substring(1));
        return total;
    }

    public int totalQtyAllAfterRemove(){
        int totalQty = Integer.parseInt(textFromElement(allstudentsTotalQty));
        return totalQty;
    }








}
