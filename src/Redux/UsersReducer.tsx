import { ActionsTypes } from './redux-store'


export const followAc = (userID: number) => ({type: 'Follow', userID} as const)

export const unFollowAC = (userID: number) => ({type: 'Un-Follow', userID} as const)

export const setUsersAC = (users: UserType[]) => ({type: 'Set-UsersContainerAPI', users} as const)

export const setCurrentPagesAC = (pageNumberCurrent: number) => ({type: 'CURRENT-PAGES', pageNumberCurrent} as const)

export const setTotalUserCountAC = (totalCount: number) => ({type: 'TOTAL-USER-COUNT', totalCount} as const)
export const setIsFetchingAC = (isFetching:boolean) => ({type: 'Toggle is fetching',isFetching} as const)

export type UserType = {
    name: string
    id: number,
    photos: {
        small: string
        large: string
    }
    status: boolean
    followed: boolean

}
export type DataUsersTye = {
    dataUsers: UserType[]
    totalCount: number
    currentPage: number
    pageSize: number
    isFetching:boolean
}

const initialState: DataUsersTye = {
    dataUsers: [],
    totalCount: 3,
    currentPage: 1,
    pageSize: 5,
    isFetching: false
}

export function UsersReducer(state: DataUsersTye = initialState, action: ActionsTypes): DataUsersTye {
    switch (action.type) {
        case 'Follow':
            return {
                ...state,
                dataUsers: state.dataUsers.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case 'Un-Follow':
            return {
                ...state,
                dataUsers: state.dataUsers.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'Set-UsersContainerAPI':
            return {...state, dataUsers: [...action.users]}
        case 'CURRENT-PAGES':
            return {...state, currentPage: action.pageNumberCurrent}

        case 'TOTAL-USER-COUNT':
            return {...state, totalCount: action.totalCount}

        case 'Toggle is fetching':
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}
