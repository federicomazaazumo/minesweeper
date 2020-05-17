# Santex Code Challenge

Minesweeper video game using JavaScrip, Redux, and React, with Semantic UI.

## Setup

Fisrt install the neccesary packages using `npm` or `yarn`, using one of the following commands:

    $ yarn
    $ npm install

Second, run the application using one of the following commands:

    $ yarn start
    $ npm start

## Code quality

This project is `lint` and `prettier` using the community standard configuration of ESLint.

To format your code using [Prettier](https://prettier.io/) run the following command in the root directory:

    $ npx prettier --write "**/*.{js,json,jsx,sass,scss}"

This project is test using the `Shallow Rendering API` from [Enzyme](https://enzymejs.github.io/enzyme/).

To run those test run the following command in the root directory:

    $ npm test

### Development Roadmap

- [ ] Code refactoring inluding `useEffect` extraction tu custom hooks where it apply.
- [x] Create start screen.
- [x] Create game board.
- [x] Design scoreboard.
- [x] Implement basic game mechanics.
- [x] Implement flag feature.
- [ ] Implement multiplayer capabilities.
- [x] Implement test suites.

## Easter Egg

There is an `easter egg` inside the game mechanics. Can you find it?

## Licence

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
