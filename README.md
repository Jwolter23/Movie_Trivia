# Movie_Trivia

![image](https://hips.hearstapps.com/hmg-prod/images/23-1597850983.jpg)

## General Overview

- Movie Trivia is a trivia game that is focused around 'The Matrix'. The theme of the game as well as the questions asked are all derived from the first movie.
- By not using an API for this trivia game, I was able to have complete control of my game, especially when choosing questions and their correct answers.
- This game will begin with 15 questions, one question on the screen at a time. Every time a question appears, the player will be given the option to choose from four multiple-choice answers.
- Players will be limited to choosing ONE of four multiple-choice answers. This means for every question the player will only be able to click one button whether that be the correct or incorrect answer. The idea behind this was to make the game slightly more challenging than others out there.
- Once the player finishes all 15 questions they will be shown their score out of 15 and prompted to play again.

## Styling

- Movie Trivia is styled to look like no other trivia game out there.
- Based around 'The Matrix', I really wanted users to experience what Neo did on our opening screen. This is why we see the typewriter text, which quotes from the movie what Neo saw on his own computer screen.
- Once clicking enter, users are brought to a different screen. This one has a Matrix-style green code background, with a black box where the game is played on top.
- The whole theme of the gameplay area is very Matrix green code and I wanted to keep that fairly consistent.
- An important part of styling was letting users know if they got a question correct or incorrect. This was done by changing the background color of correct questions to green and incorrect questions to red.
- Incorporating a light mode was important in my styling decision. Because everything is very dark and black I wanted to give users the ability to change it up by clicking a single button to toggle light or dark mode.

## Logic of the game

- The logic for Movie Trivia was fairly straightforward although that was much easier said than done.
- To begin with, having our global variables set up correctly was a huge aspect of getting the game to work properly. Buttons had to be assigned to their correct classes using DOM, along with having our questions set up properly through arrays and nested objects. Doing this allowed me to call upon those objects and properties whenever needed.
- Once all 15 questions were created, I was able to use dot notation to get the questions to populate in my question container as well as answers and their type to populate in the answer boxes.
- The next step was to create a statement that would read if a button clicked on was equal to true or false. Because I did not use an API and created these questions, I was able to manually assign each answer with a true or false property. By using if statements I was able to achieve what I was looking for.
- Randomizing the questions and their order was not as simple as I thought. Because I had them nested in an array I found that using sort and random - .5 would give me what I was looking for. Sort would sort my array based on the random number I got and using -.5 would give me as close to a 50/50 chance of getting a positive or negative number as possible.
- It was necessary for me to create many different functions such as a clear color function to clear the color every time the next button is clicked. One-click functions that enable and disable the buttons. As well as a function to count and show the current question we are on.
- Keeping score proved difficult as I had unknowingly made quite a significant mistake. In one of my functions, I had a for each loop going and added in an event listener. This ended up causing issues with my score counter as every time I would click next it would double up the click. With help from the TA, we were able to create a solution by declaring a correct answer variable and pushing the score into an empty array.
- Finally, it was important to have all the variables and styling I want on screen to be there while having the ones I don't want disappear when I click enter. I was able to achieve this by creating a function called displayAll and using the style.background etc. to choose if I want my variables equal to block or none.

## Post MVP

- Creating a light mode was a great post MVP feature. By referencing our dots lab I was able to create a light mode that when clicked will change the whole styling of our game board.
- Score counting and question counting were also two post MVP features I was happy to add in. This made the game feel more offical and fleshed out.

## Wireframe

- picture of wireframe in the next file title wireframe.jpg
  [link to wireframe](https://wireframe.cc/5vf3cH)

## Trello

[Link to trello](https://trello.com/b/3SE6LPp0/project-1)
