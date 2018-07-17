import { createNavigationReducer } from 'react-navigation-redux-helpers'
import { NavigationActions } from 'react-navigation'

// import AppNavigation from '../Navigation/AppNavigation'
import AppNavigation from '../Register/navigator'
// export const reducer = createNavigationReducer(AppNavigation)
export const reducer = (state, action) => {
  let nextState
  switch (action.type) {
    case 'Login':
      console.log('STATE', JSON.stringify(state))

      nextState = AppNavigation.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      )

      console.log('NEW STATE', JSON.stringify(nextState))

      break
    case 'Logout':
      console.log('STATE', JSON.stringify(state))
      nextState = AppNavigation.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      )
      console.log('NEW STATE', JSON.stringify(nextState))
      break
    default:
      nextState = AppNavigation.router.getStateForAction(action, state)
      break
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
