import { Dispatch } from 'redux';
import { getUserAutMeThunk } from './Auth_Reducer';
import { ActionsTypes } from './Redux_Store'

type initType = {
  initialized: boolean
}
const initialState: initType = {
  initialized: false,
}

export function AppReducer(state = initialState, action: ActionsTypes): initType {
  switch (action.type) {
    case 'APP/SET-INITIALIZED': {
      return {
        ...state,
        initialized: true,
      }
    }
    default:
      return state
  }
}

export const initializedSuccess = () => ({type: 'APP/SET-INITIALIZED'} as const)

export const initializeAppThunk = () => (dispatch: Dispatch) => {
  // @ts-ignore
  let promise = dispatch(getUserAutMeThunk())
  Promise.all([promise])
  .then(() => {
    dispatch(initializedSuccess())
  })

}




