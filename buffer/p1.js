// buffer module => memory allocation , it stores the data in ascii format -> size 8 bits

const buf = Buffer.alloc(4) // allocate buffer memory
console.log('safe memory =', buf)

const buf1 = Buffer.allocUnsafe(4) // un safe buffer
console.log(`unsafe memory =`, buf1)

// from => decodes the unicode characters into ascii
const buf2 = Buffer.from('Be-Practical') 
console.log(`from =`, buf2)
console.log(`from =`, buf2.toString())

// contact
const a1 = Buffer.from("Welcome to ")
const a2 = Buffer.from("node js server script.")

const res = [a1,a2]
const out = Buffer.concat(res)

console.log(`output =`, out)
console.log(`output =`, out.toString())
