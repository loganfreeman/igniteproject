import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

import Routes from '../Cars/config/routes'
const AppNavigator = StackNavigator(Routes, {
  navigationOptions: {
      title: ({ state }) => {
          if (state.params) {
              return `${state.params.title}`;
          }
      }
  }
});


// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default AppNavigator
