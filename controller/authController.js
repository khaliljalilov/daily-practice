const dataDB = {
    users: require('../data/dataDB.json'),
    setUsers: function (data) {
        this.users = data
    }
}
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fsPromise = require('fs').promises
const path = require('path')

const loginUser = async (req, res) => {
    try {
        const { name, pwd } = req.body;
        if (!name || !pwd) return res.status(401).json({ 'message': 'name and password required' })
        const foundUser = await dataDB.users.find(u => u.username === name)
        if (!foundUser) return res.status(403).json({ 'message': 'invalid username' })

        const match = bcrypt.compare(pwd, foundUser.password);

        if (!match) return res.status(401).json({ 'message': 'invalid password' });


        const accessToken = jwt.sign(
            { username: foundUser.username },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s' }
        )
        const refreshToken = jwt.sign(
            {username: foundUser.username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        )

        foundUser.refreshToken = refreshToken

        await fsPromise.writeFile(path.join(__dirname,'..','data','dataDB.json'),
    JSON.stringify(dataDB.users ,null, 2))
      

        res.cookie('jwt' , refreshToken , {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000

        })
        
        return res.json({ accessToken })
    }
    catch (err) {
        console.log(err);

        return res.status(400).json({ 'message': 'an error occurred' })
    }

}

module.exports = { loginUser }