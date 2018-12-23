const express = require('express');
const router = express.Router();
const Teacher = require('../models/teacher');
const Schedule = require('../models/schedule');

router.get('/show', (req, res) => {
    Teacher.find({}).populate({ path: 'scheduleid' }).exec((err, Teacher) => {
        res.json(Teacher);
    })
})

router.get('/show/:id', (req, res) => {
    Teacher.findById({_id: req.params.id}).populate({path: 'scheduleid'}).exec((err, Teacher) => {
        res.json(Teacher);
    })
})

router.post('/add', (req, res) => {
    Teacher.create(req.body).then((Teacher) => {
        res.send(Teacher);
    })
})

router.post('/schedule', (req, res) => {
    Schedule.create(req.body).then((Schedule) => {
        res.send(Schedule);
    })
})

module.exports = router;