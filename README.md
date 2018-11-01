# Tic Tac Toe With MiniMax

The following project is a tic tac toe game built with react, hitting a locally ran python and flask back end. The game is a demonstration of the Mini Max Algorithm making the computer AI unbeatable.


# Build Notes

In order to use this game it is suggested that you build the backend first.

## Backend Build
Building
  - Download python https://www.python.org/downloads/
  - Install virtual env
    cd backend-ai
    python3 -m venv venv

  Activate Env
  `. venv/bin/activate`

Running flask
  `export FLASK_APP=computer_service.py`
  `flask run`

## Frontend Build

Once you have the backend running change directories to the main project.

`cd tic-tac-toe`

Then run:

`npm start`

This project was bootstrapped with the Create React App. All documentation for additional functionality that comes out of the box with that framework is listed in the `tic-tac-toe` directory

# Structure And Methodologies
#### Version Control
#### Styling
#### Folder Structure

# Common Errors
- Sometimes the backend, due to technical debt and future planned work, gets out of sync with the game. This will cause the game to execute and decide a winner before there is an actual winner. If this ever happens either restart the backend client followed by restarted(RECOMMENDED) or try to get to the end of the game where you can click okay

# TODO
#### Tests
#### Refactor State Mangement
#### Host on Heroku with CI Deployment



# Instructions

1. Create a program that can interactively play the game of Tic-Tac-Toe against a human
   player.
   * The program should win or draw, but never lose.
   * The human player should make the first move.
   * The program should announce the result of the game before clearing the board for
     another round of play.
1. A git repo has been initialized in the project root - commit early and often, with good messages.

When you've completed your submission, zip or tar the project back up, and be sure to include
your `.git` folder so we can see your commit history.

We are more interested in getting a view into how you approach the problem than
anything else, so a good commit history is vital.

This isn't a timed test, so don't think of the commit history as being a measure of
pace - we're not looking at that.
We understand this is something you'll be working on in between other things.
If, for some reason, you feel unable to complete the entire exercise, that's fine.
Just try to give us enough code to look at to get a sense of your approach.

# Implementation Guidelines

Your implementation should meet the following requirements:

* The game logic should be executed server-side (you pick the language/framework but we
  use a mix Django and Flask in Python).
* The interface for the game should be a JavaScript Single Page Application (SPA) running
  in a browser (again, you pick the frameworks/toolchains but we use a mix of React and
  Angular 1.x).
* You should rewrite this `README.md` to include build/run instructions for your apps
  (both client and server).

For a little extra credit:

* The SPA should _not_ be hosted by the server-side app, but instead through a separate
  server process (the client app should be completely standalone).
