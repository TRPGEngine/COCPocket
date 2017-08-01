const React = require('react');
const { connect } = require('react-redux');
const { addNavigationHelpers, StackNavigator, TabNavigator } = require('react-navigation');
const Ionicons = require('react-native-vector-icons/Ionicons');

const LoginScreen = require('./views/LoginScreen');
const MainScreen = require('./views/MainScreen');

export const TabNav = TabNavigator({
  MainTab: {
    screen: MainScreen,
    path: 'main',
    navigationOptions: {
      title: '主页',
      tabBarLabel: '主页',
      // tabBarIcon: ({ tintColor, focused }) => (
      //   <Ionicons
      //     name={focused ? 'ios-home' : 'ios-home-outline'}
      //     size={26}
      //     style={{ color: tintColor }}
      //   />
      // )
    }
  },
  SettingsTab: {
    screen: MainScreen,
    path: 'settings',
    navigationOptions: {
      title: '设置',
      // tabBarIcon: ({ tintColor, focused }) => (
      //   <Ionicons
      //     name={focused ? 'ios-settings' : 'ios-settings-outline'}
      //     size={26}
      //     style={{ color: tintColor }}
      //   />
      // ),
    }
  }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  })

export const stackNav = StackNavigator({
  Root: { screen: TabNav },
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <TabNav navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  nav: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
