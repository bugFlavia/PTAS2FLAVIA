'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {nome: 'Taylor Swift squad'},
      {nome:'Zendaya'},
      {nome:'Blake Lively'},
      {nome:'Ed Sheran'},
      {nome:'Gigi Hadid'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('usuarios', null, {});
  }
};
