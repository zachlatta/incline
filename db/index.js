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

    var WebHook = sequelize.define('web_hook', {
      event: Sequelize.TEXT,
      url: Sequelize.TEXT
    });

    module.exports.Login = Login;
    module.exports.WebHook = WebHook;

    sequelize
      .authenticate()
      .complete(errCallback);
  },

  Sequelize: Sequelize,
  sequelize: sequelize
}
