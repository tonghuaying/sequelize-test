const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  dialect: 'mysql',
};
config.pool = {
  max: 5, // 连接池中最大的链接数量
  min: 0, 
  idle: 10000 // 如果一个连接池 10s 之内没被使用，则释放
}

const seq = new Sequelize('koa2_weibo_db', 'root', 'root123456', config );


// 测试链接
// seq.authenticate().then(() => {
//   console.log('auth ok')
// }).catch(() => {
//   console.log('auth err')
// })


module.exports = seq;