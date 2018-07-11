/**
 * Created by stan229 on 5/28/16.
 */
import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import BaseList from './BaseList'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import carsActions from '../../Redux/CarRedux'
import NCAP from '../../Lib/NCAP'

class MakeList extends BaseList {
  getListData() {
    return this.props.makes.Results
  }

  renderRow = make => {
    return (
      <TouchableOpacity onPress={this.onMakePress.bind(null, make)}>
        <View>
          <Text>{make.Make}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  onMakePress = make => {
    const makeName = make.Make
    const navigate = this.props.navigation.navigate
    const { setMake } = this.props
    NCAP.getModels(make.ModelYear, makeName)
      .then(({ data }) => {
        setMake(makeName, data)
      })
      .then(() => navigate('Models', { title: make.Make }))
  }
}

export default connect(
  state => ({
    makes: state.cars.makes,
  }),
  dispatch => bindActionCreators(carsActions, dispatch)
)(MakeList)
