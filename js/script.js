/* function getComputerChoice(){
  let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
  switch (numeroAleatorio) {
    case 1: 
      return "TIJERA";
    case 2: 
      return "PIEDRA";
    case 3: 
      return "PAPEL";
  }
} */

function getComputerChoice() {
  let numeroAleatorio = Math.random(); // Obtener un número aleatorio entre 0 y 1
  
  if (numeroAleatorio < 0.33) {
    return "TIJERA";
  } else if (numeroAleatorio < 0.66) {
    return "PIEDRA";
  } else {
    return "PAPEL";
  }
}


function playRound(playerSelection, computerSelection){

  let ganador;
  if (playerSelection === "PIEDRA" && computerSelection === "TIJERA" || playerSelection === "PAPEL" && computerSelection === "PIEDRA" || playerSelection === "TIJERA" && computerSelection === "PAPEL") {
    ganador = 1;
  } else if (playerSelection === computerSelection) {
    ganador = 0;
  } else {
    ganador = 2;
  }

  return ganador;
}

function game() {
  let user = 0;
  let computer = 0;
  let mensaje;

  for (i = 0; i < 5; i++){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Ingresa tu jugada: ").toUpperCase();
    let resultado = playRound(playerSelection, computerSelection);
    

    if (resultado === 1) {
      mensaje = `Ganaste!!! ${playerSelection} le gana a ${computerSelection}`;
      user++;
    } else if (resultado === 0) {
      mensaje = `Empate!!! ${playerSelection} es igual a ${computerSelection}`;
    } else if (resultado === 2) {
      mensaje = `Perdiste!!! ${playerSelection} no vence a ${computerSelection}`;
      computer++;
    }
    console.log(mensaje);
    console.log(`Puntaje Vos:${user} | Compu: ${computer}`);
  }

  if (user > computer) { 
    console.log("Eres el ganador");
  } else if (user < computer) {
    console.log("Perdiste ante la Compu");
  } else {
    console.log("Empate!");
  }
  
}

game();
