import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform, TextInput, Picker } from 'react-native';
const Loading = require('./components/Loading');

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
});

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  _login(navigation) {
    // alert(JSON.stringify(navigation));
    console.log(navigation);

    // navigation.dispatch({ type: 'Login' })
    this.setState({
      loading: true
    })
  }

  render() {
    const { navigation} = this.props;
    return (
      <View style={styles.container}>
        <Loading visible={this.state.loading} text='登录中...' />
        {/*账号输入框在这里用View包裹以便处理器样式*/}
        <Text style={styles.title}>欢迎来到TRPG的世界</Text>
        <View style={styles.textInputViewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder='账号'
            autoCapitalize='none'
            autoCorrect={false} />
        </View>
        {/*密码输入框*/}
        <View style={styles.textInputViewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder='密码'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false} />
        </View>
        {/*设置控件可点击*/}
        <TouchableOpacity onPress={() => { this._login(navigation) }}>
          {/*登录按钮*/}
          <View style={styles.textLoginViewStyle}>
            <Text style={styles.textLoginStyle}>登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: '登录',
};

module.exports = LoginScreen;