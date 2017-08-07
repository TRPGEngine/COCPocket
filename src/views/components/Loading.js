const React = require('react');
const PropTypes = require('prop-types');
const {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Modal,
  ActivityIndicator
} = require('react-native');

const SIZES = ['small', 'large'];

class Loading extends React.Component {
  render() {
    const { visible, color, size, text, overlayColor, onRequestClose } = this.props;
    return (
      <Modal visible={visible} transparent onRequestClose={onRequestClose}>
        {visible
          ?
          <View key={'spinner'} style={styles.container}>
            <View style={[styles.background, { backgroundColor: overlayColor }]}>
              <View style={styles.loading}>
                <ActivityIndicator size={size} color={color} />
                <Text style={styles.loadingText}>{text || '数据加载中...'}</Text>
              </View>
            </View>
          </View>
          : <View key={'spinner'} />}
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').width / 2.5,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  loadingText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#fcfcfc'
  }
});

Loading.propTypes = {
  visible: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  text: PropTypes.string,
  overlayColor: PropTypes.string,
  onRequestClose: PropTypes.func
};

Loading.defaultProps = {
  visible: false,
  color: 'white',
  size: 'large',
  text: '数据加载中...',
  overlayColor: 'transparent',
  onRequestClose() { }
};

module.exports = Loading;