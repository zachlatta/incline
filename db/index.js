var Sequelize = require('sequelize')
  , sequelize = null;

module.exports = {
  connect: function (dbURL, errCallback) {
    sequelize = new Sequelize(dbURL, {
      logging: false
    });

    var Login = sequelize.define('login', {
      bank: Sequelize.TEXT,
      username: {
        type: Sequelize.TEXT,
        unique: true
      },
      password: Sequelize.TEXT
    });

    module.exports.Login = Login;

    sequelize
      .authenticate()
      .complete(errCallback);
  },

  Sequelize: Sequelize,
  sequelize: sequelize
}
