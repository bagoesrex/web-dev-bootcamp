let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = `images/dice${randomNumber1}.png`;

var player1 = document.querySelectorAll("img")[0];

player1.setAttribute("src", randomImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = `images/dice${randomNumber2}.png`;

var player2 = document.querySelectorAll("img")[1];

player2.setAttribute("src", randomImage2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";    
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";    
} else {
    document.querySelector("h1").textContent = "Draw!";    
}

console.log(randomNumber1);
console.log(player1);
