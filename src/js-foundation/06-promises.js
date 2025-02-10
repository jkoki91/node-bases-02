

// const getPokemonById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     fetch(url)
//         .then(resp => resp.json())
//         .then(pokemon => {
//             console.log(pokemon);
//             return pokemon;
//         })
//         .catch(err => {
//             console.log('Error en la petición');
//             return err;
//         });
// }

// const getPokemonById = async (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     const resp = await fetch(url);
//     const pokemon = await resp.json();
//     // throw new Error('No se pudo obtener el pokemon');
//     return pokemon;
// }

const { http } = require('../plugins/http-client.plugin');

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // const pokemon = await http.get(url);
    // const pokemon = await http(url);
    const pokemon = await http.get(url);

    return pokemon;
}

module.exports = {
    getPokemonById,
}
