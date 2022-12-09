const mongoose = require('mongoose');
const { user_schema } = require('../schema');
const Schema = mongoose.Schema

const users = new Schema(user_schema, { collection: "users" })
const User = mongoose.model('User', users)


module.exports = {User}
