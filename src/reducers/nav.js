import { NavigationActions } from 'react-navigation';
import { TabNav } from '../AppNavigator';
const firstAction = TabNav.router.getActionForPathAndParams('main');
const initialNavState = TabNav.router.getStateForAction(firstAction);

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
      nextState = TabNav.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}