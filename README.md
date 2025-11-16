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
  - [ ] Bring all project over in a simple list format (broken or not)
  - [ ] Select a couple of projects to showcase in highlight (Specials) reel
  - [ ] Screenshots and main thumbnail
  - [ ] links to github and live preview
  - [ ] descriptions of project, solves, challenges and learnings (include tech stack used)
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

- v: 2.0.0.0 - Major build - Convert Update. - November '25
- v:2.0.1.0 - Revision build - Projects Page Update (Better projects display)- December '25
  1. Add All missing projects (only working code)
  2. Updated screenshots for projects
  3. When selected a modal pops up giving more details on the project with links to preview live or view code on github
- v:2.0.2.0 - Revision build - Game page Update - January '25
  1. Fix Game description page
     - Theme for site
     - include a back button
  2. Add missing games
  3. Come up with a better theme
  4. Future state - separate game studio page dayoffgames.com
- v:2.0.3.0 - Better Graphics update February '26.  
  Creating better images for each page including:
  1. Better screenshots/gallery of projects
  2. glyths for pages
  3. profile image
  4. logo redesign
- v:2.1.0.0 - Minor build - Password Section - March '26
  1. Add Auth area to the site
- v:2.2.0.0 - Navigation Bar Update - April '26
  1. Navigation bar needs polishing and cleaning up
  2. Does the nav bar need to be sticky?

#### Idea's Concepts and fixes (Stretch Goals)

- Make the whole site responsive for mobiles
  - make responsive for mobiles with hamburger (cafe themed) clickable menu
- Make sure the entire site is built with accessability in mind
  - Look into implementing React Aria
- Implement three.js by adding an interactive hero to the main page (cafe themed)
- Coming Soon section turnupthatbeet.com (My own attempt at a fully functional website)
- Learn Preloading images and implement across entire site

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
