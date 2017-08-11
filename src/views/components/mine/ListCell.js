const React = require('react');
const { View, TouchableOpacity, Text, Button, Image } = require('react-native');
const { connect } = require('react-redux');
const sb = require('react-native-style-block');
import Ionicons from 'react-native-vector-icons/Ionicons';

class ListCell extends React.Component {
  renderRightContent() {
    if (this.props.rightIconName.length == 0) {   // 不返回图片
      return (
        <Text style={styles.rightText}>{this.props.rightTitle}</Text>
      )
    } else {
      <Image source={{ uri: this.props.rightIconName }} style={{ width: 24, height: 13 }} />
    }
  }

  rightSubView() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {this.renderRightContent()}
        <Ionicons name="ios-arrow-forward" color='gray' />
      </View>
    )
  }

  render() {
    return (
      <TouchableOpacity style={styles.view} onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={styles.leftView}>
            <Text style={styles.leftText}>{this.props.leftTitle}</Text>
          </View>
          {this.rightSubView()}
        </View>
      </TouchableOpacity>
    )
  }
}

ListCell.defaultProps = {
  leftIconName: '',    // cell左侧图标
  leftTitle: '左侧标题',   // cell左侧标题
  rightIconName: '',   //  cell右侧图标
  rightTitle: '右侧标题',  // cell右侧标题
}

const styles = {
  container: [
    sb.direction('row'),
    sb.layout('center', 'space-between'),
    sb.padding(0, 16, 0, 6)
  ],
  view: [
    sb.size('100%', 'auto'),
    sb.padding(15, 0),
    sb.border(direction = 'Bottom', 1, '#eeeeee'),
    sb.margin(0, 0, 0, 8),
  ],
  leftText: [
    sb.font(14)
  ],
  leftView: [
    sb.direction('row'),
    sb.alignCenter()
  ],
  rightText: [
    sb.margin(0,4,0,0),
    { color: 'gray' }
  ],
  icon: [

  ],
}

module.exports = connect()(ListCell);