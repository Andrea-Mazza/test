const os = require('os');

const user = os.userInfo();

document.getElementById('block').innerHTML = `${user}`;