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

  render() {
    let { groups, isLoggedIn, loginScreen } = this.props;
    return (
      <ScrollView style={styles.container}>
        {
          isLoggedIn
            ? groups.map((item, index) => (
              <GroupCell
                key={index}
                info={item}
              />
            ))
            : (
              <TouchableOpacity style={{marginTop:200}} onPress={loginScreen}>
                <Text style={styles.loginTip}>请先登录</Text>
              </TouchableOpacity>
            )
        }
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