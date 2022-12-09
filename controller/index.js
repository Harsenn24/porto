let { User } = require("../model/index");

class StoreController {
    static async get_user(req, res) {
        try {
            
            const get_user = await User.find()

            console.log(get_user)
           
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = { StoreController }