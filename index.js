const readline = require('readline-sync');

function start() {
    const content = {}

    content.searchTerm = fetchTerm();

    function fetchTerm() {
        return readline.question('Qual o tema do seu trabalho:');
    }
    
    console.log(content);
}

start();