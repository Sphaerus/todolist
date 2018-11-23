'use strict';

var mongoose = require('mongoose'),
  Post = mongoose.model('Posts');

exports.index = function(req, res) {
  Post.find({}, function(err, posts) {
    res.render('posts/index', {
      posts: posts
    });
  });
};

exports.show = function(req, res) {
  Post.findById(req.params.postId, function(err, post) {
    if (err)
      res.send(err);
    res.render('posts/show', {
      post: post
    });
  });
};

exports.create = function(req, res) {
  var new_post = new Post(req.body);
  new_post.save(function(err, post) {
    res.render('posts/show', {
      post: post
    });
  });
};
