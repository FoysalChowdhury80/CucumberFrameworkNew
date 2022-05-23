package StepDefinition.Scholastic;

import Pages.Scholastic.LandingPageTest;
import cucumber.api.java.en.When;

public class Test1SD {

    LandingPageTest lpT = new LandingPageTest();


    @When("^I enter name as '(.+)'$")
    public void enterName(String name){
        lpT.writeName(name);

    }
}
