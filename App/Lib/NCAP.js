/**
 * Created by stan229 on 5/2/16.
 */
// a library to wrap and simplify api calls
import apisauce from "apisauce";

const BASE_URL = "https://www.nhtsa.gov/webapi/api/SafetyRatings/",
  BASE_PARAMS = "format=json";

const api = apisauce.create({
  // base URL is read from the "constructor"
  baseURL: BASE_URL,
  // here are some default headers
  headers: {
    "Cache-Control": "no-cache"
  },
  // 10 second timeout...
  timeout: 10000
});

const NCAP = {
  getModelYears() {
    return api.get(`${BASE_URL}?${BASE_PARAMS}`);
  },

  getMakes(modelYear) {
    return api.get(`${BASE_URL}modelyear/${modelYear}?${BASE_PARAMS}`);
  },

  getModels(modelYear, make) {
    return api.get(
      `${BASE_URL}modelyear/${modelYear}/make/${make}?${BASE_PARAMS}`
    );
  },

  getVehicles(modelYear, make, model) {
    return api.get(
      `${BASE_URL}modelyear/${modelYear}/make/${make}/model/${model}?${BASE_PARAMS}`
    );
  },

  getVehicle(vehicleId) {
    return api.get(`${BASE_URL}VehicleId/${vehicleId}?${BASE_PARAMS}`);
  }
};

export default NCAP;
