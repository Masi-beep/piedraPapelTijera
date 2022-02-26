// GAME
let playerScore = 0;
let computerScore = 0;
let winnerRound = "";

function computerPlay() {
    let eleccion = Math.floor(Math.random()* 3) + 1;

    if (eleccion == 1){
        return "Piedra";
    } else if (eleccion == 2) {
        return "Papel";
    } else {
        return "Tijera";
    }
}

function playRound(playerSelection,computerSelection) {
    let pS = playerSelection.toLowerCase();
    let cS = computerSelection.toLowerCase();

    if ((pS === "piedra" && cS === "tijera") ||
        (pS === "tijera" && cS === "papel") ||
        (pS === "papel" && cS === "piedra")) {
        playerScore++;
        return `Ganaste, ${pS} le gana a ${cS}`;
    } else if (pS === cS) {
        return `Empate, ambos eligieron ${pS}`;
    } else {
        computerScore++;
        return `Perdiste, ${cS} le gana a ${pS}`;
    }   
}

function game() {
    let roundNumber = 0;
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Piedra, Papel o Tijera"); 
        let computerChoice = computerPlay();
        roundNumber++;
        console.log(`Ronda ${roundNumber}: `);
        console.log(playRound(playerChoice,computerChoice));
        
        if ((playerScore === 3 && roundNumber === 3) || (playerScore > computerScore && roundNumber === 5)) {
            console.log("Ganaste el juego! F5 para reiniciar");
            break;
        } else if ((computerScore === 3 && roundNumber === 3) || (computerScore > playerScore && roundNumber === 5)) {
            console.log("Perdiste el juego... F5 para reiniciar");
            break;
        } else if (computerScore === playerScore && roundNumber === 5) {
            console.log("Empate. F5 para reiniciar");
        }
    }
}

game();
//let playerSelection = "piedra";
//let computerSelection = computerPlay();
//console.log(playRound(playerSelection,computerSelection));
