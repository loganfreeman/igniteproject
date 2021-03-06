import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import createStore from '../Redux'
import '../Config'
import DebugConfig from '../Config/DebugConfig'
import AppWithNavigator from '../Register/navigator'
// create our store
const store = createStore()

const mapStateToProps = state => ({
  state: state.nav,
})
const AppWithNavigationState = connect(
  mapStateToProps,
  null
)(reduxifyNavigator(AppWithNavigator, 'root'))

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App)
