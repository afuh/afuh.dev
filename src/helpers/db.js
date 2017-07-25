export const db = [
  {
    name: "Portfolio",
    info: `When I decided to built a Portfolio I first started writing the database, which is a large array of objects, where each object is the data of a particular project or app. To showcase them easily I decided to use React because of the reusability it offers and also because I wanted to built it with a tag system.

    I did the client side routing with React Router using the tags as parameters for the URLs.

    The info of each project is written in Markdown and save it in a separated .md file and converted on-the-fy by Render Markdown. This processes is extremely comfortable, I can write or edit the text in a separate file and reuse it anywhere I want.

    This way I can end up using this portfolio as an almost blog.`,
    md: `${require('../markdown/portfolio.md')}`,
    url: "https://afuh.github.io/",
    code: "https://github.com/afuh/afuh.github.io",
    image: `${require('../images/screenshots/portfolio.png')}`,
    tags: ["react"],
    latest: true
  },
  {
    name: "Pinstagram",
    info: `Pinstagram is a full stack Instagram clone. It's the result of exercising with Node, MongoDB and its frameworks. The goal was to build a functional clone of some Internet-based photo-sharing application.`,
    md: `${require('../markdown/pinsta.md')}`,
    url: "https://pinstagram-app.herokuapp.com/",
    code: "https://github.com/afuh/pinstagram",
    image: `${require('../images/screenshots/pinsta.png')}`,
    video: [`${require('../images/videos/pinsta.webm')}`, `${require('../images/videos/pinsta.mp4')}` ],
    tags: ["javascript", "node", "express", "mongodb", "mongoose", "pug", "passport"],
    latest: true
  },
  {
    name: "Where is the ISS right now?",
    info: `Know exactly where the International Space Station is and who is on board.

    For some time I wanted to do something super simple that would tell me where the ISS. I know there are plenty of places to look for that information, but considering that it's always a good time to continue exploring the Google API, I decided to build it myself.`,
    md: `${require('../markdown/iss.md')}`,
    url: "http://subsequent-distance.surge.sh/",
    code: "https://github.com/afuh/iss",
    image: `${require('../images/screenshots/iss.png')}`,
    gif: `${require('../images/gifs/iss.gif')}`,
    video: [`${require('../images/videos/iss.webm')}`, `${require('../images/videos/iss.mp4')}` ],
    tags: ["javascript", "google maps", "api"],
    latest: true
  },
  {
    name: "Step Sequencer",
    info: `A 16 Step Sequencer built with JQuery and Web Audio API.

    It was an interesting challenge. I started building it as soon as I started learning JavaScript and it was quite hard to making it work. I already updated it a couple of times because of the new things that I've learned, and I guess I will continue to do so in the future.`,
    md: `${require('../markdown/sequencer.md')}`,
    url: "https://afuh.github.io/sequencer/",
    code: "https://github.com/afuh/sequencer",
    image: `${require('../images/screenshots/sequencer.png')}`,
    tags: ["jquery", "web audio", "api"],
  },
  {
    name: "Calculator",
    info: `Simple JQuery calculator

    The idea from the beginning was **not** to use eval() and do everything myself.
    This is a project as described in Free Code Camp and The Odin Project`,
    md: `${require('../markdown/calc.md')}`,
    url: "https://afuh.github.io/calculator/",
    code: "https://github.com/afuh/calculator",
    image: `${require('../images/screenshots/calc.png')}`,
    tags: ["jquery", "free code camp", "the odin project"],
  },
  {
    name: "Sketchpad",
    info: `A browser version of something between a Sketchpad and an Etch-A-Sketch.

    The user can edit the thickness of the grid to create drawings in more detail and change the stroke's color and shape.

    This is the first JavaScript project from the The Odin Project curriculum.`,
    md: `${require('../markdown/sketch.md')}`,
    url: "https://afuh.github.io/sketchpad/",
    code: "https://github.com/afuh/sketchpad",
    image: `${require('../images/screenshots/sketch.png')}`,
    tags: ["jquery", "the odin project"],
  },
  {
    name: "Quote Machine",
    info: "I put together a bunch of ancient quotes of Diego Maradonain a .json file together with an array of outstanding personalities of history. Mixing them randomly gives pretty funny results..",
    md: `${require('../markdown/quote.md')}`,
    url: "https://afuh.github.io/frases/",
    code: "https://github.com/afuh/frases",
    image: `${require('../images/screenshots/quote.png')}`,
    tags: ["javascript", "free code camp"],
  },
  {
    name: "Minimalist Image Slider",
    info: "If the user does not interact with the Image Slider for a certain amount of time, the images will start to slide automatically until the user interact with it again. This way the user will never be bothered by the auto-slide.",
    md: `${require('../markdown/slide.md')}`,
    url: "https://afuh.github.io/slider/",
    code: "https://github.com/afuh/slider",
    image: `${require('../images/screenshots/slide.png')}`,
    tags: ["javascript", "the odin project"],
  },
  {
    name: "Weather React",
    info: `Show the local weather.

    The user can search the by city, country or ZIP code and access the current weather and 5 days forecast.`,
    md: `${require('../markdown/weather.md')}`,
    url: "http://naughty-joke.surge.sh/",
    code: "https://github.com/afuh/weather",
    image: `${require('../images/screenshots/weather.png')}`,
    tags: ["react", "open weather map", "api", "free code camp"],
  },
  {
    name: "GitHub Battle",
    info: `This App is the result of the awesome course React Fundamental sby Tyler McGinnis.

    This app uses the GitHub API to showcase the most popular repositories. The user can also select between different languages to filter the results.

    Additionally, the user can search and select two GitHub users to 'battle' each other. The application will find those users, analyze them and declare a winner.`,
    md: `${require('../markdown/battle.md')}`,
    url: "http://milky-help.surge.sh/",
    code: "https://github.com/afuh/battle",
    image: `${require('../images/screenshots/battle.png')}`,
    tags: ["react", "github", "api"],
  },
  {
    name: "Snake Game",
    info: "This is the classic Snake game where the player controls a snake that grows longer with each piece of food it eats. The player lose if it gets so big it hits itself or if it goes off the board.",
    md: `${require('../markdown/snake.md')}`,
    url: "https://afuh.github.io/snake-game/",
    code: "https://github.com/afuh/snake-game",
    image: `${require('../images/screenshots/snake.png')}`,
    gif: `${require('../images/gifs/snake.gif')}`,
    video: [`${require('../images/videos/snake.webm')}`,`${require('../images/videos/snake.mp4')}`],
    tags: ["javascript", "p5.js", "the odin project"],
  },
  {
    name: "Simple Tabbed Browsing",
    info: `A restaurant site that use tabbed browsing to access the Menu, About Us and Contact pages.

    This is a project as described in The Odin Project but instead of building it in JQuery (as proposed) I decided to do it with React as I read the documentation.

    This is my first App using React.`,
    md: `${require('../markdown/menu.md')}`,
    url: "https://afuh.github.io/react-browsing/",
    code: "https://github.com/afuh/react-browsing",
    image: `${require('../images/screenshots/menu.png')}`,
    tags: ["react", "the odin project"],
  },
  {
    name: "Now That's Delicious!",
    info: "A full stack restaurant application which users can search, geolocate, review and curate their favourite restaurants from around the world.",
    md: `${require('../markdown/delicious.md')}`,
    url: "https://delicious-app.herokuapp.com/",
    code: "https://github.com/afuh/delicious",
    image: `${require('../images/screenshots/delicious.png')}`,
    tags: ["node", "express", "mongodb", "mongoose", "pug", "passport",  "javascript", "google maps", "api"],
  },
  {
    name: "JavaScript 30",
    info: `JavaScript30 is a great course by Wes Bos. The main idea is to build 30 things in 30 days with vanilla JavaScript. No frameworks, no compilers, no libraries, no boilerplate.

    I took this course to focus on learn and practice DOM manipulation.

    This is a showcase with all my exercises.
    `,
    md: `${require('../markdown/js30.md')}`,
    url: "https://afuh.github.io/js30/",
    code: "https://github.com/afuh/js30",
    image: `${require('../images/screenshots/js30.png')}`,
    tags: ["javascript"]
  },
  {
    name: "FCC Back End API Projects",
    info: "This is a small page to showcase my solutions to the FreeCodeCamp API and microservices challenges.",
    md: `${require('../markdown/fccapi.md')}`,
    url: "https://fcc-backend.herokuapp.com/",
    code: "https://github.com/afuh/fcc-backend-projects",
    image: `${require('../images/screenshots/backend.png')}`,
    tags: ["node", "express", "mongodb", "mongoose", "pug", "api"]
  }
]
