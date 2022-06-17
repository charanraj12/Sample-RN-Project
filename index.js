import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import {store} from './src/app/store'
import * as React from 'react'

const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => RNRedux);