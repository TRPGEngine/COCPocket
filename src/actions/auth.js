const socket = require('../socket');

let login = function login(serverUrl, username, password) {
  socket.setServerUrl(serverUrl);
  socket()

  return {
    type: 'LOGIN',
  }
}

module.exports = {
  login
}