# Study Tracker

Study Tracker is a small React project I developed while learning and practicing JavaScript and React.

The main purpose of this project was to improve my understanding of React concepts such as `useState`, `useEffect`, component-based structure, props, conditional rendering, and working with `localStorage`.

## Features

* Start, pause, and reset the study timer
* Display study time in `MM:SS` format
* Set predefined study goals
* Set a custom study goal
* Automatically stop the timer when the selected goal is reached
* Track completed study sessions
* Reset completed session count
* Save study time, study goal, and completed sessions using `localStorage`
* Dynamically update the browser tab title based on the current study status
* Responsive and simple user interface

## Built With

* React
* JavaScript
* HTML
* CSS
* Vite

## What I Learned

While developing this project, I practiced:

* Managing state with `useState`
* Using `useEffect` and dependency arrays
* Cleaning up intervals with `clearInterval`
* Working with multiple React components
* Passing data and functions between components using props
* Conditional rendering
* Saving and retrieving data with `localStorage`
* Formatting time values
* Organizing a React project into reusable components

## Project Structure

```text
src/
├── components/
│   ├── GoalSelector.jsx
│   ├── SessionStats.jsx
│   ├── TimerControls.jsx
│   └── TimerDisplay.jsx
├── main.jsx
└── style.css
```

## About

This is a learning project created while I was studying JavaScript and React. My goal was to turn the concepts I learned into a small functional application and improve my understanding of React by building something from scratch.

## Live Demo

You can view the live version of the project here:

[Live Demo](https://bengu-elmas.github.io/Study-Tracker/)
