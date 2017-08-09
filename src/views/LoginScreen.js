import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform, TextInput, Picker } from 'react-native';
const {connect} = require('react-redux');
const Loading = require('./components/Loading');
// import ModalDropdown from 'react-native-modal-dropdown';
const ModalDropdown = require('react-native-modal-dropdown');
const { login } = require('../actions/auth');

const serverList = [
  {
    name: '官方服务器',
    ip: '127.0.0.1',
    port: '23256',
  },
  {
    name: '测试服务器',
    ip: '127.0.0.1',
    port: '23256',
  }
]

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      selectdServer: -1,
      username: '',
      password: '',
    };
  }

  _login(navigation) {
    // alert(JSON.stringify(navigation));
    console.log(navigation);
    
    let username = this.state.username;
    let password = this.state.password;
    let selectdServer = this.state.selectdServer;

    if(selectdServer>=0 && selectdServer < serverList.length) {
      let serverInfo = serverList[selectdServer];
      // alert(JSON.stringify({serverInfo, username, password}));
      this.setState({
        loading: true
      });
      let url = 'ws://' + serverInfo.ip + ":" + serverInfo.port;
      this.props.dispatch(login(url, username, password));
    }else{
      alert('请选择服务器');
    }

    // this.props.dispatch(login);
  }

  render() {
    const { navigation, isLoggedIn} = this.props;
    let list = serverList.map((item) => item.name);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>欢迎来到TRPG的世界{this.state.selectdServer}</Text>
        <View style={styles.textInputViewStyle}>
          <ModalDropdown
            defaultValue='请选择服务器'
            style={styles.serverSelectStyle}
            textStyle={{fontSize:18}}
            dropdownTextStyle={styles.serverSelectTextStyle}
            options={list}
            onSelect={(index, value) => {
              this.setState({
                selectdServer: index
              });
            }}
          />
        </View>
        {/*账号输入框在这里用View包裹以便处理器样式*/}
        <View style={styles.textInputViewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder='账号'
            autoCapitalize='none'
            autoCorrect={false}
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
        </View>
        {/*密码输入框*/}
        <View style={styles.textInputViewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder='密码'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        {/*设置控件可点击*/}
        <TouchableOpacity onPress={() => { this._login(navigation) }}>
          {/*登录按钮*/}
          <View style={styles.textLoginViewStyle}>
            <Text style={styles.textLoginStyle}>登录</Text>
          </View>
        </TouchableOpacity>
        <Loading visible={this.state.loading} text={isLoggedIn?'登录成功':'登录中...'} />
      </View>
    )
  }
}

let width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  //包裹输入框View样式
  textInputViewStyle: {
    width: width - 30,
    height: 45,
    borderRadius: 4,
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'center',
  },
  //输入框样式
  textInputStyle: {
    width: '100%',
    height: 35,
    paddingLeft: 8,
    backgroundColor: '#00000000',
    // alignSelf: 'center',
    //根据不同平台进行适配
    marginTop: Platform.OS === 'ios' ? 4 : 8,
  },

  //登录按钮View样式
  textLoginViewStyle: {
    width: width - 30,
    height: 45,
    backgroundColor: '#ff4400',
    borderRadius: 4,
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //登录Text文本样式
  textLoginStyle: {
    fontSize: 18,
    color: 'white',
  },
  serverSelectStyle: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  serverSelectTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  }
});

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: '登录',
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

module.exports = connect(mapStateToProps)(LoginScreen);