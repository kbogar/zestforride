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

<summary>Click to view screenshots of Navigation features</summary>

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

### Home Page
- The homepage consists of a section with user's posts, a section with the Most followed profiles, a search bar, and a navbar with an Add post and Add event button.
- The posts show the user's username, profile image, date when it was created, the title and content, and also a user interaction of likes and comments count.
- The search bar is allowing the user to easily search the existing posts by username, title and content.
- The most followed profiles section is allowing users to see other users and gives them a possibility to follow and unfollow users and to visit their profiles.

<details>

<summary>Click to view screenshots of the Home Page</summary>

**Home Page Mobile**

![](/docs/home_mobile.png)

**Home Page Desktop**

![](/docs/home_desktop.png)

</details>

<br>