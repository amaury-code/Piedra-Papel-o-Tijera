let playerScore = 0
let computerScore = 0

function playGame(userChoice){
    const Choice = ['piedra', 'papel', 'tijera']
    const computerChoice = Choice[Math.floor(Math.random() * 3)]

    let result = ''
    
    if(userChoice == computerChoice){
        result = `Empate. Ambos jugadores eligieron ${userChoice}`
    }else if(
        (userChoice == 'piedra' && computerChoice == 'tijera') ||
        (userChoice == 'papel' && computerChoice == 'piedra') ||
        (userChoice == 'tijera' && computerChoice == 'papel') 
    ){
        result= `Ganast. ${userChoice} gana a ${computerChoice}`
        playerScore++
    }else{
        result = `Perdiste. ${computerChoice} gana a ${userChoice}`
        computerScore++
    }

    document.getElementById('result').textContent = result
    document.getElementById('score').textContent = `Jugador ${playerScore} | Computadora ${computerScore}`

    if(playerScore == 3 || computerScore == 3){
        endGame()
    }
}

function endGame(){
    const finalResult = playerScore == 3 ? 'Felicidades, has ganado' : 'Lo sentimos, ha ganado el ordenador'
    document.getElementById('result').textContent  = finalResult

    document.getElementById('btnPiedra').disabled = true
    document.getElementById('btnPapel').disabled = true
    document.getElementById('btnTijera').disabled = true
}