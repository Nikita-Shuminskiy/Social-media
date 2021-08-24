import { authMeAPI } from '../Api/Api'
import { ActionsTypes, AppDispatchType } from './Redux_Store'
import { stopSubmit } from 'redux-form';

 type AuthMeType = {
    data: DataTypeAuth
    isAuth: boolean
}

 type DataTypeAuth = {
    id: number
    email: string
    login: string
}

const initialState: AuthMeType = {
    data: {
        id: NaN,
        email: '',
        login: '',
    },
    isAuth: false
}

export function AuthReducer(state = initialState, action: ActionsTypes): AuthMeType {
    switch (action.type) {
        case 'AUTH/SET-USER-DATA': {
            return {...state, ...action.payload, isAuth: action.isAuth}}

        default:
            return state
    }
}

export const setUserDataAuthMe = (payload: DataTypeAuth | null, isAuth: boolean) => ({type: 'AUTH/SET-USER-DATA', payload, isAuth} as const)

export const getUserAutMeThunk = () => (dispatch: AppDispatchType) => {
    return authMeAPI.Me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserDataAuthMe(response.data, true))
        }
    })
}

export const loginThunk = (email: string, password: number, rememberMe: boolean) => {
    return (dispatch: AppDispatchType) => {
        authMeAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(getUserAutMeThunk())
                } else {
                    const messages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                    return dispatch(stopSubmit('login', {_error: messages}))
                }
            })
    }
}
export const logoutThunk = () => {
    return (dispatch: AppDispatchType) => {
        authMeAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAuthMe(null, false))
                }
            })
    }
}


