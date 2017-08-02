const React = require('react');
const { StyleSheet, View, SectionList, Header, ListItem, FlatList, Text, TouchableOpacity, Animated } = require('react-native');

class GroupCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      height: new Animated.Value(),
      maxHeight: 0
    };
  }

  _setMaxHeight = (event) => {
    // alert(event.nativeEvent.layout.height)
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
      // height: new Animated.Value(0)
    });
  }

  _onPress = () => {
    // this.props.onPressItem(this.props.id);
    // 展开列表
    // this.setState({
    //   isOpen: !this.state.isOpen
    // })

    let finalValue = this.state.expanded ? this.state.maxHeight : 0;
    // alert(finalValue);

    this.setState({
      expanded: !this.state.expanded
    })

    Animated.timing(
      this.state.height,
      {
        toValue: finalValue
      }
    ).start();
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPress}>
          <Text>{this.props.title}1111213123{JSON.stringify(this.state.isOpen)}</Text>
        </TouchableOpacity>
        <Animated.View onLayout={this._setMaxHeight} style={{height: this.state.height}}>
          <Text>123{'\n'}12{'\n'}weq</Text>
        </Animated.View>
      </View>
    )
  }
}

module.exports = GroupCell;