module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: { type: Sequelize.STRING, unique: true, allowNull: false },
      email: { type: Sequelize.STRING, unique: true, allowNull: false },
      photo: { type: Sequelize.STRING },
      session: { type: Sequelize.STRING, unique: true, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  },
};
