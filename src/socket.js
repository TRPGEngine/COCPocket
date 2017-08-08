const socketClient = require('socket.io-client');
let platformSocketParam = {};
let serverUrl = '';

if (window.navigator.product === 'ReactNative') {
  window.navigator.userAgent = 'react-native';
  window.location = {};
  window.location.protocol = 'http:';
  platformSocketParam = { jsonp: false };
}else {
  if (process.env.NODE_ENV === 'production') {
    platformSocketParam = { secure: true };
  }
}

module.exports = function() {
  return socketClient(serverUrl, platformSocketParam);
}

exports.setServerUrl = function (url) {
  serverUrl = url;
}