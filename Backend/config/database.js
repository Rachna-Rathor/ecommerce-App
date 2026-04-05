const mongoose = require('mongoose');
require("dotenv").config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connected successfully");
    } catch (error) {
        console.log("Issue in DB connection");
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = dbConnect;