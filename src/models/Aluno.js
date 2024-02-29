import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
