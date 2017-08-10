const React = require('react');
const ChatList = require('./components/ChatList');
const { connect } = require('react-redux');

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {

    };
  }

  render() {
    return (
      <ChatList messages={this.props.messages}/>
    )
  }
}

ChatScreen.navigationOptions = (props) => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.name}`,
  };
}

const mapStateToProps = (state, ownProps) => ({
  messages: state.message.groupMessage[ownProps.navigation.state.params.name] || []
});

module.exports = connect(mapStateToProps)(ChatScreen);