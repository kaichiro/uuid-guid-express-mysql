const uuid = require('uuid/v4')

const customer = {
    id: uuid(),
    name: `kaichiro fukuda - ${new Date()}`,
}

const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        const sqlSelectAll = 'SELECT '
            + 'id id_original'
            + ', BIN_TO_UUID(id) id_transformed'
            + ', name '
            + 'FROM customers '
            + 'order by name;'
        connection.query(sqlSelectAll, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

const create = (connection, data) => {
    return new Promise((resolve, reject) => {
        const sqlInsert = ``
        connection.query(sqlInsert, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

module.exports = {
    findAll,
    create,
}