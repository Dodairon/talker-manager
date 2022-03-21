const encrypt = require('crypto');

function token() {
   return encrypt.randomBytes(8).toString('hex');
}

module.exports = token;
