import { NavigationActions } from 'react-navigation'

import AppNavigation from '../Navigation/AppNavigation'


const initialAction = { type: NavigationActions.Init }
const initialState = Navigator.router.getStateForAction(initialAction)

export const reducer = (state = initialState, action) => {
  return AppNavigation.router.getStateForAction(action, state)
}
