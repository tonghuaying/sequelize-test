const Sequelize = require('sequelize');
const seq = require('./seq');

// 创建 user 模型。数据表的名字是 users
const User = seq.define('user', {
  // id 会自动创建，并设为主键、自增
  username: {
    type: Sequelize.STRING, // varchar(255)
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nickname: {
    type: Sequelize.STRING,
    comment: '昵称'
  }
  // 自动创建： createdAt and updatedAt
})

// 创建 blog 模型
const Blog = seq.define('blog', {
  // id 会自动创建，并设为主键、自增
  title: {
    type: Sequelize.STRING, // varchar(255)
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
  // 自动创建： createdAt and updatedAt
})

// 外键关联
Blog.belongsTo(User, {
  // 创建外键 Blog.userId -> User.id
  foreignKey: 'userId'
})
User.hasMany(Blog, {
  // 创建外键 Blog.userId -> User.id
  foreignKey: 'userId'
})

module.exports = {
  User,
  Blog
}