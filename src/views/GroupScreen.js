const React = require('react');
const { StyleSheet, FlatList } = require('react-native');
// import { StyleSheet, TextView, SectionList, Header, ListItem, FlatList, Text, TouchableOpacity } from 'react-native';
const GroupCell = require('./components/GroupCell');

class GroupScreen extends React.Component {
  state = { selected: new Map() };
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <GroupCell
      key={'list'+item.key}
      id={item.id}
      selected={!!this.state.selected.get(item.id)}
      title={item.title + item.key}
    />
  );

  render() {
    return (
      <FlatList
        key="list"
        data={[{ id: 'a', title: '1' }, { id: 'b', title: '2' }]}
        renderItem={(item) => (<GroupCell
          key={'list' + item.key}
          id={item.id}
          selected={!!this.state.selected.get(item.id)}
          title={JSON.stringify}
        />)}
        onPressItem={this._onPressItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}

const styles = StyleSheet.create({
  headerText: {
    padding: 4,
  },
  optionSection: {
    flexDirection: 'row',
  },
  searchRow: {
    paddingHorizontal: 10,
  },
  separatorText: {
    color: 'gray',
    alignSelf: 'center',
    padding: 4,
    fontSize: 9,
  },
});

module.exports = GroupScreen;