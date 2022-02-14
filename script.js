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

let res = computerPlay();
console.log(res);