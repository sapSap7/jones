# Part B:

a: Security - the form lacks a few key security components. The card number input has no indication on input type, it lacks input masking or a format placeholder, therefore creating potential error inputting. In addition, there is no visible cvv/cvc field on the current page which is an issue for a potential fraud. When handling payment, a fraud prevention tool should be used, such as captcha, which in this case is not present and could lead to automated form submission or bot usage.
Usability - The layout of the page may be a bit confusing - the card number input is on the left, expiration date input is on the right, which disrupts the natural reading flow. The address fields indicate the user is solely in the United States, since there is a drop down menu for choosing a state, hence preventing international users from filling out the form successfully. Lack of information on payment amount - there is no currency, no description of the transaction and no way to verify the correct subtotal. Cancel button - strategically misplaced next to Continue button, subject to accidental deletion of form.

b: Test Cases

    TC-1: Successful payment with valid data
    Preconditions: User is on billing form page, HTTPS is active
    Steps:
        1. Select 'Visa' from card type
        2. Enter a valid 16-digit card number
        3. Enter a valid full name
        4. Select a valid expiration month and year
        5. Fill in a valid billing address, city, state, and postal code
        6. Click 'Continue'
    Expected result: User is redirected to a confirmation page with no errors.

    TC-2: Submit form with empty required field
    Preconditions: User is on billing form page
    Steps:
        1. Select 'Visa' from card type
        2. Enter a valid full name
        3. Fill in a valid billing address, city, state, and postal code
        4. Click 'Continue'
    Expected result: An error message appears on screen next to Card Number and     Expiration month and year fields. Form is not submitted.

    TC-3: International user can't complete the form
    Preconditions: User is located outside the US
    Steps:
        1. Select 'Visa' from card type
        2. Enter a valid 16-digit card number
        3. Enter a valid full name
        4. Select a valid expiration month and year
        5. Fill in a valid billing address, city, and postal code
        6. On the state/province drop down menu, look for a non US citizen option
    Expected result: No non US citizen option present, preventing form completion.

c: The most severe issue in the billing form that needs to be addressed is the missing cvv field. A simple solution would be to add a masked input field, paired with guidance on where to find the cvv/cvc number. Additionally, adding a Captcha would protect the form from automated bot submissions, which is also very critical when dealing with payment forms.
