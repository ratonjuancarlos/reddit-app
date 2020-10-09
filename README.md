# Deviget Reddit Exercise

- [Deviget Reddit Exercise](#deviget-reddit-exercise)
  - [Install and run](#install-and-run)
  - [What I choose and why](#what-i-choose-and-why)
    - [Main libraries](#main-libraries)
      - [Material-ui](#material-ui)
      - [Redux Toolkit](#redux-toolkit)
    - [Helper libraries](#helper-libraries)
    - [Deployed](#deployed)
  - [Notes:](#notes)
    - [About the commits](#about-the-commits)
    - [About the swipe menu](#about-the-swipe-menu)

## Install and run

To run the project in your local environment you will need to ahve installed:

- [NodeJS](https://nodejs.org/es/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Then

```bash
git clone https://github.com/ratonjuancarlos/reddit-app/tree/deviget
npm i
npm start
```

Open [`http://localhost:3000/`](http://localhost:3000/) in your browser

Also you can see the demo in [here](https://ratonjuancarlos.github.io/reddit-app/)

## What I choose and why

### Main libraries

#### [Material-ui](https://material-ui.com/)

I use material UI for the simplicity of importing components with styles based on material design
In addition, it provides animations (Transitions) as well as tools to facilitate the creation of responsive design

#### [Redux Toolkit](https://redux-toolkit.js.org/)

I chose it for the ease it has to define all the elements of redux in a single file

### Helper libraries

- lodash
- dayjs
- axios

If it had been required or had the time, I would have implemented `cypress` to perform tests

### Deployed

Deployed on github pages

## Notes:

### About the commits

Due to the complexity and time to finish the exercise, sometimes I found myself switching from one task to another. That makes imposible to create commits for each step that can be considerer _atomics_.

### About the swipe menu

Material-ui provides a component to implement a Swipe sidebar, but I found that the documentation was outdated and incomplete, that make me spent a lot of time trying to implement it properly, so I choose to just let a responsive sidebar.
