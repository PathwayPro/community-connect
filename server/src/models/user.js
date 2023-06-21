const { Sequelize, DataTypes } = require("sequelize");

/*  For postgres: https://www.makeuseof.com/use-postgresql-with-sequelize-in-nodejs/
// Connection parameters
const sequelize = new Sequelize('database', 'username', 'password')

// with URI
const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI)
*/
const sequelize = new Sequelize("sqlite::memory:");
const User = sequelize.define("User", {
  username: DataTypes.STRING,
});
User.sync();
module.exports = User;
