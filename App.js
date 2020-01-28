
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {Store} from './src/redux/store'
import ListUser from './src/screen/ListUser'

class App extends Component{
  render() {
    return (
      <Provider store={Store}>
        <ListUser />
      </Provider>
    );
  }
}

export default App
