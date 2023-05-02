
<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://github.com/nikhilsurfingaus/programming-quiz-console-editor-vue3/blob/master/public/favicon.ico" alt="Markdownify" width="200"></a>
  <br>
  JDoodle Clone Quiz
  <br>
</h1>

<h4 align="center">A simple Python quiz with an embedded console and compiler built with <a href="https://vuejs.org/" target="_blank">Vue3<img align="center" alt="Rafa-Python" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/vuejs/vuejs-original.svg">
</a></h4>

<p align="center">
  <a href="https://saythanks.io/to/nikhilsurfingaus@gmail.com">
      <img src="https://img.shields.io/badge/FindMeHere.io-%E2%98%BC-1EAEDB.svg">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#video-demo">Video Demo</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#design-decisions">Design Decisions</a> •
  <a href="#alternative-approaches">Alternative Approaches</a> •
  <a href="#challenges">Challenges</a> •
  <a href="#future-work">Future Work</a> •
  <a href="#copyright">Copyright</a>
</p>

## Key Features

* Python Quiz
  - Answer 5 from a selection of 10 random Python Programming Questions
* Live Monaco Code Editor/Compiler
  - Run and Execute Python3 code directly on this web app, thanks to JDoodle's REST API
* Progress Bar
  - UI/UX Element keeps you up to date on your Quiz's progress 
* Resulst Summary
  - Results Summary shows your answer with each question and weather you were correct/incorrect
* Bootstrap5
  - Mobile/Desktop Responsive UI/UX elements
* Animate.css
  - Animated transitions for DOM Renders
* Simple Clean Interface
  - User Friendly

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/nikhilsurfingaus/programming-quiz-console-editor-vue3.git

# Go into the repository
$ cd programming-quiz-console-editor-vue3

# Install dependencies
$ npm install

# Run the app
$ npm run serve
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.


## Video Demo
### Desktop
https://user-images.githubusercontent.com/46309727/235419167-9ed3ad8b-7676-4568-b30f-2811a894ffb1.mov

### Mobile
https://user-images.githubusercontent.com/46309727/235419197-ccd61862-ad4f-4352-8665-ae4b3c1d9a67.mov

## Screenshots

<p float="left">
  <img src="https://github.com/nikhilsurfingaus/programming-quiz-console-editor-vue3/blob/master/src/assets/demo1.jpg" />
  <img src="https://github.com/nikhilsurfingaus/programming-quiz-console-editor-vue3/blob/master/src/assets/demo2.jpg" />
</p>

## Design Decisions
* Vue3
  - Client requests Vue3 Framework
  - Typescript used to error check with types
* Bootstrap
  - Supports Mobile First Development
  - Scale up, similar UI/UX for Desktop/Mobile users
* Checkpoints
  - Simple Quiz -> Results checkpoint meets basic needs of client
  - Console Compiler meets clients need to output JDoodle REST API results
* Progress Bar
  - Support UX/UI User is aware of their current progress situational awareness
* Theme
  - Simple orange theme offers the following
    - Attention: Orange is a high-visibility color and can be used to draw attention to important elements or calls to action.
    - Playfulness: Orange can create a fun and playful tone, which may be appropriate for some brands or products.

    - Creativity: Orange is often associated with creativity and innovation, which may be useful for design projects that require a more experimental or cutting-edge         approach.
  - Results Red/Green Traffic Light Design
    -  red and green for right and wrong answers in a traffic light style can be especially effective because it is easy to understand and recognize, regardless of            language or cultural background
* Cognitive Load
  - Reduced actions on screen minimizes Cognitive Load
  - Helps Improves UX

## Alternative Approaches
* Multi-Page Web Application
  - Using Router/Routes To Be Multi Pages with a Home, Quiz, Profile and Help/About Page
* Select Coding Langauge Test
  - Currently only Pyhton3 avaliable for quiz, branching out to other languages the JDoodle offers
* Login
  - Some BaaS for Login and User Authentication for profile/tracking programming progress
  - Mitigate bad actors DDoS with API requests to JDoodle
  - Use localStorage to prevent logging in each time
* Quiz Answer Analysis
  - Current method compared each answer to every answer in bank
  - Should use question index with each answer object and only correlate the two in a O-O vs O-M relationship
* Typescript Type Bug Checking/Validation
  - Typescript was integrated but types not used
  - Types could have caught ambigious errors or bugs in traditional Javascript

## Challenges
* JDoodle REST API
  - JDoodlw REST API documentation was confusing and difficult to integrate into Vue3
  - Only way to use JDoodle REST API was a PROXY SERVER in `vue.config.js`
  - Traditional await, fetch asynch function required proxy server to run otherwise failed
* Vue3
  - Vue3 is outdated compared to react, more code for similar features in react
  - Vue3 developer support deficient, most non-english 
  - Vue3 3rd party npm packages 2-3 years without being updated 
* Performance
  - Monaco Console Editor minor impact on UX
  - Low-Bandwidth could be problematic for cosnole editor 
* NPM Library Integration
  - Ran into issues using compoenents from 3rd party npm packages
  - Some requried parent level import and vue/app binding prior to first DOM render
  
## Future Work
* Forums
  - Create a stackoverflow/forum style feature to holster a community learning and improving their programming skills
* Login Authentication
* Multi-Page Application
  - Home, Quiz, Profile, Forum, About
* Support More Coding Languages in Quiz
* UI/UX Improvements with Fonts, Text Too much white space at the moment
* More Mobile Support
  - Bootstrap responsive, although borders, text size and font could improve UI/UX more for mobile users
* Duplicate Code
  - Some code is repetitive use HOC's (Higher Order Component) Logic

## Credits
This software uses the following open source packages:

<img src="https://static-00.iconduck.com/assets.00/vue-icon-1024x1024-8qwdup5l.png" alt="drawing" width="100"/> <img 
src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png" alt="drawing"  height="100" width="110"/> <img 
src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="drawing" width="100"/> <img 
src="https://raw.githubusercontent.com/serdarciplak/BlazorMonaco/master/BlazorMonaco/icon.png" alt="drawing" width="100"/> <img 
src="https://www.drupal.org/files/project-images/animate.png" alt="drawing"  height="100" width="180"/>  


## Copyright
**Copyrights 2023, Developed by Nikhil Naik. @WaveFlightSimulation All Rights Reserved.**

