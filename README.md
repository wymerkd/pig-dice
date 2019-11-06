# Pig Dice

## Created by Kyle Wymer and Lara Bjork on November 6 and 7, 2019

### Project Description
This project was completed as part of the Epicodus in-class curriculum. The task description was as follows:

As stated in the prompt from Epicodus, the project objectives are to:

Write a program where two users can play Pig dice against each other. Don't forget to write plain English specifications with example inputs and outputs before you begin coding!

## Specifications

|  Behavior | Input  | Output  |
|---|---|---|
| The application returns a randomly generated number from 1 to 6 | User clicks on button | 1-6 |
| When numbers 2 through 6 are returned, they are added to that roll's score| roll of 2 + roll of 3 | 5 is new roll score, not yet aded to overall score|
| when number 1 is returned, the roll's score is lost/set to 0, and the player loses their turn | 1 | 0 added to overall score |
| When a player decides to hold, their score for that roll is added to the total score | roll of 2 + roll of 3 + hold |  5 is added to overall score |
| When score is equal to or greater than 100, that player wins | overall score reaches 100 or more | winner alert |


### Technologies Used
HTML, CSS, Bootstrap 3.3.7, JavaScript, and jQuery v3.4.1 (uncompressed development version).
Project was written using Google Chrome; no other browsers were tested for compatibility.

The random number generator for our die was adapted from the JavaScript on this page: https://codepen.io/Pyremell/pen/eZGGXX/.

### Project Setup instructions
There shouldn't be any special setup required. If something doesn't display correctly or goes wrong somehow, please contact us at <wymerkd@gmail.com> and <lara.m.bjork@gmail.com> and we will do our best to troubleshoot for you.

### Known Issues
*


### License
This software is licensed under the MIT license.

_Copyright (c) 2019 ** Kyle Wymer and Lara Bjork **_
