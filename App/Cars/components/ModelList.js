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

class ModelList extends BaseList {
  getListData() {
    return this.props.models.Results
  }

  renderRow = model => {
    return (
      <TouchableOpacity onPress={() => this.onModelPress(model)}>
        <View>
          <Text>{model.Model}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  onModelPress = model => {
    const navigate = this.props.navigation.navigate
    const modelName = model.Model
    const { setModel } = this.props
    NCAP.getVehicles(model.ModelYear, model.Make, modelName)
      .then(({ data }) => {
        setModel(modelName, data)
      })
      .then(() => navigate('Vehicles', { title: model.Model }))
  }
}

export default connect(
  state => ({
    models: state.cars.models,
  }),
  dispatch => bindActionCreators(carsActions, dispatch)
)(ModelList)
