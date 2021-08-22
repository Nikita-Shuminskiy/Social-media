import { AppStateType } from '../../Redux/Redux_Store';

export function getUsers (state:AppStateType) {
    return state.usersData
}
export function pageSizeUsers (state:AppStateType) {
    return state.usersData.pageSize
}

export function currentPageUsers (state:AppStateType) {
    return state.usersData.currentPage
}

export function totalCountUsers (state:AppStateType) {
    return state.usersData.totalCount
}

export function isFetchingUsers (state:AppStateType) {
    return state.usersData.isFetching
}
export function progressDisabledUsers (state:AppStateType) {
    return state.usersData.dissabledInProgressUser
}
