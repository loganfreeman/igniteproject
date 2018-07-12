/**
 * Created by stan229 on 5/27/16.
 */

import React, { Component } from 'react'

import {
  View,
  Text,
  TouchableOpacity,
  ListView,
  StyleSheet,
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import carsActions from '../../Redux/CarRedux'

import NCAP from '../../Lib/NCAP'

class ModelYearList extends Component {
  static navigationOptions = {
    title: 'Model Years',
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.modelYears) {
      const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(rows)

      return {
        ...prevState,
        dataSource,
      }
    }
  }

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    }).cloneWithRows([]),
  }

  componentDidMount() {
    this.setState({
      loading: true,
    })

    this.props.fetchModelYears()
  }

  renderRow = modelYear => {
    return (
      <TouchableOpacity
        onPress={this.onModelYearPress.bind(null, modelYear.ModelYear)}
      >
        <View>
          <Text>{modelYear.ModelYear}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  onModelYearPress = modelYear => {
    const navigate = this.props.navigation.navigate
    const { setModelYear } = this.props
    NCAP.getMakes(modelYear)
      .then(({ data }) => {
        setModelYear(modelYear, data)
      })
      .then(() => navigate('Makes', { title: modelYear }))
  }

  render() {
    const state = this.state

    if (state.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      )
    }

    return (
      <ListView
        style={styles.container}
        dataSource={state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default connect(
  state => ({
    modelYears: state.cars.modelYears,
  }),
  dispatch => bindActionCreators(carsActions, dispatch)
)(ModelYearList)
