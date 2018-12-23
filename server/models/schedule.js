const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = Schema({
 
  monday: {
    type: Array
  },
  tueday: {
    type: Array
  },
  wedday: {
    type: Array
  },
  thuday: {
    type: Array
  },
  friday: {
    type: Array
  },
  satday: {
    type: Array
  },
  sunday: {
    type: Array
  }
  
})

module.exports = mongoose.model('schedule', ScheduleSchema);
