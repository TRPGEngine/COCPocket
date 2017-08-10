const React = require('react');
const { StyleSheet, ScrollView, View, Text, TouchableOpacity } = require('react-native');
const { connect } = require('react-redux');
const { NavigationActions } = require('react-navigation');
const GroupCell = require('./GroupCell');

class GroupList extends React.Component {
  _showLogin() {
    // this.props.loginScreen();
    alert(JSON.stringify(this.props));
  }

  getList() {
    let { groups, isLoggedIn, loginScreen } = this.props;

    if(!isLoggedIn) {
      return (
        <TouchableOpacity style={{ marginTop: 200 }} onPress={loginScreen}>
          <Text style={styles.loginTip}>请先登录</Text>
        </TouchableOpacity>
      )
    }else {
      if(groups.length == 0) {
        return (
          <TouchableOpacity style={{ marginTop: 200 }}>
            <Text style={styles.loginTip}>您暂时没有团哦</Text>
          </TouchableOpacity>
        )
      }else {
        return (
          groups.map((item, index) => (
            <GroupCell
              key={index}
              info={item}
            />
          ))
        )
      }
    }
  }

  render() {
    let list = this.getList();
    return (
      <ScrollView style={styles.container}>
        {list}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  loginTip: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#4A90E2',
  },
})

const mapStateToProps = state => ({
  groups: state.group.groups,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(GroupList);