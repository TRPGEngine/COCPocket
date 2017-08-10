const initialState = {
  groupMessage: {
    default: [],
    test: [
      {
        sender: 'text1',
        msg: '你好'
      },
      {
        sender: 'text2',
        msg: '你也好'
      },
      {
        sender: 'admin',
        msg: '这是我自己发的'
      }
    ]
  }
};

module.exports = function group(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_GROUP_MSG':
      let tmp = state.groupMessage;
      let groupUUID = action.groupUUID;
      if (!!groupUUID) {
        if (!tmp[groupUUID]){
          tmp[groupUUID] = [];
        }
        tmp[groupUUID].push(action.msg);
      }else {
        tmp.default.push(action.msg);
      }
      return { groupMessage: tmp };
    default:
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return state;
}