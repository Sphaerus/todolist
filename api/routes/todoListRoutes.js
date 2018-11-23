'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var posts = require('../controllers/postsController');

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/posts')
    .get(posts.index)
    .post(posts.create);
  app.route('/posts/:postId')
    .get(posts.show)
};
