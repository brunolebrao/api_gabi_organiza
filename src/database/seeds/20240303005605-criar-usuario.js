/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      isBetaMember: false,
    }], {});
  },

  down() {
    console.log('down');
  },
};
