const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = Schema({

  title: String,
  fname:String,
  lname:String,
  picture:String,

  scheduleid: [{
    type: Schema.Types.ObjectId,
    ref: 'schedule'
  }]
})

module.exports = mongoose.model('teacher', TeacherSchema);
