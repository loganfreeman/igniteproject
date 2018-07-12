import React from 'react'

import LaunchScreen from '../Containers/LaunchScreen'
import { ScrollView, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import { StackNavigator, TabNavigator } from 'react-navigation'

import styles from './Styles/NavigationStyles'

import Routes from '../Cars/config/routes'

// This function is used to create components.
// It expects a name and a list of optional links to other routes.
// The generated component is connected to Redux to display the content of the store.
// This function is used below to easily generate components.
const createComponent = (name, navigateTo = []) => {
  return connect(state => ({ redux: state }))(({ navigation, redux }) => (
    <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
      {navigateTo.map(route => (
        <Button
          key={route}
          title={`Go to ${route}`}
          onPress={() => navigation.navigate(route)}
        />
      ))}
    </ScrollView>
  ))
}

// The nested StackNavigator
const NestedNavigator = StackNavigator(
  {
    StackOne: { screen: createComponent('StackOne', ['StackTwo']) },
    StackTwo: { screen: createComponent('StackTwo', ['StackOne']) },
  },
  {
    headerMode: 'none',
  }
)

const AppNavigator = StackNavigator(Routes, {
  navigationOptions: ({ navigation }) => {
    return {
      title: navigation.state.params && `${navigation.state.params.title}`,
    }
  },
})

// Two tabs, second one is a nested StackNavigator
export const MainNavigator = TabNavigator({
  Cars: {
    screen: AppNavigator,
  },
})

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  }
)

export default MainNavigator
