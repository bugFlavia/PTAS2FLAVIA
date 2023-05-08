'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('pessoas', [
        {nome:'Taylor', sobrenome:'Swift', idade:32},
        {nome:'Lana', sobrenome:'Del Rey', idade:37},
        {nome:'Billie', sobrenome:'Eilish', idade:21},
        {nome:'Conan', sobrenome:'Gray', idade:24},
        {nome:'Marina', sobrenome:'The diamonds', idade:37}
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('pessoas', null, {});
  }
};
