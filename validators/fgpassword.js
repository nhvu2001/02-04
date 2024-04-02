let { check } = require('express-validator');
let util = require('node:util')
let option = {
    password: {
        minLength: 6,
        minNumbers: 1,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1
    }
}
module.exports = {
    checkChain: function () {
        return [
            check("password", util.format("password phai dai it nhat %d ki tu,%d ki tu dat biet, %d chu in hoa, %d chu thuong,%d so", 
            option.password.minLength, option.password.minSymbols, 
            option.password.minUppercase, option.password.minLowercase, 
            option.password.minNumbers)).isStrongPassword(option.password)
        ]
    }
}