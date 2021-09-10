import { authMeAPI, LoginUserDataType } from '../Api/Api'
import { ActionsTypes } from './Redux_Store'
import { stopSubmit } from 'redux-form';
import { Dispatch } from 'redux';



const initialState = {
    id: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    captcha: null as string | null,
    isAuth: false
}

export type initialStateType = typeof initialState

export function AuthReducer(state = initialState, action: ActionsTypes): initialStateType {

    switch (action.type) {
        case 'AUTH/SET-USER-DATA': {
            return {...state, ...action.payload}
        }
        case 'AUTH/GET-CAPTCHA-URL':{
            return {...state, captcha: action.url}
        }
        default:
            return state
    }
}

export const setUserDataAuthMe = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'AUTH/SET-USER-DATA', payload: {id: userId, email, login, isAuth}
} as const)

export const captchaUrl = (url: string) => ({type: 'AUTH/GET-CAPTCHA-URL',  url} as const)

export const getUserAutMeThunk = () => (dispatch: Dispatch) => {
    return authMeAPI.Me().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserDataAuthMe(response.data.data.id, response.data.data.email, response.data.data.login, true))
        }
    })
}

export const loginThunk = (data:LoginUserDataType) => {
    return (dispatch: Dispatch) => {
        authMeAPI.login(data)
            .then(response => {
                if (response.data.resultCode === 0) {
                    // @ts-ignore
                    dispatch(getUserAutMeThunk())
                }  else if (response.data.resultCode === 10) {
                    // @ts-ignore
                    dispatch(getCaptchaUrl())
                } else {
                    const messages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                    return dispatch(stopSubmit('login', {_error: messages}))
                }
            })
    }
}


/*export const getCaptchaUrl = () => async (dispatch:Dispatch) => {
    const response = await  authMeAPI.captcha()
    const captcha = response.data.url;
    dispatch(captchaUrl(captcha));
}*/

export const getCaptchaUrl = () => {
    return (dispatch: Dispatch) => {
        authMeAPI.captcha()
            .then(response => {
                dispatch(captchaUrl(response.data.url))
            })
    }
}

export const logoutThunk = () => {
    return (dispatch: Dispatch) => {
        authMeAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAuthMe(null, null, null, false))
                }
            })
    }
}


