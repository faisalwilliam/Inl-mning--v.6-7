'use strict';
/** @type {import('sequelize-cli').Migration} */
      module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('telefon', {
      name: {
        Iphone: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id: {
        id:  "3",
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      tilte: {
        type: Sequelize.STRING
      },
      descriptin: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      descountPercentage: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('telefon');
  }
};