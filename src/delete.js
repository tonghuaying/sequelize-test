const { Blog, User } = require('./model');

!(async function() {
  const deleteRes = await Blog.destroy({
    where: {
      id: 4
    }
  });
  console.log('deleteRes...', deleteRes[0] > 0)
})()