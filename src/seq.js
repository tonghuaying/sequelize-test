const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  dialect: 'mysql',
};

const seq = new Sequelize('koa2_weibo_db', 'root', 'root123456', config );





module.exports = seq;