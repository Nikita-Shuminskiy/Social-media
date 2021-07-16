import { ActionsTypes } from './redux-store'


export const followAc = (userID: number) => ({type: 'Follow', userID} as const)
export const unFollowAC = (userID: number) => ({type: 'Un-Follow', userID} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'Set-Users', users} as const)
export const setCurrentPagesAC = (pageNumberCurrent: number) => ({type: 'CURRENT-PAGES', pageNumber: pageNumberCurrent} as const)
export const setTotalUserCountAC = (totalNumber: number) => ({type: 'TOTAL-USER-COUNT', totalNumber} as const)
export type UserType={
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
    dataUsers:UserType[]
    totalCount: number
    pageSize: number
    currentPage: number
}

 const initialState:DataUsersTye = {
    dataUsers: [],
    totalCount: 100,
    pageSize: 6,
    currentPage: 1
}

 export function UsersReducer(state:DataUsersTye  = initialState, action: ActionsTypes):DataUsersTye {
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
        case 'Set-Users':
            return { ...state, dataUsers: action.users }
        case 'CURRENT-PAGES':
            debugger
            return { ...state, currentPage: action.pageNumber }

        case 'TOTAL-USER-COUNT':
            return { ...state, totalCount: action.totalNumber }
                default:
                return state
            }
    }
