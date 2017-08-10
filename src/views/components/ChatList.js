const React = require('react');
const { StyleSheet, Text } = require('react-native');
const { connect } = require('react-redux');

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  render() {
    return (
      <Text>
        聊天室{JSON.stringify(this.props.messages)}
      </Text>
    )
  }
}

module.exports = connect()(ChatList);