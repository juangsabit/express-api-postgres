module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "juang123",
    DB: "api-express",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };