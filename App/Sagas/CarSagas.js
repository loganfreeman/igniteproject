import { call, put } from 'redux-saga/effects'
import CarActions from '../Redux/CarRedux'
import NCAP from '../Lib/NCAP'

export function* fetchModelYears() {
  const response = yield call(NCAP.getModelYears)
  const { data } = response
  yield put(CarActions.setModelYears(data))
}

export function* fetchMakes({ modelYear }) {
  const response = yield call(NCAP.getMakes, modelYear)
  const { data } = response
  yield put(CarActions.setModelYear(modelYear, data))
}

export function* fetchModels({ make }) {
  const makeName = make.Make
  const response = yield call(NCAP.getModels, make.ModelYear, makeName)
  const { data } = response
  yield put(CarActions.setMake(makeName, data))
}

export function* fetchVehicles({ model }) {
  const modelName = model.Model
  const response = yield call(
    NCAP.getVehicles,
    model.ModelYear,
    model.Make,
    modelName
  )
  const { data } = response
  yield put(CarActions.setModel(modelName, data))
}

export function* fetchVehicleDetails({ vehicle }) {
  const response = yield call(NCAP.getVehicle, vehicle.VehicleId)
  const { data } = response
  yield put(CarActions.setVehicle(vehicle.VehicleDescription, data))
}
