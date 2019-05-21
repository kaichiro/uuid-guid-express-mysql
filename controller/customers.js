const customers = require('../models/customer')

const index = async (connection, req, res) => {
    const results = await customers.findAll(connection)
    res.render('customers/index', { customers: results })
}

const createForm = (req, res) => {
    res.render('customers/create')
}
const createProcess = async(connection,req,res)=>{
    await customers
}

module.exports = {
    index,
    createForm,
}