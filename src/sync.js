const seq = require('./seq');

require('./model');


// 测试链接
seq.authenticate().then(() => {
  console.log('auth ok')
}).catch(() => {
  consolr.log('auth err')
})

// 执行同步
seq.sync({ force: true }).then(() => {
  console.log('sync ok')
  process.exit()
})