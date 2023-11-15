'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        title: 'Electronics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Clothing',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
