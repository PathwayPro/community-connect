'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupMentorshipEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupMentorshipEvent.init({
    eventTitle: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    eventUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GroupMentorshipEvent',
  });
  return GroupMentorshipEvent;
};