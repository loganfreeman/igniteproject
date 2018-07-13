import React from 'react'
import PropTypes from 'prop-types'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

const LoginScreen = ({ login, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Screen A</Text>
    <Text style={styles.instructions}>This is great</Text>
    <Button
      onPress={() => {
        console.log('dispatch loggin action')
        login()
        //navigation.navigate('Main')
      }}
      title="Log in"
    />
  </View>
)

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

LoginScreen.navigationOptions = {
  title: 'Log In',
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  login: () => dispatch({ type: 'Login' }),
})

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen)
