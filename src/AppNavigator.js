const React = require('react');
const {connect} = require('react-redux');
const { addNavigationHelpers, StackNavigator } = require('react-navigation');
// import { addNavigationHelpers, StackNavigator } from 'react-navigation';

const LoginScreen = require('./views/LoginScreen');
const MainScreen = require('./views/MainScreen');

export const AppNavigator = StackNavigator({
  Login: {screen: LoginScreen},
  Main: {screen: MainScreen}
});

const AppWithNavigationState = ({dispatch, nav}) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  nav: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
