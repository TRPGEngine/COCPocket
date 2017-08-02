import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>主页</Text>
        <Button title="打开聊天框" onPress={() => {alert('a')}} />
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

module.exports = MainScreen;