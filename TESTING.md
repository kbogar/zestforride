# Table of Contents
* [Validator Testing](#validator-testing)
    * [HTML Code Validator](#html-code-validator)
    * [CSS Code Validator](#css-code-validator)
* [Lighthouse Testing](#lighthouse-testing)
* [Browsers And Responsivness Testing](#browser-and-responsivness-testing)
* [Manual Testing](#manual-testing)

# Testing

## Validator Testing

### HTML Code Validator
- All the HTML pages were tested with [W3C Validator](https://validator.w3.org/) and there were no errors found.

<details>

<summary>Click to view screenshots</summary>

**Sign Up Page**

![](/docs/signup.png)

**Sign In Page**

![](/docs/signin.png)

**Profiles Page**

![](/docs/profiles.png)

**PostDetail Page**

![](/docs/postdetail.png)

**Liked Page**

![](/docs/liked.png)

**Home Page**

![](/docs/home.png)

**Events Page**

![](/docs/events.png)

**EventDetail Page**

![](/docs/eventdetail.png)

**EditUsername Page**

![](/docs/editusername.png)

**EditProfile Page**

![](/docs/editprofile.png)

**EditPost Page**

![](/docs/editpost.png)

**EditEvent Page**

![](/docs/editevent.png)

**CreatePost Page**

![](/docs/createpost.png)

**CreateEvent Page**

![](/docs/createevent.png)

**Contact Us Page**

![](/docs/contactus.png)

**404 Page**

![](/docs/404page.png)

</details>

<br>

[Back to top](#table-of-contents)

### CSS Code Validator
- The CSS code were tested with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and there were no errors found.
- There are warnings due to vendor extension prefixes that I, unfortunately, could not solve, I tried to find a solution on Slack, Google, etc.. but due to time constraints, I did not manage.

**CSS test**

![](/docs/csstest.png)

[Back to top](#table-of-contents)

## Lighthouse Testing
- The project has been tested with [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) Lighthouse.
- Performance scores on Home, Events, and Liked pages were affected mainly because of image sizes from Cloudinary. Performance was not impacted by the same issue on Profile, Contact Us and the rest of the pages.
- In the future I will see to fix this issue, but because of time constraints, I could not investigate further at this time.

**Lighthouse**

![](/docs/lighthouse_test.PNG)

## Browser and Responsivness Testing
- The website is responsive and was tested on the following browsers with no known issues:
    - Mozilla Firefox
    - Google Chrome
    - Microsoft Edge

## Manual Testing
This project was tested manually several times throughout and after development.
- All links were checked on web pages external/internal and they are working.
- By clicking on the site logo gets you to the home page.
- All forms were checked, and user input validation was thoroughly performed to provide accurate feedback and ensure the correctness of submitted data on the back-end. Additionally, data was reliably displayed when editing content, maintaining its accuracy throughout the process.
- Unauthorized users attempting to access restricted URLs, such as comment creation without logging in or editing/deleting content belonging to others, are promptly redirected to prevent unauthorized actions.
- The app's sign-up, sign-in, and sign-out features were thoroughly tested to ensure smooth user access, while effectively distinguishing between content accessible to logged-in and logged-out users.
- The dropdown edit and delete functionality is appropriately restricted to display only for content owners, as expected.
- Registered users have access to the Contact Us page, by filling out the form they can contact the owner of the webapp.
- The liking posts, and following users are functioning as expected, but owners are not able to do this on their content.
- The interested on event is functioning as expected, with owners of events not being able to do this on their content.
- The users profile can only be updated and cannot be deleted.
- Thorough testing of all CRUD functionality confirms precise replication on the front-end, aligning perfectly with the corresponding operations carried out in the back-end.

[Back to top](#table-of-contents)