Feature: LendFlow Account Registration

    Scenario:Test to sign up an account for LendFLow
        Given the LendFlow registration website is launched
        And the LendFlow title is displayed
        And provide all details to sign up the account
            | FirstName | LastName | CompanyName | CompanyWebsite | CompanyEmail    | Phone       | Password |
            | Sab       | U        | Deca        | www.letcode.in | sab@letcode.com | 07405166051 | power123 |
        And accept the captcha
        And recheck the password
            | Password |
            | power123 |
        Then tap the Create Account