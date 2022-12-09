
const cors = require("cors");
require("dotenv").config()
const express = require("express");
const app = express();
const port = 3005
const { connect_db } = require("./config/index");
const router = require("./routes/index");
// const { handleError } = require("./middleware/errorHandle")
// const { errorEP } = require("./middleware/errorEndpoint")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(router)
// app.use(errorEP)
// app.use(handleError)


connect_db().then(async (db) => {
    console.log("Success Connected to MongoDB!");
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});






