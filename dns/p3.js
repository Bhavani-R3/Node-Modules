const dns = require('dns')

// return ip address of the current host
console.log(dns.getServers())

// resolve any
dns.resolveAny('www.amazon.com', (err,ret) => {
    console.log('records = %j',ret);
})