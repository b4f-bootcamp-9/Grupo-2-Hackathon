const { ObjectId } = require('mongodb');
const Token = require("../models/Token");
async function CreateToken(userId, token) {
    let tokenObj = new Token({ user_id: userId, token });
    await tokenObj.save();
}

async function FindToken(token) {

    return await Token.findOne({ token });
}

module.exports = { CreateToken, FindToken };