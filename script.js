let player = {
    firstName: "Nickhole",
    lastName: "Yabut",
    chips: 145
}
let blackJack = false
let isAlive = false

let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")

let cardEl = document.getElementById("card-el")

let playerEl = document.getElementById("player-el")

playerEl.textContent += player.firstName + player.lastName + ": $" + player.chips + " "


function getRamdomCard() {


    let reallyRandom = Math.floor( Math.random() *13 + 1)

    if (reallyRandom === 1) {
        return 11
    } else if (reallyRandom >10) {
        return 10
    } else {
        return reallyRandom
    }
}



function startGame() {
    let firstCard = getRamdomCard()
    let secondCard = getRamdomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame ()
}

function renderGame () {
  

    sumEl.innerText = "sum:" + sum

    cardEl.innerText = "Cards:"

    for (x = 0; x < cards.length; x ++){
        cardEl.textContent += cards[x] + " "
    }


if (sum <= 20) {
   message = "Do you want to draw a card?"
    
} else if (sum === 21) {
    message = "Black Jack"
    blackJack = true
 
} else {
    message = "You are out"
    isAlive = false
}

messageEl.innerText = message
}


function newCard() {

    if (isAlive === false || blackJack === true) {
    } else {
        let card = getRamdomCard()
          cards.push(card)
         sum += card
         sumEl.innerText = "sum:" + sum
          renderGame () 
    }

}

let fruit = ["🍎", "🧡", "🍎","🍎", "🧡" ]

let appleShelf = document.getElementById("apple-shelf")

let orangeShelf = document.getElementById("orange-shelf")


function shorter() {
for(let x = 0; x < fruit.length; x ++) {
    if (x === 1 || x === 4 ) {
        orangeShelf.textContent += "🧡"
    } else {
        appleShelf.textContent += "🍎"
    }
}

}

shorter()

