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
    console.log(lottoPicks);
    //I included a console.log of the lottoPicks array because I was checking if numbers were loading correctly.
    switch (lottoPicks) {
        case 22:
            console.log (`Matched 22!`);
            winnings = winnings + 10;
            console.log (`Congratulations! You won $${winnings}!`);
        break;
        case 42:
            console.log (`Matched 42!`);
            winnings = winnings + 10;
            console.log (`Congratulations! You won $${winnings}!`);
        break;
        case 43:
            console.log (`Matched 43!`);
            winnings = winnings + 10;
            console.log (`Congratulations! You won $${winnings}!`);
        break;
        case 47:
            console.log (`Matched 47!`);
            winnings = winnings + 10;
            console.log (`Congratulations! You won $${winnings}!`);
        break;
        case 61:
            console.log (`Matched 61!`);
            winnings = winnings + 10;
            console.log (`Congratulations! You have won $${winnings}!`);
        break;
        case powerBallPick:
            console.log (`Matched Powerball Pick`);
            winnings = winnings + 100;
            console.log (`Congratulations! You have won $${winnings}!`);
        break;
        case !22, !42, !43, !47, !61:
            console.log (`Sorry, you didn't win anything. Better luck next time!`);
        break;
        }//switch sctructure set up to find any matching numbers and return a match result and winnings response if there is a match.
}
//Have tried following the instructions multiple ways and have not been able to get my program to run correctly.  The array will load the numbers but the switch structure is not returning the response for matches or winnings. Would appreciate any advice or suggestions. Thank you.
  
/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}