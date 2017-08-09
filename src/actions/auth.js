const getInstance = require('../socket');

let _login = function(username, password) {
  console.log(username, password);
  let socket = getInstance();
  return new Promise((resolve, reject) => {
    console.log(socket);
    if (!!socket && socket.connected) {
      console.log('start login');
      socket.emit('player::login', { username, password }, function (data) {
        let { result, info } = data;
        console.log('player::login', data);
        if (result) {
          resolve(info);
        } else {
          reject();
        }
      })
    }else {
      reject();
    }
  })
}

let login = function login(serverUrl, username, password) {
  return (dispatch) => {
    const login = _login(username, password);
    login.then(
      (result) => dispatch({ type: 'LOGIN_SUCCESS', info: result})
    ).catch(
      () => dispatch({ type:'LOGIN_ERROR' })
    )
  }
}

module.exports = {
  login
}