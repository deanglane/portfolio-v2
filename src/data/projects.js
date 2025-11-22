// projects.js
import stellar from "../assets/images/screen-shots/stellar-harvest-thumbnail.png";
import barOne from "../assets/images/screen-shots/bar_one_new.png";
import battleRockets from "../assets/images/screen-shots/battle_rockets_new.png";
import horoscope from "../assets/images/screen-shots/daily_horoscope_app.png";
import flastIt from "../assets/images/screen-shots/flash_it_new.png";
import hangryTummy from "../assets/images/screen-shots/hangry_tummy.png";
import pokedex from "../assets/images/screen-shots/pokemon_pokedex_app_new.png";
import portfolio from "../assets/images/screen-shots/portfolio_2.0.png";
import tappyPlane from "../assets/images/screen-shots/tappy_plane.png";

export const projects = [
  {
    date: "2026-01-10",
    title: "Portfolio 2.0",
    desc: ` This is the second evolution of my portfolio — a complete rebuild of my original site, now crafted in React to better showcase both my skills and my growth as a developer. It’s more than a gallery of work; it’s a home for all the creative projects I dive into on my “day off.”

    From front-end experiments and indie game prototypes to photography, artwork, cooking, music, and future apps, this space is designed to evolve right alongside me. As I learn new tools and explore new mediums, this portfolio will expand with new features, fresh ideas, and playful interactions.
    
    Think of it as a living creative playground — a place where I can show what I’ve built, what I’m learning, and everything I love making.`,
    features: [],
    techStack: [],
    url: "",
    gitHub: "",
    status: "Coming Soon",
    highlight: true,
    featureReel: false,
    image: portfolio,
  },
  {
    date: "2024-12-15",
    title: "Tappy Bird Game",
    tag: "Keep the plane flying while avoiding the deadly lasers",
    desc: `Tappy Plane is a Flappy Bird–style arcade game built in the Godot engine using GDScript. It recreates the classic tap-to-fly mechanics with smooth physics, a scrolling world, and increasingly challenging obstacles.

    While building it, I learned how to use Godot’s 2D node system to set up a character with gravity and jump impulses, create a parallax-scrolling background, and manage collisions between the player, lasers, and the ground. I also implemented score tracking, high-score saving, and simple game states (ready, playing, game over) to make the loop feel polished and replayable.
    
    It’s a small but addictive project that let me practice core Godot patterns like scenes, instancing, signals, and lightweight UI — all wrapped in a fun, fast-paced game.`,
    features: [
      "Built in Godot Engine using GDScript",
      "Player implemented as a 2D body with a CollisionShape2D and custom gravity / jump impulse",
      "Tap / click input mapped to a custom flap action via the Input Map",
      "Parallax background scrolling using ParallaxBackground and multiple ParallaxLayer nodes",
      "Endless level feel by moving pipes and ground across the screen instead of the camera",
      "Obstacles created as reusable scenes and spawned with instancing on a timer",
      "Randomized pipe positions to vary difficulty between runs",
      "Collision detection using physics layers and signals to trigger game-over state",
      "Score system that increments when the player passes obstacles",
      "High-score saving using Godot’s file API for local persistence",
      "UI overlay for score, high score, and restart prompts",
      "Simple game state management (ready, playing, game over) to control input and resets",
    ],
    techStack: [],
    url: "",
    gitHub: "",
    status: "active",
    highlight: true,
    featureReel: false,
    image: tappyPlane,
  },
  {
    date: "2024-10-01",
    title: "Stellar Harvest Game",
    tag: "Collect the valuable meteorites before the destroy your planet",
    desc: `Stellar Harvest was my first game project, inspired by the classic mechanics of Pong but reimagined with a more dynamic, arcade-style loop. You pilot a freight ship in low orbit around its home planet while meteorites streak across space. Each meteorite carries valuable minerals that can be collected by intercepting them—miss one, and the resulting impact destroys your home world and ends the run.

    One of my goals was to modernize the traditional Pong interaction. Instead of simply bouncing the ball back, I experimented with a mechanic where the meteorite is “absorbed” into the ship on contact, triggering scoring events and visual feedback. Through this project I learned core game-development concepts such as basic physics (gravity and velocity), score handling, collision detection, and random object generation. I also designed all the sprite assets myself using Aseprite, which gave me a deeper appreciation for pixel-art workflows.
    
    Stellar Harvest was a huge milestone for me as a developer. It was the first time I combined gameplay design, coding logic, and visual art into a single project. I plan to revisit it in the future and expand the mechanics with the new skills I’ve gained in game development.`,
    url: "",
    features: [
      "Physics System - Basic gravity and velocity handling for meteorite movement and Adjustable speed curves for increasing difficulty",
      "Player Controls - Keyboard arrow key input for precise ship movement with Smooth horizontal acceleration and deceleration",
      "Collision Detection - Ship–meteorite collision triggers mineral collection and score events plusMeteorites exiting the viewport trigger game-over logic and Pixel-perfect collision for tighter gameplay feel",
      "Game Loop & State Management - Real-time game state handling (active, scoring, game-over)",
      "Procedural Meteorite Generation - Randomized meteorite spawn timing and trajectories with Increasing spawn frequency as score grows (dynamic difficulty)",
      "Audio System - Sound effects for collisions, scoring, and game-over events",
      "Scoring System - Score increments based on meteorite collection with an animated score feedback for player interaction ",
      "Custom Art & Asset Management - All sprites designed and animated using Aseprite. Asset pipeline for loading ship, meteorites, and effects",
      "Performance Optimization - Cleanup of off-screen or collected meteorites to reduce memory usage",
    ],
    techStack: [],
    gitHub: "",
    status: "active",
    highlight: false,
    featureReel: false,
    image: stellar,
  },
  {
    date: "2023-08-01",
    title: "Battle Rockets",
    desc: `Battle Rockets was a collaborative project built with four classmates during my time at Juno College. Our goal was to reimagine the classic Battleship formula as a space-themed strategy game where players race to locate and destroy their opponent’s rockets before their own fleet is discovered. The project also required building an AI-controlled opponent (NPC), and the entire game had to be implemented in React without the use of external libraries.

    I took on the role of project manager for the development process. This involved coordinating team responsibilities, designing the project scope, and documenting all mechanics before development began. It pushed us to think critically about planning, feature breakdowns, and realistic timelines—skills that became just as valuable as the coding itself.
    
    From a technical standpoint, we tackled several challenges: creating a reusable grid system using CSS Grid, implementing a drag-and-drop mechanic for ship placement and rotation, generating randomized NPC ship layouts, and building turn-based game logic that allowed the AI to choose grid coordinates, track previous guesses, and identify hits, misses, and destroyed ships.
    
    Throughout the project, I gained a deeper understanding of React’s rendering patterns, debugging tools in the browser, teamwork with GitHub version control, and the process of building and merging features within a collaborative environment. Despite a few small quirks, Battle Rockets was a successful build that our whole team was proud of—and it pushed all of us to level up as front-end developers.`,
    features: [
      "Turn-based strategy gameplay inspired by Battleship",
      "Player vs AI mode with randomized NPC ship placement",
      "Five-ship fleet system with varied ship sizes",
      "Scoring system for hits, misses, and total successful rounds",
      "Randomized NPC placement that avoids overlapping ships",
      "AI turn logic with memory of previous guesses",
      "CSS Grid–based reusable board layout",
      "Custom drag-and-drop ship placement logic (no external libraries)",
      "Ship rotation for vertical or horizontal placement",
      "Placement validation to prevent overlapping or out-of-bounds ships",
      "React state management for turns, board data, and scoring",
      "Conditional rendering for setup, active game, and game-over states",
      "Hit and miss indicators with visual feedback",
      "Animated feedback for destroyed ships",
      "Sound effects for hits, misses, and destruction events",
      "GitHub collaboration with branching and pull requests",
      "Project planning and scoped documentation",
      "Debugging through DevTools and React error boundaries",
    ],
    techStack: [
      "React (JavaScript) — main framework for the entire game",
      "HTML5 — structure of the app and DOM elements",
      "CSS3 — layout, styling, and grid-based board system",
      "CSS Grid — core mechanic for the game board layout",
      "JavaScript (ES6+) — game logic, AI system, and interactive features",
      "Git & GitHub — version control, branching strategy, pull requests",
      "VS Code — primary development environment",
      "Browser DevTools — debugging, layout inspection, performance checks",
      "Netlify - for deployment",
    ],
    url: "",
    gitHub: "",
    status: "active",
    highlight: false,
    featureReel: false,
    image: battleRockets,
  },
  {
    date: "2023-06-01",
    title: "Flash it!",
    desc: "",
    features: [],
    techStack: [],
    url: "",
    gitHub: "",
    status: "active",
    highlight: true,
    featureReel: false,
    image: flastIt,
  },
  {
    date: "2023-04-25",
    title: "Pokedex",
    desc: "",
    features: [],
    techStack: [],
    url: "",
    gitHub: "",
    status: "active",
    highlight: false,
    featureReel: false,
    image: pokedex,
  },
  {
    date: "2023-04-13",
    title: "Daily Horoscope",
    desc: "",
    features: [],
    techStack: [],
    url: "",
    gitHub: "",
    status: "active",
    highlight: false,
    featureReel: false,
    image: horoscope,
  },
  {
    date: "2023-02-01",
    title: "Bar one",
    desc: "",
    features: [],
    techStack: [],
    url: "",
    gitHub: "",
    status: "active",
    highlight: false,
    featureReel: false,
    image: barOne,
  },
  {
    date: "2022-12-01",
    title: "Hangry Tummy",
    desc: "",
    features: [],
    techStack: [],
    url: "",
    gitHub: "",
    status: "active",
    highlight: false,
    featureReel: false,
    image: hangryTummy,
  },
];
