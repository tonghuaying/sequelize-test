const { Blog, User } = require('./model');

!(async function() {
  // 查询一条数据
  const zhangsan = await User.findOne({
    where: {
      userName: 'zhangsan',
    }
  });
  console.log('zhangsan: ', zhangsan.dataValues)

  // 查询特定的列
  const zhangsanName = await User.findOne({
    attributes: ['userName', 'nickName'],
    where: {
      userName: 'zhangsan'
    }
  });
  console.log('zhangsanname', zhangsanName.dataValues);

  // 查询一个列表
  const zhangsanBlogList = await User.findAll({
    where: {
      userId: 1,
    },
    order: [
      ['id', 'desc']
    ]
  });
  console.log('zhangsanBlogList: ', zhangsanBlogList.map(blog => blog.dataValues))

  // 分页
  const blogPageList = await Blog.findAll({
    limit: 2,
    offset: 0,
    order: [
      ['id', 'desc']
    ]
  });
  console.log('blogPageList: ', blogPageList.map(blog => blog.dataValues))

  // 查询总数
  const blogPageListCount = await Blog.findAndCountAll({
    limit: 2,
    offset: 0,
    order: [
      ['id', 'desc']
    ]
  });
  console.log('blogPageListCount: ', 
  blogPageListCount.count,
  blogPageListCount.rows.map(blog => blog.dataValues));

  //连表查询1
  const bloglistwithuser = await Blog.findAndCountAll({
    order: [
      ['id', 'desc']
    ],
    include: [
      {
        model: User,
        attributes: ['username', 'nickname'],
        where: {
          username: 'zhangsan'
        }
      }
    ]
  });
  console.log('bloglistwithuser ',
  bloglistwithuser.count,
  bloglistwithuser.rows.map(blog => {
    const blogVal = blog.dataValues;
    blogVal.user = blogVal.user.dataValues;
    return blogVal
  }));

  // 连表查询2
  const userListWithBlog = await User.findAndCountAll({
    attributes: ['username', 'nickname'],
    include: [
      {
        model: Blog
      }
    ]
  })


})();