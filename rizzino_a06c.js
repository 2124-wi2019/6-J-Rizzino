/* Julie Rizzino
rizzino_a06c.js
INFO 2124
Thoendel
1/23/20 */

//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
do {
    lottoPicks.push(getLottoNumber());
    //Pushes the getLottoNumber function to load a number into the lottoPicks array.
} while (lottoPicks.length < 5);
//Continues to get a number from the getLottoNumber function until the array has 5 numbers.

for (let n = 0; n < lottoPicks.length; n++)
//for loop iterates through the length of the lottoPicks array.
{
    switch (lottoPicks[n]) {
        case 22:
            console.log (`Matched 22!`);
            winnings = winnings + 10;
        break;
        case 42:
            console.log (`Matched 42!`);
            winnings = winnings + 10;
        break;
        case 43:
            console.log (`Matched 43!`);
            winnings = winnings + 10;
        break;
        case 47:
            console.log (`Matched 47!`);
            winnings = winnings + 10;
        break;
        case 61:
            console.log (`Matched 61!`);
            winnings = winnings + 10;
        break;
        case powerBallPick:
            console.log (`Matched Powerball Pick!`);
            winnings = winnings + 100;
        break;
        }   
        //switch sctructure set up to find any matching numbers and return a match result and winnings response if there is a match.
}
        if (winnings > 0) {
            console.log (`Congratulations! You have won $${winnings}!`);
        } else {
            console.log (`Sorry, you didn't win anything. Better luck next time!`);
        }
        //if...else statement to output the amount of winnings if winnings are greater than 0. It outputs a better luck next time string if winnings are equal to 0.
//Have fixed the part of my code that needed to be a if...else statement and have been able to get the for loop to properly iterate through the lottoPicks array but it has only been able to match the powerball pick not the individual winning numbers even when they are part of the array. Any further suggestions would be appreciated. Thank you.

/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}