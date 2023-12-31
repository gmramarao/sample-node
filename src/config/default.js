const {
  PORT,
  DB_PASSWORD,
  DB_USER,
  DATABASE
} = process.env;

module.exports = {
  env: process.env.NODE_ENV || "development",
  port: PORT,
  DB_PASSWORD: DB_PASSWORD,
  DB_USER: DB_USER,
  DATABASE: DATABASE
};
