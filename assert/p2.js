const assert = require('assert')

const x = {
    name: "john"
}

const y = [
    {
        name: "david"
    }
]

// deepStrictEqual => validates type, structure, prop and value

assert.deepStrictEqual(x,y)