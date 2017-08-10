const initialState = {
  online: false,
  groups: []
};

module.exports = function group(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'UPDATE_GROUP':
      return { groups: action.groups};
    // case 'Login':
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.back(),
    //     state
    //   );
    //   break;
    // case 'Logout':
    //   nextState = AppNavigator.router.getStateForAction(
    //     NavigationActions.navigate({ routeName: 'Login' }),
    //     state
    //   );
    //   break;
    default:
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}