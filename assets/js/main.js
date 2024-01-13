// Offset é quem vai determinar a paginação do documento JSON
const offset = 0;
// Limit determina o limite de informações (no exemplo, objetos) que vem na página
const limit = 10;
// Passando as variáveis para o URL, deixando-o dinâmico
const url = `https://pokeapi.co/api/v2/pokemon?${offset}&${limit}`;

fetch(url)
    // Este then converte a response para JSON
    .then((response) => response.json())
    // Este then recebe a response do then acima já
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))
    .finally(() => console.log('Requisição concluída'))