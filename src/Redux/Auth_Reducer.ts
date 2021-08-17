import { authMeAPI } from '../Api/Api'
import { ActionsTypes, AppDispatchType } from './Redux_Store'

export type AuthMeType = {
    resultCode: number
    messages: []
    data: DataTypeAuth
    isAuth:boolean
}

export type DataTypeAuth  = {
    id: number | null
    email: string | null
    login: string | null
}


const initialState:AuthMeType = {
    resultCode: 0,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

export function AuthReducer(state = initialState, action: ActionsTypes): AuthMeType {
    switch (action.type) {
        case 'SET-USER-DATA': {
            debugger
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth

            }
        }
        default:
            return state
    }
}
export const setUserDataAuthMe = (payload:DataTypeAuth | null, isAuth:boolean) => ({type: 'SET-USER-DATA', payload,isAuth}as const)

export const autMeThunk = () => (dispatch: AppDispatchType) => {
        authMeAPI.Me().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAuthMe(response.data, true))
            }
        })
    }

export const loginThunk = (email:string,password:number,rememberMe:boolean) => {
    return (dispatch: AppDispatchType) => {
        authMeAPI.login(email,password,rememberMe)
            .then(response => {
            if (response.data.resultCode === 0) {
                // @ts-ignore
                dispatch(autMeThunk())
            }
        })
    }
}
export const logoutThunk = () => {
    return (dispatch: AppDispatchType) => {
        authMeAPI.logout()
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAuthMe( null,false))
            }
        })
    }
}


