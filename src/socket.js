let socketClient = null;
let platformSocketParam = {};
if (window.navigator.product === 'ReactNative') {
  socketClient = require('socket.io-client');

  window.navigator.userAgent = 'react-native';
  window.location = {};
  window.location.protocol = 'ws:';
  platformSocketParam = { jsonp: false, transports: ['websocket'] };
}
else {
  socketClient = require('socket.io-client');

  if (process.env.NODE_ENV === 'production') {
    platformSocketParam = { jsonp: false, secure: true, transports: ['websocket'] };
  }
}

function createInterface(method) {
  return function (path, data, cb) {
    if (typeof this.token === 'string' && this.token !== '') {
      data.token = this.token;
    }
    this.emit('message', { method: method, path: path, data: data }, cb);
  };
}

let socket = null;

function setToken(newToken) {
  this.token = newToken;
}

function socketWrap(socket) {
  socket.token = '';
  socket.get = createInterface('GET');
  socket.post = createInterface('POST');
  socket.put = createInterface('PUT');
  socket.delete = createInterface('DELETE');
  socket.setToken = setToken;
  return socket;
}

function getInstance() {
  if(!socket) {
    socket = socketWrap(socketClient(serverUrl, platformSocketParam));
  }

  return socket;
}

const serverUrl = 'ws://127.0.0.1:23256';

module.exports = getInstance;

// # just for test
socket = getInstance();
// socket.emit('hello', { test: 'test' }, function (data) {
//   console.log(data);
// })