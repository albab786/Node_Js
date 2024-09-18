const os=require('os')
const user=os.userInfo()
console.log(user)
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Hostname:', os.hostname());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('Uptime (seconds):', os.uptime());
console.log('User Info:', os.userInfo());
console.log('CPU Info:', os.cpus());
