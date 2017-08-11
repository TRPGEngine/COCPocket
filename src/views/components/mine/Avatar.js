const React = require('react');
const { View, Text, Button, Image } = require('react-native');
const { connect } = require('react-redux');
const sb = require('react-native-style-block');

class Avatar extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Image
          style={styles.image}
          source={require('./img/gugugu1.png')}
        />
        <Text style={styles.username}>Admin</Text>
        <Text style={styles.description}>咕咕咕咕咕咕咕</Text>
      </View>
    )
  }
}

const styles = {
  view: [
    sb.size('100%', 'auto'),
    { alignItems: 'center' },
    sb.padding(20, 0),
    sb.bgColor('#ffffff'),
    sb.border(direction = 'Bottom', 1, '#eeeeee'),
    sb.margin(0,0,10,0),
  ],
  image: [
    sb.radius(30),
    sb.size(60, 60)
  ],
  username: [
    sb.margin(6,0,0,0),
    sb.font(20)
  ],
  description: [
    sb.font(14),
    sb.color('#999999')
  ],
}

module.exports = connect()(Avatar);