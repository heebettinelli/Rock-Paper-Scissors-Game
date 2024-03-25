// Variáveis para armazenar os pontos do usuário e do computador
let userScore = 0;
let computerScore = 0;

// Elementos do DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Função para obter a escolha aleatória do computador
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Função para converter a escolha em palavra para exibição
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// Função chamada quando o usuário ganha
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🔥`;
}

// Função chamada quando o usuário perde
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost... 🫠`;
}

// Função chamada quando há empate
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's draw! 🤝`;
}

// Função principal que inicia o jogo e adiciona os eventos de clique
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// Função para adicionar eventos de clique aos elementos
function addClickEvent(element, choice) {
    element.addEventListener('click', function () {
        game(choice);
    });
}

// Função principal que configura os eventos de clique
function main() {
    addClickEvent(rock_div, 'r');
    addClickEvent(paper_div, 'p');
    addClickEvent(scissors_div, 's');
}

// Chamada da função principal para iniciar o jogo
main();