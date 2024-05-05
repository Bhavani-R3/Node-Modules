const util = require('util')

// template
let msgTemplate = `Hi %s, welcome to %s and duration is %d month`;

/* %s => string, %d => number */

let u1 = util.format(msgTemplate,"John","Javascript",1.3);
let u2 = util.format(msgTemplate,"sony","Java",2.5);

console.log(`u1 =`, u1)
console.log(`u2 =`, u2)
