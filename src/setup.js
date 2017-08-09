const React = require('react');
const COCPocket = require('./COCPocket');
const { Provider } = require('react-redux');
const configureStore = require('./store/configureStore');

function setup() {
  class Root extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
    }

    render() {
      if(this.state.isLoading) {
        return null;
      }

      return (
        <Provider store={this.state.store}>
          <COCPocket />
        </Provider>
      );
    }
  }

  return Root;
}

global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

module.exports = setup;