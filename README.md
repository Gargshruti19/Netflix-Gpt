# Netflix GPT

- Create React App
- configured tailwind css into our app
- Header
- routing of app
- Login form
- Sign Up form
- form validation
- useRef Hook
- firebase setup
- deploy app to production
- create signup user account in firebase
- Implement signin user API
- created redux Store with userSlice
- IMPLEMENTED SIGN OUT
- UPDATE PROFILE
- bugfix - signup user display name and profile picture update
- bugfix - if user not logged in redirect /browse to login page and vice-versa
- unsubscribed to the onAuthStateChanged callback
- add hard-coded values to the constant files(important)
- register for tmdb api & create an app and get access token
- get data from tmdb now playing movies list api
- custom hook for now playing movies
- create a movie Slice
- update store with movies data
- plan for main and secondary container
- fetch data for trailer video
- update store with trailer video data
- embedded youtube video
- make it autoplay, mute and on loop
- added tailwind css to make it look awesome(main container)
- build secondary container
- build the movies list and movie card
- found out tmdb image cdn url
- made UI look better with tailwind
- usePopularMovies custom hook
- useTopRatedMovies custom hook
- useUpcomingMovies custom hook
- GPT search page
- GPT search bar
- multi-language feature in our App (BONUS)
- integrate gpi apis(get openai key)
- gpt search api call
- fetched gpt movie suggestions from tmdb
- gpt slice , added data
- reused movie list component to make movie suggestions container
- memoization
- added .env file
- added .env to .gitignore
- made our site responsive

# Features

- # For loggedout User
- Home page (before Authentication)

  - Header
  - Sign in Page / sign up form
  - redirect to browse Page

- # For loggedIn user
- Browse Page (after Authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Play Button
  - Movies List (Suggestions)

    - horizontal scroll in movies

- Neflix Gpt
  - Search Bar
  - Movie Suggestions
