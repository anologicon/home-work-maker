const algorithmia = require('algorithmia');

const enviroment = require('../env.json');

async function robo(conteudo) {
    await pegarConteudoDaWikiPidia(conteudo);
    filtarConteudo(conteudo);


    async function pegarConteudoDaWikiPidia(busca) {
        const autenticadoAlgorithmia = algorithmia(enviroment.algorithmiaKey)
        const algoritimo = autenticadoAlgorithmia.algo("web/WikipediaParser/0.1.2?timeout=300");
        const wikipidaResposta = await algoritimo.pipe({
            "articleName": busca.termo,
            "lang": 'pt'
        });
        const wikipidiaConteudo = wikipidaResposta.get();

        busca.conteudoOrigial = wikipidiaConteudo.content

        console.log(wikipidiaConteudo);
        
    }

    function filtarConteudo(content) {
        const semMarkDownLinhasBrancas = removerMarkDownLinhasBrancas(content.conteudoOrigial)
        const semDatasEntreParenteses = removerDatasEntreParenteses(semMarkDownLinhasBrancas)

        content.conteudoFiltrado = semDatasEntreParenteses

        function removerMarkDownLinhasBrancas(text) {
            const allLines = text.split('\n')

            const semMarkDownLinhasBrancas = allLines.filter((line) => {
                if (line.trim().length === 0 || line.trim().startsWith('=')) {
                    return false
                }

                return true
            })

            return semMarkDownLinhasBrancas.join(' ')
        }
    }

    function removerDatasEntreParenteses(text) {
        return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g, ' ')
    }

}

module.exports = robo;