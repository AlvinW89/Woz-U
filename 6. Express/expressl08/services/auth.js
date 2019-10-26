const jwt = require('jsonwebtoken');
const models = require('../models');
const bcrypt = require("bcryptjs");

var authService={
    signUser: function(user){
        const token = jwt.sign({
            UserName: user.UserName,
            UserId: user.UserId,
            Admin: user.Admin
        }, 'secretKey', 
        {
            expiresIn: '1h'
        });
    return token;
    },
    verifyUser: (token) => {//<--- receive JWT token as parameter
       try {
        let decoded = jwt.verify(token, 'secretKey');//<--- Decrypt token using same key used to encrypt
        return models.users.findByPk(decoded.UserId); //<--- Return result of database query as promise
       } catch(err){
        console.log(err);
        return null;
       }
    },
    hasPassword: (plainTextPassword) => {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(plainTextPassword, salt);
        return hash;
    },
    comparePassword: function(plainTextPassword, hasPassword) {
        return bcrypt.compareSync(plainTextPassword, hasPassword);
    }

}

module.exports = authService;