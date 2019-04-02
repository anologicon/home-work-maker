const readline = require('readline-sync');

function start() {
    const busca = {}

    busca.termo = fetchTerm();

    function fetchTerm() {
        return readline.question('Qual o tema do seu trabalho:');
    }
    
    console.log(busca);
}

start();