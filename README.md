## Portfolio v2.0.0.0

### Scope.

Design a portfolio website that not only features all my projects ranging from frontend web development, indie gaming and photography but also allows my to test adn experiment with new features while I learn more about coding.

### Project Overview

#### Features

- Project section for showcasing previous projects
- Blog sections for my journey into coding and other projects
- Fully responsive and viewable on all mobile and tablet devices
- Authentication area for admin users
- some little hidden details, wink wink

#### Version Updates

**Estimated launch date:** NOV '25

**Version:** 2.0.0.0 (MVP) - Major build - React Convert Update

- [x] Set up project
- [x] Install router
- [x] Choose a new theme (colour & Fonts)
- [x] New domain name
- [x] Assets
  - [x] Import all old assets
- [x] Colour and fonts
  - [x] Add new colour theme to global.css variables
  - [x] Import new fonts and add them to global.css variables
  - [x] Add correct fonts and styles to content on page
- [x] Navigation Bar
  - [x] Add better styling, hover over links
  - [x] Make a better logo and add to the abr
  - [x] Make dropdown down component menu with preview info panel grid
  - [x] Accessability options and test (fix focus on not deactivating when not focus on)
  - [ ] Style links
  - [ ] Clean up li hover activation bugs
- [ ] Project page
  - [x] Build a timeline template view for your projects
  - [x] make each card a component
  - [x] Add images like Screenshots and main thumbnail
  - [ ] Generate a quick summary of each to test layout - detail later
  - [ ] add buttons for links to github and live preview
  - [ ] Detailed descriptions of project, solves, challenges and learnings (include tech stack used)
  - [ ] Select a couple of projects to showcase in highlight (Specials) reel
- [ ] About me
  - [ ] A quick summary of who I am and skills
  - [ ] Get some profile pictures of me
  - [ ] Short blog style that showcases who I am, what I do and why
- [ ] Contact me
  - [ ] Simple contact me (no form)
  - [ ] google map of Toronto (Nothing to detailed or fancy)
  - [ ] link to godaddy email hello@dayoffdev
- [ ] Home page
  - [x] Design hero section
  - [x] Style hero section
  - [ ] Add a sliding project gallery to the hero card
    - [ ] 3 Highlight projects
    - [ ] About Me saying hi
    - [ ] latest Blog article?
  - [ ] add pagination to the slider (dots)
  - [ ] fix empty space below footer
  - [ ] make front page scrollable
  - [ ] Intro blurp about me and my site
  - [ ] Use Projects.js to populate the feature card swiper
- [ ] Tech Stack - Resume (rename)
  - [ ] Resume of work experience and study (tech stack)
- [ ] Social media links
- [ ] Review code, remove all console logs, comment where needed
- [ ] Netlify build
  - [ ] Launch
- [ ] Github clean up for next build update
- [ ] Look into implementing React Aria

Known Bugs in current version

- [ ] Dropdown hover activates when mouse passes over link but does not hover. Timer activates but does not deactivate onMouseLeave

---

#### Roadmap 2025 & 2026

- v:2.0.0.0 - Major build - Convert Update. - November '25
- v:2.0.1.0 - Revision build - Projects Page Update (Better projects display)- December '25
- v:2.0.2.0 - Revision build - Game page Update - January '25
- v:2.0.3.0 - Better Graphics update February '26.
- v:2.1.0.0 - Minor build - Password Section - March '26
- v:2.2.0.0 - Navigation Bar Update - April '26

#### Idea's Concepts and fixes for future updates (Stretch Goals)

- MAINTENANCE - Make the whole site responsive for mobiles
- MAINTENANCE - make responsive for mobiles with hamburger (cafe themed) clickable menu
- MAINTENANCE - Make sure the entire site is built with accessability in mind
- MAINTENANCE - Look into implementing React Aria
- HOMEPAGE - Implement three.js by adding an interactive hero to the main page (cafe themed)
- NEW PROJECT - Coming Soon section turnupthatbeet.com (My own attempt at a fully functional website)
- MAINTENANCE - Learn Preloading images and implement across entire site
- MAINTENANCE - card style gallery component that can be loaded to any page yet uses a specific object array for its content based on the page the component has been applied to.
- HOME PAGE - Spotify playlist incorporate
- HOME PAGE - Instagram reel of completed projects and behind the scenes
- PROJECTS - Add All missing projects (only working code)
- PROJECTS - Updated screenshots for projects
- PROJECTS - When selected a modal pops up giving more details on the project with links to preview live or view code on github
- PROJECTS - Project icons for visual representation of projects
- PROJECTS - replace the timeline dot with the title of the project on its own card
- GAMES - Fix Game description page
- GAMES - Theme for site
- GAMES - Future state - separate game studio page dayoffgames.com
- GAMES - include a back button to dayoffdev on new site
- GAMES - Add missing games
- MAINTENANCE - Creating better images for each page
- MAINTENANCE - Better screenshots/gallery of projects
- MAINTENANCE - glyths for pages
- MAINTENANCE - profile image
- MAINTENANCE - logo redesign
- MAINTENANCE - Add Auth area to the site
- MAINTENANCE - Navigation bar needs polishing and cleaning up
- MAINTENANCE - Does the nav bar need to be sticky?
- MAINTENANCE - New theme for site
- MAINTENANCE - New colour palette for site
- MAINTENANCE - form section to submit a bug or suggest a new feature - firebase linkup / bug icon
- MAINTENANCE - Fix dropdown hover glitch
- GAME - Animated gifs of actual game play on a loop
- MAINTENANCE/PROJECTS - Menu system for selecting project genres for the timeline eg frontEnd, games etc
- MAINTENANCE - a way to track if the link to preview projects as been clicked - firebase

---

#### Tech Stack

- React Vite
- TypeScript
- HTML
- CSS

_Images of the technologies used._

---

The application exhibits **mobile responsiveness** and incorporates **accessibility functionalities**.

**Live Deployment:** _(link here)_  
**Video Demo:** _(link here)_

**Mobile View:** _(screenshot here)_

---

### Dependencies List

```json
"dependencies": {
  "normalize.css": "^8.0.1",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router-dom": "^7.9.3",
  "swiper": "^12.0.2"
}
```

ctrl + shift + v = markup preview
