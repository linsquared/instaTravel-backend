require("dotenv").config();

module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    // CHECK ENV EXAMPLE
    password: process.env.DB_LOCAL_PASSWORD,
    database: "insta_travel ",
    charset: "utf8",
  },
};