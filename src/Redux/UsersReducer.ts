import { ActionsTypes } from './Redux_Store'

export const userDissableButton = (dissFetching:boolean, idUser:number) => ({type: 'TOGGLE-DISSABLED-BUTTON-USER',dissFetching,idUser}as const)

export const follow = (userId: number) => ({type: 'Follow', userId} as const)

export const unFollow = (userId: number) => ({type: 'Un-Follow', userId} as const)

export const setUsers = (users: UserType[]) => ({type: 'Set-UsersContainerAPI', users} as const)

export const setCurrentPages = (pageNumberCurrent: number) => ({type: 'CURRENT-PAGES', pageNumberCurrent} as const)

export const setTotalUserCount = (totalCount: number) => ({type: 'TOTAL-USER-COUNT', totalCount} as const)

export const setIsFetching = (isFetching:boolean) => ({type: 'Toggle is fetching',isFetching} as const)



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
    dissabledInProgressUser: Array<any>
}
const initialState:DataUsersTye = {
    dataUsers: [],
    totalCount: 10,
    currentPage: 2,
    pageSize: 5,
    isFetching: false,
    dissabledInProgressUser: [],
}

export function UsersReducer(state: DataUsersTye = initialState, action: ActionsTypes): DataUsersTye {
    switch (action.type) {
        case 'Follow':
            return {
                ...state,
                dataUsers: state.dataUsers.map(u => u.id === action.userId ?  {...u, followed: true} :  u )
            }
        case 'Un-Follow':
            return {
                ...state,
                dataUsers: state.dataUsers.map(u => u.id === action.userId ? {...u, followed: false} : u  )
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
