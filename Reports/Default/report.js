$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Scholastic/AddANewCreditCard.feature");
formatter.feature({
  "line": 4,
  "name": "Add a new credit card",
  "description": "",
  "id": "add-a-new-credit-card",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 7641159353,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify user can place an order by adding a new credit card",
  "description": "",
  "id": "add-a-new-credit-card;verify-user-can-place-an-order-by-adding-a-new-credit-card",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \u0027Wmw@gmail.com\u0027 as my email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \u002712345ff\u0027 as my password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on sighin in button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I minimize bar",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I move to enter order button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select student flyer order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \u0027Harry\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \u00271V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \u00272\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \u00272V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \u00273\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \u00273V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \u00273\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click review button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click proceed",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on continue check out button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select credit card option",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select add a new card",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter \u00274111111111111111\u0027 as credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select \u002703\u0027 as month",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select year \u00272023\u0027 as year",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \u0027111\u0027 as security code",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter \u0027mmm\u0027 as first name",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter \u0027www\u0027 as ;ast name",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter \u00272278 Holland Ave\u0027 as address1",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter \u0027Apt#179\u0027 as address2",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter \u002710467\u0027 as zip code",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter \u00273333333333\u0027 as cell no",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click continue checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click submit",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I verify a thank you text displayed for the order",
  "keyword": "Then "
});
formatter.match({
  "location": "SfoMultipleOrderSD.clicksignIn()"
});
formatter.result({
  "duration": 764454765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wmw@gmail.com",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterEmail(String)"
});
formatter.result({
  "duration": 18724834104,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027MacBook-Pro-5.home\u0027, ip: \u0027fd4b:8d38:69ba:1:d1ca:24e7:b040:b5ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/0x/m7q9c0sx5vg...}, goog:chromeOptions: {debuggerAddress: localhost:49226}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f5e33804f9cec08e2be9f1d0f090d84c\n*** Element info: {Using\u003did, value\u003ddwfrm_login_username}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat Pages.BasePage$1.apply(BasePage.java:32)\n\tat Pages.BasePage$1.apply(BasePage.java:30)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat Pages.BasePage.findElementUsingFluentWait(BasePage.java:30)\n\tat Pages.BasePage.type(BasePage.java:57)\n\tat Pages.Scholastic.SighnInPage.typeEmail(SighnInPage.java:19)\n\tat StepDefinition.Scholastic.SfoMultipleOrderSD.enterEmail(SfoMultipleOrderSD.java:28)\n\tat ✽.And I enter \u0027Wmw@gmail.com\u0027 as my email(Scholastic/AddANewCreditCard.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345ff",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.minimizeNotificationBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.moveToEnterOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.selectSFO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickReviewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickOnProceedToCheckOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickProceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.clickOnContCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.selectCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.selectANewCard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4111111111111111",
      "offset": 9
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.enterCardNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 10
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.selectMonth(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2023",
      "offset": 15
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.selectYear(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 9
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.enterCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mmm",
      "offset": 9
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.enterFName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "www",
      "offset": 9
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.enterLName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2278 Holland Ave",
      "offset": 9
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.enterAdd1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Apt#179",
      "offset": 9
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.enterAdd2(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10467",
      "offset": 9
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.enterZipCode(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3333333333",
      "offset": 9
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.enteMobile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.clicklContinueCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.clickSubmit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.verifyThankYouText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 123034058,
  "status": "passed"
});
formatter.uri("Scholastic/SfoItemDeletion.feature");
formatter.feature({
  "line": 4,
  "name": "SFO Item deletion",
  "description": "",
  "id": "sfo-item-deletion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5116092306,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Verify user can delete item on Cart page",
  "description": "",
  "id": "sfo-item-deletion;verify-user-can-delete-item-on-cart-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \u0027Mitu@gmail.com\u0027 as my email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \u002712345ff\u0027 as my password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on sighin in button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I minimize bar",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I move to enter order button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select student flyer order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \u0027Harry\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \u00271V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \u00274\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \u00275V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \u00275\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \u0027John\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \u00272V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter \u00276\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u00277V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter \u00276\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter \u0027Michael\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter \u00273V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter \u002710\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \u00278V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter \u00279\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click review button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I get john subtotal",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "John Subquantity",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Total price",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Total Qty",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click remove button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click yes button to delete",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify item is deleted and quantities and items are updated",
  "keyword": "Then "
});
formatter.match({
  "location": "SfoMultipleOrderSD.clicksignIn()"
});
formatter.result({
  "duration": 155690203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mitu@gmail.com",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterEmail(String)"
});
formatter.result({
  "duration": 6916852792,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027MacBook-Pro-5.home\u0027, ip: \u0027fd4b:8d38:69ba:1:d1ca:24e7:b040:b5ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/0x/m7q9c0sx5vg...}, goog:chromeOptions: {debuggerAddress: localhost:49309}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9df3dec1bfa103c202b998c78a2849cf\n*** Element info: {Using\u003did, value\u003ddwfrm_login_username}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat Pages.BasePage$1.apply(BasePage.java:32)\n\tat Pages.BasePage$1.apply(BasePage.java:30)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat Pages.BasePage.findElementUsingFluentWait(BasePage.java:30)\n\tat Pages.BasePage.type(BasePage.java:57)\n\tat Pages.Scholastic.SighnInPage.typeEmail(SighnInPage.java:19)\n\tat StepDefinition.Scholastic.SfoMultipleOrderSD.enterEmail(SfoMultipleOrderSD.java:28)\n\tat ✽.And I enter \u0027Mitu@gmail.com\u0027 as my email(Scholastic/SfoItemDeletion.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345ff",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.minimizeNotificationBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.moveToEnterOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.selectSFO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickReviewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.johnSubTotalBeforeRemove()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.johnSubTotaQtylBeforeRemove()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.totalBeforeRemove()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.totalQtyBeforeRemove()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickRemove()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickYes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.verifyUpdateAfterRemoval()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 130546328,
  "status": "passed"
});
formatter.uri("Scholastic/SfoMultiStudentMultiBooks.feature");
formatter.feature({
  "line": 4,
  "name": "SFO multiple students with multiple books",
  "description": "",
  "id": "sfo-multiple-students-with-multiple-books",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2175958633,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify SFO with multiple students and multiple books and quantity",
  "description": "",
  "id": "sfo-multiple-students-with-multiple-books;verify-sfo-with-multiple-students-and-multiple-books-and-quantity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \u0027MAWA@gmail.com\u0027 as my email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \u002712345ff\u0027 as my password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on sighin in button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I minimize bar",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I move to enter order button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select student flyer order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \u0027Harry\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \u00271V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \u00274\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \u00275V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \u00275\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \u0027John\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \u00272V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter \u00276\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u00277V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter \u00276\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter \u0027Michael\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter \u00273V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter \u002710\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \u00278V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter \u00279\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I verify multiple student names, multiple items and multiple quantities are entered as expected",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I click review button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I verify Individual students total as expected to the calculation and all students total is same as SFO",
  "keyword": "Then "
});
formatter.match({
  "location": "SfoMultipleOrderSD.clicksignIn()"
});
formatter.result({
  "duration": 5400231,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027MacBook-Pro-5.home\u0027, ip: \u0027fd4b:8d38:69ba:1:d1ca:24e7:b040:b5ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/0x/m7q9c0sx5vg...}, goog:chromeOptions: {debuggerAddress: localhost:49395}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0eed8be811df15526709b9520c2acf0b\n*** Element info: {Using\u003dlink text, value\u003dSign In}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:376)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat Pages.BasePage$1.apply(BasePage.java:32)\n\tat Pages.BasePage$1.apply(BasePage.java:30)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat Pages.BasePage.findElementUsingFluentWait(BasePage.java:30)\n\tat Pages.BasePage.clickThis(BasePage.java:61)\n\tat Pages.Scholastic.LandingPage.clickSignIn(LandingPage.java:29)\n\tat StepDefinition.Scholastic.SfoMultipleOrderSD.clicksignIn(SfoMultipleOrderSD.java:22)\n\tat ✽.When I click on sign in button(Scholastic/SfoMultiStudentMultiBooks.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAWA@gmail.com",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12345ff",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.minimizeNotificationBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.moveToEnterOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.selectSFO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.verificationsOfMultipleNamesItemAndQuantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickReviewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.verifyMultipleStudentsTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 141732271,
  "status": "passed"
});
formatter.uri("Scholastic/SfoMultipleOrder.feature");
formatter.feature({
  "line": 4,
  "name": "Student Flyer Order",
  "description": "",
  "id": "student-flyer-order",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4141049940,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify teacher can add multiple books for a student in SFO",
  "description": "",
  "id": "student-flyer-order;verify-teacher-can-add-multiple-books-for-a-student-in-sfo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \u0027fname@gmail.com\u0027 as my email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \u002712345ff\u0027 as my password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on sighin in button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I minimize bar",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I move to enter order button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select student flyer order",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \u0027Harry\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \u00271V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \u00272\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \u00272V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \u00273\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \u00273V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \u00273\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I verify Student name, Item, and quantity are displayed as expected",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click review button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify Harry total and SFO total and total as expected of the calculation",
  "keyword": "And "
});
formatter.match({
  "location": "SfoMultipleOrderSD.clicksignIn()"
});
formatter.result({
  "duration": 199298505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fname@gmail.com",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterEmail(String)"
});
formatter.result({
  "duration": 4306060482,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027MacBook-Pro-5.home\u0027, ip: \u0027fd4b:8d38:69ba:1:d1ca:24e7:b040:b5ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/0x/m7q9c0sx5vg...}, goog:chromeOptions: {debuggerAddress: localhost:49414}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e8b5f9163f6886eb7524356ebda0fa7e\n*** Element info: {Using\u003did, value\u003ddwfrm_login_username}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat Pages.BasePage$1.apply(BasePage.java:32)\n\tat Pages.BasePage$1.apply(BasePage.java:30)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat Pages.BasePage.findElementUsingFluentWait(BasePage.java:30)\n\tat Pages.BasePage.type(BasePage.java:57)\n\tat Pages.Scholastic.SighnInPage.typeEmail(SighnInPage.java:19)\n\tat StepDefinition.Scholastic.SfoMultipleOrderSD.enterEmail(SfoMultipleOrderSD.java:28)\n\tat ✽.And I enter \u0027fname@gmail.com\u0027 as my email(Scholastic/SfoMultipleOrder.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345ff",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.minimizeNotificationBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.moveToEnterOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.selectSFO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.verifyNameItemQuantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickReviewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.verifyTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 115333110,
  "status": "passed"
});
formatter.uri("Scholastic/SfoYtoNonZeroTax.feature");
formatter.feature({
  "line": 4,
  "name": "SFO YTO orders",
  "description": "",
  "id": "sfo-yto-orders",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 4330955705,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify non-zero tax for SFO-YTO orders in the checkout for teacher with non-tax state school",
  "description": "",
  "id": "sfo-yto-orders;verify-non-zero-tax-for-sfo-yto-orders-in-the-checkout-for-teacher-with-non-tax-state-school",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \u0027MMM@gmail.com\u0027 as my email",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \u002712345ff\u0027 as my password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sighin in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I minimize bar",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I move to enter order button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select student flyer order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \u0027Harry\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \u00271V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \u00274\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter \u00275V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter \u00275\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \u0027John\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter \u00272V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u00276\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter \u00277V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter \u00276\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter \u0027Michael\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter \u00273V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \u002710\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter \u00278V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter \u00279\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on your teacher order",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on By Flyer",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I select item 4S5 and quantity \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select item 5S5 and quantity \u00273\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click review button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click proceed",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I verify estimated tax as greater than zero",
  "keyword": "Then "
});
formatter.match({
  "location": "SfoMultipleOrderSD.clicksignIn()"
});
formatter.result({
  "duration": 184579372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MMM@gmail.com",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterEmail(String)"
});
formatter.result({
  "duration": 3554340099,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027MacBook-Pro-5.home\u0027, ip: \u0027fd4b:8d38:69ba:1:d1ca:24e7:b040:b5ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/0x/m7q9c0sx5vg...}, goog:chromeOptions: {debuggerAddress: localhost:49500}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c337ce7ca5e7230b0bc36009dc5f1850\n*** Element info: {Using\u003did, value\u003ddwfrm_login_username}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat Pages.BasePage$1.apply(BasePage.java:32)\n\tat Pages.BasePage$1.apply(BasePage.java:30)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat Pages.BasePage.findElementUsingFluentWait(BasePage.java:30)\n\tat Pages.BasePage.type(BasePage.java:57)\n\tat Pages.Scholastic.SighnInPage.typeEmail(SighnInPage.java:19)\n\tat StepDefinition.Scholastic.SfoMultipleOrderSD.enterEmail(SfoMultipleOrderSD.java:28)\n\tat ✽.And I enter \u0027MMM@gmail.com\u0027 as my email(Scholastic/SfoYtoNonZeroTax.feature:11)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345ff",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.minimizeNotificationBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.moveToEnterOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.selectSFO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.clickOnYto()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.clickFlyer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.typeItem4S5Qty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.typeItem5S5Qty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickReviewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickOnProceedToCheckOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickProceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.verifyNonZeroTax()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 113358582,
  "status": "passed"
});
formatter.uri("Scholastic/SfoYtoZeroTax.feature");
formatter.feature({
  "line": 4,
  "name": "SFO YTO zero tax",
  "description": "",
  "id": "sfo-yto-zero-tax",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 2510636458,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify zero tax for SFO-YTO orders in the checkout for teacher with non-tax state school",
  "description": "",
  "id": "sfo-yto-zero-tax;verify-zero-tax-for-sfo-yto-orders-in-the-checkout-for-teacher-with-non-tax-state-school",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \u0027WTT@gmail.com\u0027 as my email",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \u002712345ff\u0027 as my password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on sighin in button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I minimize bar",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I move to enter order button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select student flyer order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \u0027Harry\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \u00271V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \u00274\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter \u00275V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \u00275\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \u0027John\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \u00272V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter \u00276\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter \u00277V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter \u00276\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter \u0027Michael\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter \u00273V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter \u002710\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter \u00278V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter \u00279\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on your teacher order",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on By Flyer",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select item 4S5 and quantity \u00272\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I select item 5S5 and quantity \u00273\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click review button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click proceed",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify estimated tax is zero",
  "keyword": "Then "
});
formatter.match({
  "location": "SfoMultipleOrderSD.clicksignIn()"
});
formatter.result({
  "duration": 24038914,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027MacBook-Pro-5.home\u0027, ip: \u0027fd4b:8d38:69ba:1:d1ca:24e7:b040:b5ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/0x/m7q9c0sx5vg...}, goog:chromeOptions: {debuggerAddress: localhost:49584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 402607b830edaee393fe9d7119295d3b\n*** Element info: {Using\u003dlink text, value\u003dSign In}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:376)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat Pages.BasePage$1.apply(BasePage.java:32)\n\tat Pages.BasePage$1.apply(BasePage.java:30)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:260)\n\tat Pages.BasePage.findElementUsingFluentWait(BasePage.java:30)\n\tat Pages.BasePage.clickThis(BasePage.java:61)\n\tat Pages.Scholastic.LandingPage.clickSignIn(LandingPage.java:29)\n\tat StepDefinition.Scholastic.SfoMultipleOrderSD.clicksignIn(SfoMultipleOrderSD.java:22)\n\tat ✽.When I click on sign in button(Scholastic/SfoYtoZeroTax.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "WTT@gmail.com",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12345ff",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.minimizeNotificationBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.moveToEnterOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.selectSFO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.clickOnYto()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.clickFlyer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.typeItem4S5Qty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "YtoSfoNonZeroTaxSD.typeItem5S5Qty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickReviewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickOnProceedToCheckOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickProceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "YtoSfoNonZeroTaxSD.verifyZeroTax()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 88839726,
  "status": "passed"
});
formatter.uri("Scholastic/SfoZeroTax.feature");
formatter.feature({
  "line": 4,
  "name": "SFO Zero Tax",
  "description": "",
  "id": "sfo-zero-tax",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 1945925762,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027MacBook-Pro-5.home\u0027, ip: \u0027fd4b:8d38:69ba:1:d1ca:24e7:b040:b5ac%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/0x/m7q9c0sx5vg...}, goog:chromeOptions: {debuggerAddress: localhost:49605}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f20908ea978c6fa93024fad0fff59fe5\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\n\tat DriverWrapper.Web.initDriver(Web.java:19)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify zero tax for only SFO order in the checkout",
  "description": "",
  "id": "sfo-zero-tax;verify-zero-tax-for-only-sfo-order-in-the-checkout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \u0027Wmw@gmail.com\u0027 as my email",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \u002712345ff\u0027 as my password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on sighin in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I minimize bar",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I move to enter order button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select student flyer order",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \u0027Harry\u0027 as student name",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \u00271V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \u00272\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter \u00272V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter \u00273\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \u00273V2\u0027 as item name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click add button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter \u00273\u0027 as item quantity",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click review button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click proceed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify tax amount is zero",
  "keyword": "Then "
});
formatter.match({
  "location": "SfoMultipleOrderSD.clicksignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Wmw@gmail.com",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12345ff",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickSignIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.minimizeNotificationBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.moveToEnterOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.selectSFO()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3V2",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterItem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickAddButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "SfoMultipleOrderSD.enterQuantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickReviewButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickOnProceedToCheckOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.clickProceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SfoMultipleOrderSD.verifyEstimatedTax()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 86228908,
  "status": "passed"
});
});