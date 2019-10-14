/*eslint-env browser*/

// Gets User's choice 
function getUserchoice(){
    var userChoice =  window.prompt("Enter your choice (rock /paper/scissors) : ");
    if ((userChoice === 'rock') || (userChoice === 'paper') || (userChoice === 'scissors')){
        return userChoice;
    } else {
        window.alert("Entered invalid value!");
    }
}

//Gets Computer's choice
function getCompchoice(){
    switch (Math.floor(Math.random() * 3 + 1)){
        case 0 :
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;    
    }
}

// Declare the winner
function determineWinner(userChoice,compChoice){
    
    if (userChoice === compChoice){
        window.alert("It's a tie !!");
    } else if ( userChoice == 'rock') {
        if (compChoice == 'scissors'){
               window.alert("You win !!");
        } else {
                window.alert("Computer wins!!");
        }
    } else if (userChoice == 'scissors'){
        if (compChoice == 'paper'){
            window.alert("You win!!");
        } else{
            window.alert("Computer wins!!");
        }
    } else if (userChoice == 'paper'){
        if (compChoice == 'rock'){
            window.alert("You win!!");
        } else {
            window.alert("Computer wins!!");
        }
    }
}

// Starts the game 
function startgame(){
    var userChoice = getUserchoice();
    var compChoice = getCompchoice();
    window.alert("Your's choice;" + userChoice );
    window.alert("computer's choice;" + compChoice );
    determineWinner(userChoice,compChoice);
}
startgame();


