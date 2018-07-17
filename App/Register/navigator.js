/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'

import Login from './components/Login'
import Boiler from './components/Boiler'
import ForgetPassword from './components/ForgetPassword'
import Register from './components/Register'
import Home from './components/Home'

import { createStackNavigator } from 'react-navigation'

export default (App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
    },
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: 'ForgetPassword',
    },
  },
  Boiler: {
    screen: Boiler,
    navigationOptions: {
      title: 'Boiler',
    },
  },
}))

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
