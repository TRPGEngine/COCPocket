const React = require('react');
const { connect } = require('react-redux');
const { addNavigationHelpers, StackNavigator, TabNavigator } = require('react-navigation');
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = require('./views/LoginScreen');
const MainScreen = require('./views/MainScreen');
const MineScreen = require('./views/MineScreen');
import GroupScreen from './views/GroupScreen';

const MyNotificationsSettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);
const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}s Profile`}
    navigation={navigation}
  />
);

export const TabNav = TabNavigator({
  MainTab: {
    screen: MainScreen,
    path: 'main',
    navigationOptions: {
      title: '主页',
      tabBarLabel: '主页',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Group: {
    screen: GroupScreen,
    path: 'group',
    navigationOptions: {
      title: '组',
      tabBarLabel: '组',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  MineTab: {
    screen: MineScreen,
    path: 'mine',
    navigationOptions: {
      title: '我',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-person' : 'ios-person-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  })

export const StackNav = StackNavigator({
  Root: { screen: TabNav },
  Login: { 
    screen: LoginScreen,
    navigationOptions: {
      title: '登录',
    },
  },
  Main: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!`;
    },
  }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <StackNav navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  nav: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
