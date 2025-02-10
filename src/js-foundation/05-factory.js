// const { getUUID } = require('../plugins/get-id.plugin');   
// const { getAge } = require('../plugins/get-age.plugin');

// const { getUUID, getAge } = require('../plugins');

// const obj = { name: 'Jorge', birthdate: '1980-01-01' };

// const buildPerson = ({name, birthdate}) => { 
//     return {
//         id: getUUID(),
//         name,
//         birthdate,
//         age: getAge(birthdate)
//     }
// }

const buildMakePerson = ({ getUUID, getAge }) => {

    return ({name, birthdate}) => { 
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}

// const jorge = buildPerson(obj); 

// console.log(jorge);


module.exports = {
    // buildPerson,
    buildMakePerson,
}
