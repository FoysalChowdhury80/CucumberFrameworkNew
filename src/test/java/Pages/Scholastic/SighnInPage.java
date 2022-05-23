package Pages.Scholastic;

import Pages.BasePage;
import org.openqa.selenium.By;

public class SighnInPage extends BasePage {

    By emailTextField = By.id("dwfrm_login_username");
    By passwordTextField = By.id("dwfrm_login_password");
    By sighnInButton = By.id("loginModalBtn");







    public void typeEmail(String email){
        type(emailTextField,email);
    }

    public void typePassword(String password){
        type(passwordTextField,password);
    }

    public void clickSignIn(){
        clickThis(sighnInButton);
    }


}
