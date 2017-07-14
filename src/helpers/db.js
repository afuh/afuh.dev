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
    tags: ["node", "express", "mongodb", "mongoose", "pug", "passport", "javascript"],
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
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://afuh.github.io/sequencer/",
    code: "https://github.com/afuh/sequencer",
    image: `${require('../images/screenshots/sequencer.png')}`,
    tags: ["jquery", "web audio", "api"],
    latest: false
  },
  {
    name: "Calculator",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://afuh.github.io/calculator/",
    code: "https://github.com/afuh/calculator",
    image: `${require('../images/screenshots/calc.png')}`,
    tags: ["jquery", "fcc", "odin project"],
    latest: false
  },
  {
    name: "Sketchpad",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://afuh.github.io/sketchpad/",
    code: "https://github.com/afuh/sketchpad",
    image: `${require('../images/screenshots/sketch.png')}`,
    tags: ["jquery", "odin project"],
    latest: false
  },
  {
    name: "Quote Machine",
    info: "I put together a bunch of ancient quotes of Diego Maradonain a .json file together with an array of outstanding personalities of history. Mixing them randomly gives pretty funny results..",
    md: `${require('../markdown/quote.md')}`,
    url: "https://afuh.github.io/frases/",
    code: "https://github.com/afuh/frases",
    image: `${require('../images/screenshots/quote.png')}`,
    tags: ["javascript", "fcc"],
    latest: false
  },
  {
    name: "Minimalist Image Slider",
    info: "If the user does not interact with the Image Slider for a certain amount of time, the images will start to slide automatically until the user interact with it again. This way the user will never be bothered by the auto-slide.",
    md: `${require('../markdown/slide.md')}`,
    url: "https://afuh.github.io/slider/",
    code: "https://github.com/afuh/slider",
    image: `${require('../images/screenshots/slide.png')}`,
    tags: ["javascript", "odin project"],
    latest: false
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
    tags: ["javascript", "p5.js", "odin project"],
    latest: false
  },
  {
    name: "Weather React",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "http://naughty-joke.surge.sh/",
    code: "https://github.com/afuh/weather",
    image: `${require('../images/screenshots/weather.png')}`,
    tags: ["react", "open weather map", "api", "fcc"],
    latest: false
  },
  {
    name: "GitHub Battle",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "http://milky-help.surge.sh/",
    code: "https://github.com/afuh/battle",
    image: `${require('../images/screenshots/battle.png')}`,
    tags: ["react", "github", "api"],
    latest: false
  },
  {
    name: "Simple Tabbed Browsing",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://afuh.github.io/react-browsing/",
    code: "https://github.com/afuh/react-browsing",
    image: `${require('../images/screenshots/menu.png')}`,
    tags: ["react", "odin project"],
    latest: false
  },
  {
    name: "Now That's Delicious!",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    md: `${require('../markdown/delicious.md')}`,
    url: "https://delicious-app.herokuapp.com/",
    code: "https://github.com/afuh/delicious",
    image: `${require('../images/screenshots/delicious.png')}`,
    tags: ["node", "express", "mongodb", "mongoose", "pug", "passport",  "javascript", "google maps", "api"],
    latest: false
  },
  {
    name: "Sasso",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    md: `${require('../markdown/sasso.md')}`,
    url: "",
    code: "https://github.com/afuh/sasso",
    image: `${require('../images/screenshots/placeholder.jpg')}`,
    tags: ["sass"],
    latest: false
  },
  // {
  //   name: "javascript 30",
  //   info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   url: "https://afuh.github.io/js30/",
  //   code: "https://github.com/afuh/js30",
  //   image: `${require('../images/screenshots/js30.png')}`,
  //   tags: ["javascript"],
  //   latest: false
  // },
  {
    name: "Recreations",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "",
    code: "https://github.com/afuh/sasso",
    image: `${require('../images/screenshots/placeholder.jpg')}`,
    tags: ["sass"],
    latest: false
  }
]
