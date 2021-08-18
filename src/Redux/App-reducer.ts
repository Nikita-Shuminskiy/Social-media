import { authMeAPI } from '../Api/Api'
import { ActionsTypes, AppDispatchType } from './Redux_Store'
import { getUserAutMeThunk } from './Auth_Reducer';


type initType = {
    initialized: boolean
}


const initialState: initType = {
    initialized: false
}

export function AppReducer(state = initialState, action: ActionsTypes): initType {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {
                ...state,
                initialized: true

            }
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: 'SET-INITIALIZED'} as const)

export const initializeAppThunk = () => (dispatch: AppDispatchType) => {
    // @ts-ignore
    let promise = dispatch(getUserAutMeThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })

}




