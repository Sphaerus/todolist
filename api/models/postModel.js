'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  body: {
    type: String,
    required: 'Kindly enter the name of the task'
  }
});

module.exports = mongoose.model('Posts', PostSchema);
