const React = require('react');
const { StyleSheet, View, Text, Button } = require('react-native');
const { NavigationActions } = require('react-navigation');
const { connect } = require('react-redux');

class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>主页</Text>
        <Button title="打开聊天框" onPress={this.props.chatScreen} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  chatScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Chat', params: {name: 'test'}})),
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(MainScreen);