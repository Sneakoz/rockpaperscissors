let win = 0;
let loss = 0;

function getComputerChoice() {
    let options = [
        "Rock", "Paper", "Scissors"
    ];
    let random = Math.floor(Math.random() * 3);
    return selection = options[random];
}


function playRound(player, comp) {
    if (player == comp) {
        return `You both chose ${player}. Its a draw`
    } else if (player == "Rock") {
        if (comp == "Paper") {
            loss++
            return "You Lose! Paper beats Rock"
        } else {
            win++
            return "You Win! Rock beats Scissors"
        }
    } else if (player == "Paper") {
        if (comp == "Scissors") {
            loss++
            return "You Lose! Scissors beat Paper"
        } else {
            win++
            return "You Win! Paper beats Rock"
        }
    } else if (player == "Scissors") {
        if (comp == "Rock") {
            loss++
            return "You Lose! Rock beats Scissors"
        } else {
            win++
            return "You Win! Scissors beat Paper"
        }
    } else {
        return "Invalid Input! Only rock, paper or scissors allowed"
    }
}

const rockbtn = document.querySelector('#rock')
const paperbtn = document.querySelector('#paper')
const scissorsbtn = document.querySelector('#scissors')
const resultdiv = document.querySelector('#resultdiv')
const scorediv = document.querySelector('#scorediv')

rockbtn.addEventListener('click', () => playGame('Rock'))
paperbtn.addEventListener('click', () => playGame('Paper'))
scissorsbtn.addEventListener('click', () => playGame('Scissors'))

function playGame(player) {
    let comp = getComputerChoice()
    let result = playRound(player, comp)
    let score = `${win}-${loss}`
    let score2 = `${loss}-${win}`
    resultdiv.textContent = result
    if (win == 5){
        scorediv.textContent = `YOU WIN ${score}`
        win = 0
        loss = 0
    } else if(loss ==5) {
        scorediv.textContent = `THE COMPUTER WINS ${score2}`
        win = 0
        loss = 0
    } else {
        scorediv.textContent = score
    }
    console.log(result)
    // if (win > loss) {
    //     console.log(`You won ${win}-${loss}`)
    // } else if (loss > win) {
    //     console.log(`You lost ${loss}-${win}`)
    // } else {
    //     console.log(`You drew ${win}-${loss}`)
    // }
    // let replay = prompt("Replay? y/n")
    // if (replay == 'y') {
    //     win = 0
    //     loss = 0
    //     playGame()
    // }
}
