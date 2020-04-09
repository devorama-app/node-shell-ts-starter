require("dotenv").config();
const { env } = require("process");

const config = {
  shellPath: "shell",
  db: {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
  },
};

module.exports = config;
