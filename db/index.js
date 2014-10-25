var Sequelize = require('sequelize')
  , sequelize = null;

module.exports = {
  connect: function (dbURL, errCallback) {
    sequelize = new Sequelize(dbURL, {
      logging: false
    });

    var Account = sequelize.define('account', {
      bank: Sequelize.TEXT,
      username: {
        type: Sequelize.TEXT,
        unique: true
      },
      password: Sequelize.TEXT
    });

    module.exports.Account = Account;

    sequelize
      .authenticate()
      .complete(errCallback);
  },

  Sequelize: Sequelize,
  sequelize: sequelize,
}
