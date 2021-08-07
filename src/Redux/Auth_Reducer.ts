import { authMeAPI } from '../Api/Api'
import { ActionsTypes, AppDispatchType } from './Redux_Store'

export type AuthMeType = {
    resultCode: number
    messages: []
    data: DataTypeAuth
    isAuth:boolean
}

export type DataTypeAuth = {
    id: number
    email: string
    login: string
}


const initialState:AuthMeType = {
    resultCode: 0,
    messages: [],
    data: {
        id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai',
    },
    isAuth: false
}
export const setUserDataAuthMe = (data:DataTypeAuth) => ({type: 'SET-USER-DATA', data}as const)
export function AuthReducer(state = initialState, action: ActionsTypes): AuthMeType {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}
export const autMeThunk = () => {
    return (dispatch: AppDispatchType) => {
        authMeAPI.Me().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAuthMe(response.data))
            }
        })

    }
}


