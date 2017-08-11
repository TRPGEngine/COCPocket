const React = require('react');
const { View, Text, Button, Image } = require('react-native');
const { connect } = require('react-redux');
const sb = require('react-native-style-block');
const ListCell = require('./ListCell');


class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ListCell leftTitle='测试' onPress={() => {alert('a')}} />
        <ListCell leftTitle='测试1' />
        <ListCell leftTitle='测试2' />
        <ListCell leftTitle='测试3' />
        <ListCell />
      </View>
    )
  }
}

const styles = {
  container: [
    sb.bgColor('#ffffff'),
    sb.border(direction = 'Top', 1, '#eeeeee'),
    // sb.border(direction = 'Bottom', 1, '#eeeeee'),
  ]
}

module.exports = connect()(List);