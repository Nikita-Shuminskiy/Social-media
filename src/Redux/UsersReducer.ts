import { Dispatch } from 'redux'
import { usersAPI } from '../Api/Api'
import { ActionsTypes, AppDispatchType } from './Redux_Store'

export type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string | null
    followed: boolean
    totalCount: number
    error: null
}
export type DataUsersTye = {
    dataUsers: UserType[]
    totalCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    dissabledInProgressUser: Array<any>
}
const initialState: DataUsersTye = {
    dataUsers: [],
    totalCount: 10,
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    dissabledInProgressUser: [],
}

export function UsersReducer(state: DataUsersTye = initialState, action: ActionsTypes): DataUsersTye {
    switch (action.type) {
        case 'Follow':
            return {
                ...state,
                dataUsers: state.dataUsers.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'Un-Follow':
            return {
                ...state,
                dataUsers: state.dataUsers.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'Set-UsersContainerAPI':
            return {...state, dataUsers: action.users}
        case 'CURRENT-PAGES':
            return {...state, currentPage: action.pageNumberCurrent}

        case 'TOTAL-USER-COUNT':
            return {...state, totalCount: action.totalCount}

        case 'Toggle is fetching':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-DISSABLED-BUTTON-USER': {
            return {
                ...state,
                dissabledInProgressUser: action.dissFetching ? [...state.dissabledInProgressUser, action.idUser] : [state.dissabledInProgressUser.filter(id => id !== action.idUser)]
            }
        }
        default:
            return state
    }
}

export const userDissableButton = (dissFetching: boolean, idUser: number) => ({
    type: 'TOGGLE-DISSABLED-BUTTON-USER',
    dissFetching,
    idUser
} as const)

export const follow = (userId: number) => ({type: 'Follow', userId} as const)

export const unFollow = (userId: number) => ({type: 'Un-Follow', userId} as const)

export const setUsers = (users: UserType[]) => ({type: 'Set-UsersContainerAPI', users} as const)

export const setCurrentPages = (pageNumberCurrent: number) => ({type: 'CURRENT-PAGES', pageNumberCurrent} as const)

export const setTotalUserCount = (totalCount: number) => ({type: 'TOTAL-USER-COUNT', totalCount} as const)

export const setIsFetching = (isFetching: boolean) => ({type: 'Toggle is fetching', isFetching} as const)

export const getUserThunk = (currentPage: number, pageSize: number) => {
    return (dispatch: AppDispatchType) => {
        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
        })
    }
}
export const followThunk = (id: number) => {
    return (dispatch: AppDispatchType) => {
        dispatch(userDissableButton(true, id))

        usersAPI.followApi(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(userDissableButton(false, id))
        })
    }
}

export const unfollowThunk = (id: number) => {
    return (dispatch: AppDispatchType) => {
        dispatch(userDissableButton(true, id))
        usersAPI.unFollowApi(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(id))
            }
            dispatch(userDissableButton(false, id))
        })
    }
}

