# Tic Tac Toe With MiniMax

The following project is a tic tac toe game built with react, hitting a locally ran python and flask back end. The game is a demonstration of the Mini Max Algorithm making the computer AI unbeatable.


# Build Notes

In order to use this game it is suggested that you build the backend first.

## Backend Build
Building
  - Download the most recent version of python https://www.python.org/downloads/
  - Install the virtual env
      - `cd backend-ai`
      - `python3 -m venv venv`

  - Activate Env

  `. venv/bin/activate`
  - Run flask
    - `export FLASK_APP=computer_service.py`
    - `flask run`

## Frontend Build

Once you have the backend running change directories to the main project.

- `cd tic-tac-toe`

Then run:

- `npm start`

This project was bootstrapped with the Create React App. All documentation for additional functionality that comes out of the box with that framework is listed in the `tic-tac-toe` directory

# Structure And Methodologies
#### Version Control
This project was build with the mentality of using the [gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). You will see a number of feature branches that were merged into master for development. A similar workflow should be kept for contributions to this code base.
#### Component/Atomic Driven Design/Architecture
This project also tries to follow brad frosts [atomic design](http://bradfrost.com/blog/post/atomic-web-design/) for structuring SASS and creating new components

# Common Errors
- Sometimes the backend, due to technical debt and future planned work, gets out of sync with the game. This will cause the game to execute and decide a winner before there is an actual winner. If this ever happens either restart the backend client followed by restarted(RECOMMENDED) or try to get to the end of the game where you can click okay

# TODO
#### Tests
- A TDD or BDD framework has so many benefits it would have been nice to add some form of tests to help prevent regression and assure confidence in releases of the code.

#### Refactor State Management
- Introduce RXJS or Redux. There is a little bit of a hack in the application now whenever state is updated and making it asynchronous. There are other libraries and frameworks to solve this issue better than is currently implemented.
- State is both stored on the Frontend and the Backend We can solve this by passing the state to the Backend. Some work was made towards this goal but not completed. The work is stored in the `clientSideState` branch.

#### Host on Heroku with CI Deployment
- In order to get this web application hosted on a 3rd party there is a dependency of changing the state management. This is done on the backend project, but it would be a good goal to add a deployment process where every time you push to master code is built.
