const robos = {
    input: require('./robos/input.js'),
    texto: require('./robos/texto.js')
}

async function start() {
    const busca = {}

    robos.input(busca);
    await robos.texto(busca);

    console.log(busca);
}

start();