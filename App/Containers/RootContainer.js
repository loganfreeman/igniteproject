import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount() {
    const { startup } = this.props.actions
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <ReduxNavigation />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...StartupActions,
    },
    dispatch
  ),
})

export default connect(
  null,
  mapDispatchToProps
)(RootContainer)
