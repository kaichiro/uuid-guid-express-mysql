const express = require('express')
const customersController = require('../controller/customers')

const customersRouter = ({ connection }) => {
    const router = express.Router()

    router.get('/', customersController.index.bind(null, connection))

    router.get('/create', customersController.createForm)
    router.post('/create',customersController.crea)

    return router
}

module.exports = customersRouter