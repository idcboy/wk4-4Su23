//a function to play craps on my index page
function playCraps(){
    console.log("playCraps() started");
    //step one roll 2 6 sided dice
    var die1;
    var die2;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);
    //step 1b link to html and print results on screen
    document.getElementById("die1Res").innerHTML =die1;
    document.getElementById("die2Res").innerHTML =die2;
//step 2. calculate the sum of die 1 and die 2
var diceSum = die1 + die2;
console.log("The sum of the dice is:" + diceSum);
document.getElementById("diceSum").innerHTML =diceSum;
    /*if (conditions for true) {
        do this if conditions are true
    }else if(another conditions for true){
        do this else if conditions are true
    }else{
        do this if none are true
    }*/

    //step 3.does the sum equal 7 or 11, meaning are you are loser
    if(diceSum==7||diceSum==11){
        document.getElementById("gameRes").innerHTML = "sorry no dice try again"
        //step 4. did the dice come up double> are they evens? if so, yo win
    }else if(die1 == die2 && die1%2 == 0){
        document.getElementById("gameRes").innerHTML = "Congratulations you win! GG"
    }else{
        //step 5. otherwise push
        document.getElementById("gameRes").innerHTML =
     "You did not lose, You did not win, Good luck please play again!"}
    
    


    
}