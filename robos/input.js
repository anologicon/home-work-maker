const readline = require('readline-sync');

function robo(busca) {
    
    busca.termo = fetchTerm();
    
    function fetchTerm() {
        return readline.question('Qual o tema do seu trabalho:');
    }
}

module.exports = robo;
