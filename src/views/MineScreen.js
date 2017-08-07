const React = require('react');
const { StyleSheet, View, Text, Button } = require('react-native');
const { connect } = require('react-redux');

class MainScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <View style={styles.container}>
        <Text>我{JSON.stringify(isLoggedIn)}</Text>
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

// module.exports = MainScreen;
module.exports = connect(mapStateToProps)(MainScreen);