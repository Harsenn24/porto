const { ObjectId } = require("mongodb")

const user_schema = {
    username: { type: String },
    birthday_date: { type: Number },
    password: { type: String },
    email: { type: String },
    status: { type: Boolean },
    epoch: { type: Number },
    full_name: {type : Array}
}

const temp_code = {
    code: { type: String },
    email: { type: String },
    user_id: {type : ObjectId}
}

module.exports = { user_schema, temp_code }