const mongoose = require('mongoose');
const { user_schema, temp_code } = require('../schema');
const Schema = mongoose.Schema

const users = new Schema(user_schema, { collection: "users" })
const User = mongoose.model('User', users)

const temp_codes = new Schema(temp_code, { collection: "temp_code" })
const Temp_code = mongoose.model('Temp_code', temp_codes)


module.exports = { User, Temp_code }
