"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'accounts',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        },
        bank: DataTypes.TEXT,
        username: {
          type: DataTypes.TEXT,
          unique: true
        },
        password: DataTypes.TEXT
      }
    );
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('accounts');
    done();
  }
};
