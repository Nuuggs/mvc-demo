const initReservationModel = (sequelize, DataTypes) => {
  return sequelize.define('reservation', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    drummerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'drummers',
          key: 'id',
        }
      },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    underscored: true
  });
};

module.exports = initReservationModel;