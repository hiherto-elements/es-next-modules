
import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { parse } from '../parse.js';


let featureText = `Feature:
As a provider
I want need to provide a way to identify users
In order to track the author of documentation and comments

Scenario: An anonymous user requests an iDoc identity with valid details
  Given I am not identified
  When I go to the new account page
  And I enter the required account details
  And I press "Register"
  Then I should see "Sign-up successful"
  And I should receive an email

Scenario: A registered user confirms their email address
  Given I have created an account
  Then I should receive an email
  When I open the email
  Then I should see "confirm" in the email body
  When I follow "confirm" in the email
  Then I should see "Account activated"

Scenario: An unidentified user identifies with credentials for an activated account
  Given I have created an account
  And I have activated my account
  When I go to the account logon page
  And I enter my account details
  And I press "Log in"
  Then I should be on the home page
  And I should see "Logged in successfully"

Scenario: An unidentified user identifies with credentials for an inactive account
  Given I have created an account
  And I have not activated my account
  When I go to the account logon page
  And I enter my account details
  And I press "Log in"
  Then I should be on the user session page
  And I should see "Your account is not activated"
  And I should see "Email"
  And I should see "Password"

Scenario: An anonymous user requests an iDoc identity with valid details
  Given I am not identified
  When I go to the new account page
  And I enter the required account details
  And I press "Register"
  Then I should see "Sign-up successful"
  And I should receive an email

Scenario: A registered user confirms their email address
  Given I have created an account
  Then I should receive an email
  When I open the email
  Then I should see "confirm" in the email body
  When I follow "confirm" in the email
  Then I should see "Account activated"

Scenario: An unidentified user identifies with credentials for an activated account
  Given I have created an account
  And I have activated my account
  When I go to the account logon page
  And I enter my account details
  And I press "Log in"
  Then I should be on the home page
  And I should see "Logged in successfully"

Scenario: An unidentified user identifies with credentials for an inactive account
  Given I have created an account
  And I have not activated my account
  When I go to the account logon page
  And I enter my account details
  And I press "Log in"
  Then I should be on the user session page
  And I should see "Your account is not activated"
  And I should see "Email"
  And I should see "Password"

Scenario: An unidentified user identifies with credentials for an unknown account
  Given I have not created an account
  When I go to the account logon page
  And I enter my account details
  And I press "Log in"
  Then I should be on the user session page
  And I should see "Username or password was incorrect"
  And I should see "Email"
  And I should see "Password"

Scenario: An identified user request an iDoc identity
  Given I have created an account
  And I have activated my account
  And I have logged in to my account
  When I go to the new account page
  Then I should be on the home page
  And I should see "You already have an account"

Scenario: An identified user attempts to re-identify
  Given I have created an account
  And I have activated my account
  And I have logged in to my account
  When I go to the account logon page
  Then I should be on the home page
  And I should see "You are already logged in"not created an account
  When I go to the account logon page
  And I enter my account details
  And I press "Log in"
  Then I should be on the user session page
  And I should see "Username or password was incorrect"
  And I should see "Email"
  And I should see "Password"

Scenario: An identified user request an iDoc identity
  Given I have created an account
  And I have activated my account
  And I have logged in to my account
  When I go to the new account page
  Then I should be on the home page
  And I should see "You already have an account"

Scenario: An identified user attempts to re-identify
  Given I have created an account
  And I have activated my account
  And I have logged in to my account
  When I go to the account logon page
  Then I should be on the home page
  And I should see "You are already logged in"
`;
parse(featureText)