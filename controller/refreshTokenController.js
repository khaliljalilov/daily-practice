const dataDB = {
    users: require('../data/dataDB.json'),
    setUsers: function (data) {
        this.users = data
    }
}
const jwt = require('jsonwebtoken')

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies
try{
    if (!cookies?.jwt) return res.status(401).json({ 'message': '' })
    const refreshtoken = cookies?.jwt

    const foundUser = dataDB.users.find(u => u.refreshToken === refreshtoken)

    if (!foundUser) return res.status(403).json({ 'message': '' })

    jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET , (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        
        const accesstoken = jwt.sign(
            {username: foundUser.username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'30s'}

        )
       return res.json({accessToken: accesstoken})

    })}
    catch(err){
       return res.status(400).json({'message':'An error ocured'})
    }

}

module.exports = {handleRefreshToken}