# Zest For Ride 

![](/docs/Am%20I%20Responsive.png)

Zest For Ride - the social media web app for motorcycle enthusiasts. Connect, share, and explore with passionate bikers worldwide. Personalize your profile, join comments on bikes, events, and mods, and track and share your epic rides.

Zest For Ride provides an interactive platform to create, view, edit, and delete posts and events. The user who wishes to share an event or post can upload information about them, the user can like and comment on posts, the user can be interested in events, and the user can follow other users.

The overall structure of the project was based on Code Institutes [Moments](https://github.com/Code-Institute-Solutions/moments) walkthrough, with additional custom components added by me.

- [Deployed Zest For Ride API](https://zest-for-ride-bf40c62cc6cb.herokuapp.com/)
- [Deployed Zest For Ride Frontend webapp](https://zestforride-51d93abad130.herokuapp.com/)
- [Backend Repository](https://github.com/kbogar/drf-api-zestforride)

# Table of Contents
* [Entity Relationship Diagram](#entity-relationship-diagram)
* [Agile Methodology](#agile-methodology)
* [User Experience UX](#user-experience-ux)
    * [Wireframes](#wireframes)
    * [User Stories](#user-stories)
    * [Color Scheme](#color-scheme)
    * [Typography](#typography)
    * [Icons](#icons)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Future Features](#future-features)
* [Technologies and Tools Used](#technologies-and-tools-used)
* [Testing](#testing)
* [Bugs](#bugs)
* [Deployment](#deployment)
* [Credits](#credits)

# Entity Relationship Diagram
Before starting the project, I conducted thorough research to define the data models needed for the application. This involved identifying entities, relationships, and creating a comprehensive list of fields and actions required for the app to function correctly. With this information, I built the necessary models, ensuring the application meets its goals.

![](/docs/erd.png)

# Agile Methodology
- This project was developed using the agile methodology and version control on GitHub. Tasks were tracked and managed through Github's issue-tracking system, allowing for rapid progress and continued progress tracking.
- The User Stories were organized by must haves, should haves, as well as required backend API functionality labels.
## [User Stories Board](https://github.com/users/kbogar/projects/5)
![](/docs/user_stories.png)

## [Issues](https://github.com/kbogar/zestforride/issues)
![](/docs/issues.png)

Agile Methodology proved invaluable for my project. Breaking it into smaller tasks helped me track progress, stay on schedule, and adapt plans efficiently. The satisfaction of completing User Stories was a great motivator.

[Back to top](#table-of-contents)

# User Experience (UX)

## Wireframes
Wireframes were initially created on paper to help decide the most important aspects of the web app.
Afterward, the wireframes for this site were created in [Balsamiq](https://balsamiq.com/) software.

The wireframes for this project could differ from the final design due to modifications made during the development process.

<details>

<summary>Wireframes</summary>

**Mobile logged out Home, Sign in, Sign up**

![](/docs/New%20Wireframe%201.png)

**Mobile logged in Home, Events, Contact us**

![](/docs/New%20Wireframe%202.png)

**Mobile logged in Profile, Add post, Add event**

![](/docs/New%20Wireframe%205.png)

**Desktop logged out Home, Sign in, Sign up**

![](/docs/New%20Wireframe%203.png)

**Desktop logged in Home, Events**

![](/docs/New%20Wireframe%204.png)

**Desktop logged in Contact us, Profile**

![](/docs/New%20Wireframe%207.png)

</details>

## User Stories
Every User Story was recorded in GitHub Issues, and the goal is to establish what user would expect from interacting with the website.

- As a user I can view a navbar from every page so that I can navigate easily between pages
- As a user I can navigate through pages quickly so that I can view content smoothly without page refresh
- As a user I can create a new account so that I can access all the features for signed-up users
- As a user I can sign in to the app so that I can access functionality for logged-in users
- As a user I can tell if I am logged in or not so that I can log in if I need to
- As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
- As a logged-out user I can see sign-in and sign-up options so that I can sign in or sign up
- As a user I can view users avatars so that I can easily identify users of the application
- As a logged-in user I can create posts so that I can share my photos with other users
- As a logged-in user I can view the details of a single post so that I can learn more about it
- As a logged-in user I can like a post so that I can show my support for the posts that interest me
- As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
- As a user I can search for posts with keywords so that I can find the posts and user profiles I am most interested in
- As a logged-in user I can view the posts I liked so that I can find the posts I enjoy the most
- As a logged-in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
- As a user I can keep scrolling through the posts on the site, that are loaded for me automatically so that I don't have to click on the next page
- As a logged-in user I can view the post page so that I can read the comments about the post.
- As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
- As a logged-in user I can add comments to a post so that I can share my thoughts about the post
- As a logged-in user I can see how long ago a comment was made so that I know how old the comment is
- As a logged-in user I can read comments on posts so that I can read what other users think about the posts
- As an owner of a comment I can delete my comment so that I can control the removal of my comment from the application
- As an owner of a comment I can edit my comment so that I can update my existing comment
- As a logged-in user I can view other user's profiles so that I can see their posts and learn more about them
- As a user I can see a list of the most followed profiles so that I can see which profiles are popular
- As a logged-in user I can view statistics about a specific user: bio, number of posts, events, follows and users followed so that I can learn more about them
- As a logged-in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
- As a logged-in user I can view all the posts by a specific user so that I can catch up on their latest posts, events or decide I want to follow them
- As a logged-in user I can edit my profile so that I can change my profile picture and bio
- As a logged-in user I can update my username and password so that I can change my display name and keep my profile secure
- As a logged-in user I can create events so that I can organize motorcycle gatherings
- As an owner of the event I can edit my event so that I can change and update the event details
- As an owner of the event I can delete it so that I can control the removal of my event from the application
- As a logged-in user I can submit a contact form so that I can keep in touch with the app owner for any inquires
- As a logged-in user I can add interest to the event post so that I can display my interest in an event

## Color Scheme
Using [ColorSpace](https://mycolor.space/), I decided to use a mix of Classy, Highlight and Shades palette for this website, to achieve a simple, minimalistic design elements.

![](/docs/colorspace2.png)

![](/docs/colorspace3.png)

![](/docs/colorspace4.png)

## Typography
[Google Fonts](https://fonts.google.com/) Oswald and Sans Serif were used to create this website.

## Icons
[Font Awesome](https://fontawesome.com/) icons were used throughout the website.

[Back to top](#table-of-contents)

# Features
## Existing Features

### Header & Navigation
- Logo with a link which brings the user to the home page. Navigation menu consisting of links to other pages, and they change depends if the user is logged in or not.
- In order to make navigation easier for the user, the navigation bar is in a fixed position, it remains at the top of the page as the user scrolls down.
- The navigation bar appears in the same format on all pages.

<details>

<summary>Click to view screenshots</summary>

**Navigation Mobile logged out**

![](/docs/nav_mobile.png)

**Navigation Desktop logged out**

![](/docs/nav_desktop.png)

**Navigation Mobile logged in**

![](/docs/nav_mobile_loggedin.png)

**Navigation Desktop logged in**

![](/docs/nav_desktop_loggedin.png)

</details>

<br>

### Sign Up Page
- The sign up page can be accessed through the navigation bar only if the user is logged out.
- This page contains a form to be completed in order to create an account and sign up.
- The sign up form includes a message if the user already have an account then there is a sign in link also.

<details>

<summary>Click to view screenshots</summary>

**Sign Up Page desktop**

![](/docs/signup_desktop.png)

**Sign Up Page Mobile**

![](/docs/signup_mobile.png)

</details>

<br>

### Sign In Page
- The sign in page can be accessed through the navigation bar only if the user is logged out.
- This page contains a form to be completed in order to sign in.
- The sign in form includes a message if the user does not yet have an account then there is a sign up link also.

<details>

<summary>Click to view screenshots</summary>

**Sign In Page desktop**

![](/docs/signin_desktop.png)

**Sign In Page Mobile**

![](/docs/signin_mobile.png)

</details>

<br>

### Home Page
- The homepage consists of a section with user's posts, a section with the Most followed profiles, a search bar, and a navbar with an Add post and Add event button.
- The posts show the user's username, profile image, date when it was created, the title and content, and also a user interaction of likes and comments count.
- The search bar is allowing the user to easily search the existing posts by username, title and content.
- The most followed profiles section is allowing users to see other users and gives them a possibility to follow and unfollow users and to visit their profiles.

<details>

<summary>Click to view screenshots</summary>

**Home Page Mobile**

![](/docs/home_mobile.png)

**Home Page Desktop**

![](/docs/home_desktop.png)

</details>

<br>

### Post Page
- The post detail page gives the ability to create comments if the user is logged in and to edit or delete a post if a user is the owner.

<details>

<summary>Click to view screenshots</summary>

**Post Details Page Mobile**

![](/docs/postdetail_mobile.png)

**Post Details Page Desktop**

![](/docs/postdetail_desktop.png)

**Post Details Menu**

![](/docs/postmenu_mobile.png)

**Post Edit**

![](/docs/postedit_desktop.png)

</details>

<br>

### Events Page
- The events page showcases events created by users.
- It consists of the user's username, profile image, date created, event details - a title, date and time of the event, description, and also a user interaction of interested count.
- The search bar is allowing the user to easily search the existing events by username, title and content.
- The most followed profiles section is allowing users to see other users and gives them a possibility to follow and unfollow users and to visit their profiles.

<details>

<summary>Click to view screenshots</summary>

**Post Details Page Mobile**

![](/docs/events_desktop.png)

</details>

<br>

### Event Page
- The event detail page gives the ability for the owner to edit or delete the event.

<details>

<summary>Click to view screenshots</summary>

**Event Details Menu**

![](/docs/eventmenu_desktop.png)

**Edit Event**

![](/docs/editevent_desktop.png)

</details>

<br>

### Liked Page
- The liked page contains the most liked posts.

<details>

<summary>Click to view screenshots</summary>

**Liked Page Desktop**

![](/docs/liked_desktop.png)

</details>

<br>

### Contact Us Page
- The contact us page can be accessed through the navigation bar if the user is logged in.
- The contact form includes these fields; name, email, subject, message. 
- The form is submitted via Submit button at the bottom of the form.
- After submitting the form successfully, a thank you message is displayed on the screen giving the user feedback about their sent message.

<details>

<summary>Click to view screenshots</summary>

**Contact Us Page Desktop**

![](/docs/contactus_desktop.png)

**Contact Us Page Mobile**

![](/docs/contactus_mobile.png)

**Thank You Message**

![](/docs/confirm_desktop.png)

</details>

<br>

### Profile Page
- The profile page can be accessed through the navigation bar if the user is the owner, or other users by clicking on their profile images.
- It consists of the user's username, profile image, bio, and user stats - number of events, posts, followers, and following.
- It also consists of posts or events created by the user.
- Follow/Unfollow button if the user is not the profile owner.
- Dropdown menu to edit profile, change username and password if the user is the profile owner. 

<details>

<summary>Click to view screenshots</summary>

**Profile Page Desktop**

![](/docs/profile_desktop.png)

</details>

<br>

## Future Features
- The ability to leave comments on events.
- The ability to se who is interested on events.
- Notification when the user receives a new follower, a like and comment on posts.

[Back to top](#table-of-contents)

# Technologies and Tools Used

## Languages Used
- [HTML5](https://www.w3schools.com/html/)
- [CSS3](https://www.w3schools.com/css/css_intro.asp)
- [JavaScript](https://www.w3schools.com/js/)

## Frameworks, Libraries & Apps Used
- [React](https://legacy.reactjs.org/docs/getting-started.html) - was used to create this web app.
- [React Bootstrap](https://react-bootstrap.github.io/) - for the styling and responsivnes of the site.
- [GitPod](https://www.gitpod.io/) - Used to create and edit the website.
- [GitHub](https://github.com/) - Cloud based git repository used.
- [GitBash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) - Terminal used to push changes to the GitHub repository.
- [Cloudinary](https://cloudinary.com/) - Used to host all static files and images.
- [Heroku](https://www.heroku.com) - Used to deploy the website.
- [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Test responsiveness and debug.
- [Balsamiq](https://balsamiq.com/wireframes/) - Used to create the wireframes for the project.
- [W3C Validator](https://validator.w3.org/) - Used to validate HTML code.
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - A validator which checks the validity of CSS code.
- [ElephantSQL](https://www.elephantsql.com/) - PostgreSQL database hosting service.
- [Google Fonts](https://fonts.google.com/) - Fonts
- [Font Awesome](https://fontawesome.com/) - Icons
- [Color Space](https://mycolor.space/) - Colour Palette Generator
- [Pexels](https://www.pexels.com/) - Stock photos
- [Unsplash](https://unsplash.com/) - Stock photos
- [Favicon](https://www.favicon.cc/) - for favicon
- [Am I Responsive](https://ui.dev/amiresponsive) - for responsive visuals of the website.

## Components
Several components have been implemented in this project which allow for reuse across the web app.
- axiosDefault.js - for backend API communication.
- Asset.js, Avatar.js - for loading spinner and user avatar.
- MoreDropdown.js - to allow users to edit or delete their profile, posts, events.
- CurrentUserContext.js - check for the user logged in status to determine which functionality is available for the user.
- ProfileDataContext.js - ad functionality to follow/unfollow users.
- useClickOutsideToggle.js - navbar functionality for automatic collapse upon mouse click.
- useRedirect.js - redirect a user to another page if they are not authorized to be on the page they are trying to access
- utils.js - add functionality to components that make use of Infinite Scroll.

[Back to top](#table-of-contents)

# Testing
All testing information can be found in [TESTING.md](https://github.com/kbogar/zestforride/blob/main/TESTING.md)

# Bugs
I encountered a few errors during the coding of my project and there were fixed throughout the development.

## Solved
- Trailing slash on void elements issue at HTML validator. Solved by deleting all the backslashes on index.html.

<details>

<summary>Click to view screenshots</summary>

![](/docs/html_validator_error.png)

</details>

<br>

- I had an issue when I started to connect the frontend React app with the backend API at the Profile detail page, the events count didn't work correctly. The problem was I forgot add the events_count to API, so I solved the issue by adding it to the correct app classes.

<details>

<summary>Click to view screenshots</summary>

![](/docs/events%20count%20issue.PNG)

![](/docs/events%20count%20issue2.png)

![](/docs/events%20count%20issue3.png)

![](/docs/events%20count%20issue4.png)

</details>

<br>

## Unsolved
At the moment there are no known bugs left to solve.

[Back to top](#table-of-contents)

# Deployment
This project is deployed using [Heroku](https://www.heroku.com).

The steps for deploying through Heroku are as follows:
- Go to Heroku website and log in.
- Go to Dashboard, click on 'New' and 'Create New App'.

<details>

<summary>Click to view screenshots</summary>

![](/docs/heroku1.png)

</details>

<br>

- Add name for your app and choose region.
- Then click 'Create app'.

<details>

<summary>Click to view screenshots</summary>

![](/docs/heroku2.png)

</details>

<br>

- Navigate to 'Deploy' tab and choose 'Connect to Github'.
- Search for your repository that you want to deploy.
- Click 'Connect'.

<details>

<summary>Click to view screenshots</summary>

![](/docs/heroku3.png)

</details>

<br>

- You can choose if you want manual or automatic deployment.
- Choose Main Branch and click 'Deploy Branch'.

<details>

<summary>Click to view screenshots</summary>

![](/docs/heroku4.png)

</details>

<br>

- When the deployment is succesfully finished,
- Click 'Open app'.

<details>

<summary>Click to view screenshots</summary>

![](/docs/heroku5.png)

</details>

<br>

## Forking the GitHub Repository
Forking allows you to view and edit the code without affecting the original repository.
- Navigate to GitHub repository.
- Click on 'Fork' in the top right corner.
- This will take you to your own repository to fork with the same name as the original branch.

## Creating Local Clone
Steps to create a local clone:
- Click on the code tab under the repository name.
- Then click 'Code' button to the right above the files listed.
- Click on clipboard icon to copy the URL.

[Back to top](#table-of-contents)

# Credits
## Content
- Code Institutes [Moments](https://github.com/Code-Institute-Solutions/moments) walkthrough
- [React](https://legacy.reactjs.org/docs/getting-started.html) - was used to create this web app.
- [React Bootstrap](https://react-bootstrap.github.io/) - for the styling and responsivnes of the site.
- [Slack](https://slack.com/) for any issues and questions.
- [W3CSchool](https://www.w3schools.com/) for general and helpful tips.
- [Stack Overflow](https://stackoverflow.com/) when I was stucked and needed help with code.

# Acknowledgements
- This project was built as a part of the Full Stack Software Development education at [Code Institute](https://codeinstitute.net/).
- My mentor Spencer Barriball for the guidance and encouragement.
- My Wifi thank you for all the support.

[Back to top](#table-of-contents)