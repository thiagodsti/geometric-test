# GEOMETRIC UI #

This project is to practice with canvas.

The user can choose three arbitrary points by clicking on the screen and the program will draw a parallelogram
and a circle with the same area of this parallelogram.

After created the geometric shapes, the user can move the points just by dragging and everything will be redrawed.

There is also a Reset button to start over.

### Requirements

- NPM

### Live

You can test the application here [https://geometric-test.herokuapp.com](https://geometric-test.vercel.app/)

### How do I get set up? ###

#### Development

- Build
`npm install`

- Run
`npm start`

#### Docker

- build
`docker build -t geometric .`

- run
`docker run -d -p 8080:8080 geometric`

- The project will be acessible on http://localhost:8080
