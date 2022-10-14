# Movie_Trivia

## General Overview

- Movie Trivia is going to be a trivia game that is focused on either one singular movie, or a few of my favorite different movies.
- I will have the ability to choose between creating my own data or calling and API that has preset movie data.
- This game will begin with 15 questions, one question on the screen at a time. Everytime a question appears, the player will be given the option to choose from four multiple choice answers.
- If the player chooses wrong answer, they will be alerted but still be allowed to continue on to finish the game.
- Once the player finishes all 15 questions they will be shown their score out of 15 and prompted to play again.

## Styling

- I really want to make this Movie Trivia game look like nothing else out there.
- The style I will be going for is matrixed themed with the green text and black background but it will be played as an infinite looped video.
- on top of the video will be a large box where the actual game will be played.
- When a played has a question up and clicks on the box with the correct answer said box will turn green. For boxes clicked on with the wrong answer said box will turn red.
- at the very end in large lettering the score of user will be displayed with an option to quit or play again.

## Logic of the game

- The logic for my Movie Trivia game is going to depend a lot on whether I use an API or not. However there will be a lot of similarities the main difference will be how I access that data.
- To begin with, it will be important to set a few global variables. Score, startGame, currentQuestion, and counter will be set to 0, true or false.
- Questions will be created by me and the total game should be about 15 questions long.
- Once I have the questions, I can use dot notation to either access data from the API or use dot notation to access data from an object that I will create.
- If I create an object I will have different objects with different movies and all the corosponding information related to them.
- Using Math.random multiplied by a number of my choosing, this will be used to randomize the question order and pick one out of an array.
- answers to these questions will not be randomized to make the game harder with multiple options that could be the answer.
- creating a start function will be similar to how it was done in tic tac toe, and the reset function will be similar to how it was in the control flow HWW.
- creating a function that checks if the clicked answer is == to the correct answer is going to be the most important function to get the game working.

## Post MVP

- Creating a dark mode will be a great bonus to this game. I plan on referencing our dots lab as we utilized the toggle class and that can be used to change the body background.
- I will be doing more research as to how I can use objects to make the game resuable.
- I will be utilizing google fonts to find soemthing that matches the asethics of my game.

## Wireframe

- picture of wireframe in the next file title wireframe.jpg

## Trello

[Link to trello](https://trello.com/b/3SE6LPp0/project-1)
