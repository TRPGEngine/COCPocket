const React = require('react');
const { connect } = require('react-redux');
const {
  StyleSheet,
  Text,
  View,
  StatusBar
} = require('react-native');
const LoginScreen = require('./views/LoginScreen');
import AppWithNavigationState from './AppNavigator';

class COCPocket extends React.Component {
  render() {
    return (
      <AppWithNavigationState />
    )
  }
}

module.exports = COCPocket;