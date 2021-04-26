console.log("1 - Start", "\n", "2 - Exit", "\n");

let selection = prompt("Enter Selection: ");

if ((selection != 1) && (selection != 2)) {
    console.log("Please enter one of the selections.");
} else if (selection == 1) {
    //function for playing the game
} else if (selection == 2) {
    console.log("Thanks and have a nice day :)");
}

function playGame() {
    console.log("1 -- Rock", "\n", "2 -- Paper", "\n", "3 -- Scissors");
    let selection = prompt("Enter selection: ");

    if (selection == 1) {
        console.log("You have selected: Rock");
    } else if (selection == 2) {
        console.log("You have selected: Paper");
    } else if (selection == 3) {
        console.log("You have selected: Scissors");
    } else {
        console.log("Something has gone wrong, please select a valid option.");
    }

    //have the computer generate a roll

    let compChoice = getRandomInt(3);

    // Computer = Rock
    if (compChoice == 1) {
        console.log("\n", "Computer chose Rock!");
        if (selection == 1) {
            console.log("\n", "It's a Draw!");
        } else if (selection == 2) {
            console.log("\n", "Paper beats Rock, You Win!");
        } else if (selection == 3) {
            console.log("\n", "Uh Oh, Rock beats Scissors, You Lose!");
        } else {
            console.log("\n", "Something has gone wrong, please try again.");
        }

    // Computer = Paper
    } else if (compChoice == 2) {
        console.log("\n", "Computer chose Paper!");
        if (selection == 1) {
            console.log("\n", "Uh Oh, Paper beats Rock, You Lose!");
        } else if (selection == 2) {
            console.log("\n", "It's a Draw!");
        } else if (selection == 3) {
            console.log("\n", "Scissors beats Paper, You Win!");
        } else {
            console.log("\n", "Something has gone wrong, please try again.");
        }
    
    // Computer = Scissors
    } else if (compChoice == 3) {
        console.log("\n", "Computer chose Scissors!");
        if (selection == 1) {
            console.log("\n", "Rock beat Scissors, You Win!");
        } else if (selection == 2) {
            console.log("\n", "Uh Oh, Scissors beats Paper, You Lose!");
        } else if (selection == 3) {
            console.log("\n", "It's a Draw!");
        } else {
            console.log("\n", "Something has gone wrong, please try again.");
        }
    } else {
        console.log("\n", "Something has gone wrong, please try again.");
    }

}