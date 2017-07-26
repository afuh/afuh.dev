Pinstagram is a full stack Instagram clone. It's the result of exercising with Node, MongoDB and its frameworks.

The goal was to build a functional clone of some Internet-based photo-sharing application.

I finally decided to copy the web version of Instagram and add some extra features to it, such as the ability to upload images in the browser or to be able to see all the images that I liked in one place, such as the Pinterest boards.

This is my first approach to the Back-end kingdom.

## The stack
- **Server side**: Node with Express (ES2017 async/await)
- **Database**: MongoDB and Mongoose
- **Templates**: Pug (formerly Jade)
- **Authentication**: Passport.js
- **Client side**: ES6 vanilla Javascript and Sass

## Profiles
You can create your own account or login in with one of the following accounts:

**Populated profiles**
- **usernames**: yellow, purple, red, blue
- **password**: 123

**Empty profiles**
- **usernames**: guest1, guest2
- **password**: 123

## Features
**As an unauthenticated user you can**:
- login with Facebook or username and password.
- create a new account.
- reset your password via email if you already have an account.
- browse other users' feed.

**As authenticated user you can**:
- edit your profile info, change your avatar and password.
- follow other users.
- have a Home page showing all of your friends' recent images.
- receive a notification when a user starts to follow you, likes or comments one of your photos.
- share an image with a caption.
- comment and like/unlike an image. Your liked images will be stored in your Likes page.
- delete any of your images or comments.
- discover other users via suggestions.

<!--
---

While the priority of this exercise isn't mobile apps, it works quite well on Android with Chrome (not tested on any other phone)

![pinstagram](https://raw.githubusercontent.com/afuh/pinstagram/master/public/images/screenshots/mobile.gif) -->
