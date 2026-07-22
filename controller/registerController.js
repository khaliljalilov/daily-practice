const dataDB = {
    users : require('../data/dataDB.json'),
    setUsers : function(data){
        this.users = data
    }
}
const fsPromise = require('fs').promises
const path = require('path')
const bcrypt = require('bcrypt')
const handleNewUser =async (req, res) => {
    try{

    const { name, pwd } = req.body

    if (!name || !pwd) {
        return res.status(403).json({ 'message': "user and password is empty" })
    }

    const dublicate = await dataDB.users.find(person => person.username === name)

    if (dublicate) {
        return res.status(409).json({ 'message': "this user already exist" })

    }

    const hashedPwd = await bcrypt.hash(pwd, 10)

    const userInfo = {
        username: name,
        password: hashedPwd
    }
    await dataDB.setUsers([...dataDB.users , userInfo])
    await fsPromise.writeFile(path.join(__dirname,'..','data','dataDB.json'),
    JSON.stringify(dataDB.users, null ,2))
    console.log('new user created');
    
   return res.status(201).json({'message':'user created'})
} catch(err){
console.log(err);
return res.status(400).json({'message':'An error occurred!'})
}
}

module.exports = {handleNewUser}