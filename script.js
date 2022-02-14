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

    if ((pS == "piedra" && cS == "tijera") ||
        (pS == "tijera" && cS == "papel") ||
        (pS == "papel" && cS == "piedra")) {
        return `Ganaste, ${pS} le gana a ${cS}`;
    } else if (pS == cS) {
        return `Empate, ambos eligieron ${pS}`;
    } else {
        return `Perdiste, ${cS} le gana a ${pS}`;
    }   
}


let playerSelection = "piedra";
let computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));