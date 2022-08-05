const { Sequelize } = require("sequelize");
  
  const sequelize = new Sequelize(
    "crud",
    "postgres",
    "12344321",
    // process.env.DATABASE_URL,
    {
      dialect: "postgres",
      protocol: "postgres",
      logging: false,
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }
  );
  
  module.exports = sequelize;
  