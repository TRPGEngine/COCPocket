import { NavigationActions } from 'react-navigation';
import { StackNav, TabNav } from '../AppNavigator';
const stackAction = StackNav.router.getActionForPathAndParams('Root');
const stackState = StackNav.router.getStateForAction(stackAction);
const tabAction = TabNav.router.getActionForPathAndParams('main');
const initialNavState = TabNav.router.getStateForAction(tabAction, stackState);

module.exports = function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
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
      // alert(JSON.stringify(state.index));
      nextState = StackNav.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}