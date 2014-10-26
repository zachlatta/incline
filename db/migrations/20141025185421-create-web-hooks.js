"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable(
      'web_hooks',
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
        event: DataTypes.TEXT,
        url: DataTypes.TEXT
      }
    );
    done();
  },

  down: function(migration, DataTypes, done) {
    migration.dropTable('web_hooks');
    done();
  }
};
