const React = require('react');
const { StyleSheet, ScrollView, TouchableOpacity, Text, Button } = require('react-native');
const { connect } = require('react-redux');
const sb = require('react-native-style-block');
const color = require('../util/color');
const Avatar = require('./components/mine/Avatar');
const List = require('./components/mine/List');

class MineScreen extends React.Component {
  _logout() {
    alert('logout');
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Avatar />
        <List />
        <TouchableOpacity style={styles.logoutBtn} onPress={this._logout}>
          <Text style={[sb.color('#FFFFFF'),sb.font(16)]}>退出登录</Text>
        </TouchableOpacity>
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

const styles = {
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoutBtn: [
    sb.bgColor('red'),
    sb.size(null, 44),
    sb.center(),
    sb.margin(10,0,0,0),
  ]
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

module.exports = connect(mapStateToProps)(MineScreen);