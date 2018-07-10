import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import { toUnderscore } from "../Lib/utils";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchModelYears: null,
  fetchMakes: ["modelYear"],
  fetchModels: ["make"],
  fetchVehicles: ["model"],
  fetchVehicleDetails: ["vehicle"],
  setModelYears: ["modelYears"],
  setModelYear: ["modelYear", "makes"],
  setMake: ["make", "models"],
  setModel: ["model", "vehicles"],
  setVehicle: ["vehicle", "vehicleDetails"]
});

export const CarTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({});

/* ------------- Selectors ------------- */

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types[toUnderscore("setModelYears")]]: (state, { modelYears }) => {
    return state.merge({
      modelYears
    });
  },

  [Types[toUnderscore("setModelYear")]]: (state, { modelYear, makes }) => {
    return state.merge({
      modelYear,
      makes
    });
  },

  [Types[toUnderscore("setMake")]]: (state, { make, models }) => {
    return state.merge({
      make,
      models
    });
  },

  [Types[toUnderscore("setModel")]]: (state, { model,  vehicles}) => {
    return state.merge({
      vehicles,
      model
    });
  },

  [Types[toUnderscore("setVehicle")]]: (state, { vehicle, vehicleDetails }) => {
    return state.merge({
      vehicleDetails,
      vehicle
    });
  }
});
