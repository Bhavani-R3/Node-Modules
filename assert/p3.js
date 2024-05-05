const assert = require('assert')

const x = {
    name: "john"
}

const y = [
    {
        name: "david"
    }
]

const z = [
    {
        name: "david"
    }
]

assert.notDeepStrictEqual(y,z)