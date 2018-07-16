import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({ isLoggedIn: false })

const { Types, Creators } = createActions({
  login: null,
  logout: null,
})

export const AuthTypes = Types
export default Creators

export const reducer = createReducer(INITIAL_STATE, {
  Login: state => {
    return state.merge({
      isLoggedIn: true,
    })
  },
  Logout: state => {
    return state.merge({
      isLoggedIn: false,
    })
  },
})
