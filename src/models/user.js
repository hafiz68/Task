const db = require("../config/config");
const { Sequelize } = require("sequelize");

const Users = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: Sequelize.STRING(50),
    
  },
  lastName: {
    type: Sequelize.STRING(50),
    
  },
  gender: {
    type: Sequelize.STRING(50),
    
  },
  country: {
    type: Sequelize.STRING(50),
    
  },
  age: {
    type: Sequelize.INTEGER,
    
  },
  date: {
    type: Sequelize.STRING(50),
    
  },
});

module.exports = Users;