package Pages.Facebook;

import Pages.BasePage;

public class HomePageFacebook extends BasePage {

    public void allowsAlertForNotication(){
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        switchToAlert();
        clickPositiveOnAlert();
    }
}
