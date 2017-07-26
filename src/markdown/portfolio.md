One of the premises when I decided to build a portfolio was to built it with React, mainly for two reasons: because of the reusability it offers and because I really like it.

I first wrote the database, a large array of objects where each object is the data of a particular project. Then I started with the UI, the main tag system and the client side routing.

For the styles I used [Sasso](https://github.com/afuh/sasso), which is a CSS framework that I built as a final project for the HTML5 and CSS3 unit of the [The Odin Project](https://www.theodinproject.com/courses/html5-and-css3/lessons/design-your-own-grid-based-framework) curriculum. Sasso is a grid system made with Flexbox based on percentages. It has several shortcuts to speed things up, it doesn't use or need HTML classes and is 100% built with Sass functions and mixins.

Finally, the info of each project is written in Markdown and saved in a separated `.md` file and converted on-the-fy by [Render Markdown](https://github.com/rexxars/react-markdown). This way I can write or edit the text in a separate file and use it anywhere. Basically I could run this portfolio as an almost blog.
