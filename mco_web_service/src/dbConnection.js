const mongoose = require("mongoose");
/**  enviroment variables require */
require("dotenv").config();

/** Conecction to mongoDB with the credentials on .env file */
const connection = async () => {
  console.log(`DB connected`);
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mcocluster.r0mkq.mongodb.net/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
  } catch (error) {
    console.log("Can't connect to DB");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connection;
