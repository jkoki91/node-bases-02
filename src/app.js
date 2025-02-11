
const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');   
// require('./js-foundation/05-factory');

const { getUUID, getAge } = require('./plugins');

// console.log(emailTemplate);
// console.log('Hola mundo desde app.js');
// const {getUserById} = require('./js-foundation/03-callbacks'); 
const {getUserById} = require('./js-foundation/04-arrow'); 
const id = 1;

getUserById(id, (err, user) => {
    if (err) {
        // return console.log(err);
        throw new Error(err);
    }
    // console.log(user);
});


// ! Referencia a la función factory y uso de la misma
// const {buildMakePerson} = require('./js-foundation/05-factory');
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'Jorge', birthdate: '1980-01-01' };
// const jorge = makePerson(obj);
// console.log({jorge});


const {getPokemonById} = require('./js-foundation/06-promises');

// getPokemonById(1)
//     .then(pokemon => console.log({pokemon}))
//     .catch(err => console.error('Por favor, revise el error:', err))
//     .finally(() => console.log('Proceso terminado'));


const { buildLogger } = require('./plugins');
const { log } = require('winston');

const logger = buildLogger('app.js');

logger.log('Hola mundo desde app.js');
logger.error('Error en app.js');