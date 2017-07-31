const {combineReducers} = require('redux');

let reducers = combineReducers({
  test: function(state=0, action) {
    return state++;// 作为测试
  }
});

module.exports = reducers;