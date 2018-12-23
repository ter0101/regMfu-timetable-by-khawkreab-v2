const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./server/routes/api')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', api)
app.use(express.static(path.join(__dirname, 'dist/regMfu/')))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname), 'index.html')
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running')
})

const mongoClient = require('mongoose')
const dbDocker = 'mongodb://192.168.99.100:27017/regMfu-timetable';
const db = 'mongodb://localhost:27017/regMfu-Mricoservice';
mongoClient.Promise = global.Promise
mongoClient.connect(dbDocker, (err) => {
  if (err) {
    console.log("Error" + err);
  }
})
