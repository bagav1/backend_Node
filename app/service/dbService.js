const { Sequelize } = require('sequelize')
const Person = require('../models/personalModel')

const db = {
  dialect: 'mysql',
  host: 'localhost',
  database: 'test_api',
  user: 'root',
  password: ''
}

const serv = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: db.dialect
})

serv.authenticate({ logging: false }).then(() => {
  console.log('Connection has been established successfully.')
}).catch(err => {
  console.error('Unable to connect to the database: ', err)
})

const tPerson = Person(serv, Sequelize)

serv.sync({ force: false, logging: false }).then(() => {
  console.log('Database & tables created!')
})

module.exports = {
  tPerson
}
