const api = require('express').Router()
const personal = require('../controllers/personalController')

api.get('/personal', personal.getAll)
api.get('/personal/:id', personal.getById)
api.post('/personal', personal.create)
api.put('/personal/:id', personal.update)
api.delete('/personal/:id', personal.deleteById)

module.exports = api
