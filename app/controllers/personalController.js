const { tPerson } = require('../service/dbService')

const getAll = async (_req, res) => {
  tPerson.findAll().then(data => {
    return res.json(data)
  }).catch(err => {
    return res.json(err)
  })
}

const getById = async (req, res) => {
  tPerson.findOne({ where: { id: req.params.id } }).then(data => {
    if (data === null) {
      return res.json({ error: 'Register not found' })
    }
    return res.json(data)
  }).catch(() => {
    return res.json({ error: 'Register not found' })
  })
}

const create = async (req, res) => {
  tPerson.create(req.body).then(newPerson => {
    return res.json({ data: newPerson })
  }).catch(() => {
    return res.json({ error: 'Wrong data' })
  })
}

const update = async (req, res) => {
  tPerson.update(req.body, { where: { id: req.params.id } }).then(data => {
    if (data === null) {
      return res.json({ error: 'Register not found' })
    }
    return res.json({ data: req.body })
  }).catch(() => {
    return res.json({ error: 'Register not found' })
  })
}

const deleteById = async (req, res) => {
  tPerson.destroy({ where: { id: req.params.id } }).then(data => {
    if (data === null) {
      return res.json({ error: 'Register not found' })
    }
    return res.json({ data: `Register deleted Id: ${req.params.id}` })
  }).catch(() => {
    return res.json({ error: 'Register not found' })
  })
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
}
