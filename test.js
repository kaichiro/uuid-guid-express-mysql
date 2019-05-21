const uuid = require('uuid/v4')

const details = [
    { id: uuid(), quantity: 2 },
    { id: uuid(), quantity: 5 },
]
const master = {
    id: uuid(),
    date: new Date(),
    details,
}

const master2 = { ...master, test: '1.2' }

console.log(master)
console.log(master2)
master2.id = uuid()
console.log(master2)