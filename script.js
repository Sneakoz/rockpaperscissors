let win = 0;
let loss = 0;

function getComputerChoice() {
    let options = [
        "ROCK", "PAPER", "SCISSORS"
    ];
    let random = Math.floor(Math.random() * 3);
    return selection = options[random];
}


function playRound(player, comp) {
    player = player.toUpperCase();
    if (player == comp) {
        return `You both chose ${player}. Its a draw`
    } else if (player == "ROCK") {
        if (comp == "PAPER") {
            loss++
            return "You Lose! Paper beats Rock"
        } else {
            win++
            return "You Win! Rock beats Scissors"
        }
    } else if (player == "PAPER") {
        if (comp == "SCISSORS") {
            loss++
            return "You Lose! Scissors beat Paper"
        } else {
            win++
            return "You Win! Paper beats Rock"
        }
    } else if (player == "SCISSORS") {
        if (comp == "ROCK") {
            loss++
            return "You Lose! Rock beats Scissors"
        } else {
            win++
            return "You Win! Scissors beat Pater"
        }
    } else {
        return "Invalid Input! Only rock, paper or scissors allowed"
    }
}

const rockbtn = document.querySelector('#rock')
const paperbtn = document.querySelector('#paper')
const scissorsbtn = document.querySelector('#scissors')
const resultdiv = document.querySelector('div')

rockbtn.addEventListener('click', () => playGame('rock'))
paperbtn.addEventListener('click', () => playGame('paper'))
scissorsbtn.addEventListener('click', () => playGame('scissors'))

function playGame(player) {
    let comp = getComputerChoice()
    result = playRound(player, comp)
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
