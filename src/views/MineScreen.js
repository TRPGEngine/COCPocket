const React = require('react');
const { StyleSheet, ScrollView, Button } = require('react-native');
const { connect } = require('react-redux');
const sb = require('react-native-style-block');
const color = require('../util/color');
const Avatar = require('./components/mine/Avatar');
const List = require('./components/mine/List');

class MineScreen extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Avatar />
        <List />
      </ScrollView>
    )
  }
}

MineScreen.navigationOptions = props => {
  return {
    headerRight: (
      <Button
        title='编辑'
        onPress={() =>
          alert('编辑')
        }
      />
    ),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

module.exports = connect(mapStateToProps)(MineScreen);