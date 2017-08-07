const React = require('react');
import GroupList from './components/GroupList';

class GroupScreen extends React.Component {
  static navigationOptions = {
    title: '团',
  }

  render() {
    return (
      <GroupList />
    )
  }
}

export default GroupScreen;