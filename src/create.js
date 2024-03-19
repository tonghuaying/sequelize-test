// insert ...
const { Blog, User } = require('./model');

!(async function(){
  // 创建用户
  const zhangsan = await User.create({
    username: 'zhangsan',
    password: '123',
    nickname: '张三'
  })
  const zhangsanId = zhangsan.dataValues.id;
  // insert into user(...) values(...)
  console.log(zhangsan, zhangsan.dataValues)

  const lisi = await User.create({
    username: 'lisi',
    password: '123',
    nickname: '莉丝'
  });
  const lisiId = lisi.dataValues.id;

  //创建博客
  const blog1 = await Blog.create({
    title: 'title 1',
    content: 'content 1',
    userId: zhangsanId
  })
  const blog2 = await Blog.create({
    title: 'title 2',
    content: 'content 2',
    userId: zhangsanId
  });
  const blog3 = await Blog.create({
    title: 'title 3',
    content: 'content 3',
    userId: lisiId
  });
  const blog4 = await Blog.create({
    title: 'title 4',
    content: 'content 4',
    userId: lisiId
  });
})();