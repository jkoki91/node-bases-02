

const users = [
    {id: 1, name: 'John Doe'},  
    {id: 2, name: 'John Doe'}
]

function getUserById(id, callback) {    
    const user = users.find(user => user.id === id);
    if (!user) {
        callback(`User with id ${id} not found`);
    } else {
        callback(null, user);
    }
}   

module.exports = {  
    getUserById,
}


