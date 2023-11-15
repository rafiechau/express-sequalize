'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
        title: 'Samsung Galaxy A8',
        description: 'ini adalah handphone yang sangat waw',
        stok: 10,
        harga: 1800000,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 1
      },
      {
        title: 'Xiami Mi 10',
        description: 'ini adalah handphone yang sangat waw',
        stok: 20,
        harga: 2800000,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 1
      },
      {
        title: 'Baju Erigo',
        description: 'ini adalah baju yang sangat waw',
        stok: 100,
        harga: 800000,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 2
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  }
};
