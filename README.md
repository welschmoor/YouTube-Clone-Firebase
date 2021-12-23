todo:

implement search results!

footer 

create individual channels /channel/:userUID

redo the Likes, so that they are saved in DB

Handle Signup/Login errors, password min length, DisplayName max length

implement favorites list (probably by adding favorites to users collection? or creating a new collection "favorites" altogether? or use local storage?)

I think it's better to do it by creating an array of favorited videos

default avatar if person selects nothing.

change Light Mode color contrast


# YouTube Clone

This is my attempt to make a YouTube clone using Firebase for backend.


Current progress: https://fir-610f8.web.app/


Frontend: `React`

CSS: `Styled Components`

Backend: `Firebase`


## Set Up
Create a Firebase project on firebase.com. In /src/firebase/index.js change the config to the one from firebase website. Make sure to use 8.5 version of firebase, as indicated by package.json.


To run, in root folder run `npm install` and the site should be available on port localhost:3000