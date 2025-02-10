const axios = require('axios');

// const httpClientPlugin = (url) => {

//     return axios.get(url)
//         .then(resp => console.log(resp.data))
//         .catch(err => console.error('Error en la petición', err))
// }

const httpClientPlugin = {
    get: async(url) => {
        try {
            const resp = await axios(url);
            return resp;
        } catch (error) {
            console.error('Error en la petición', error);
            return null;
        }
    },

    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url) => {},

}

// const httpClientPlugin = {
//     get: async(url) => {
//         try {
//             const resp = await fetch(url);
//             const data = await resp.json();
//             return data;
//         } catch (error) {
//             console.error('Error en la petición', error);
//             return null;
//         }
//     },

//     post: async(url, body) => {},
//     put: async(url, body) => {},
//     delete: async(url) => {},

// }

module.exports = {
    http: httpClientPlugin,
}
