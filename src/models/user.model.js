export default function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
    },
    session: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate (models) {
        // User.hasMany(models.Ride, {
        //   onDelete: 'cascade',
        //   foreignKey: 'userId',
        // });
        // User.hasMany(models.Reservation, {
        //   onDelete: 'cascade',
        //   foreignKey: 'userId',
        // });
      },
    },
  });
  return User;
};
