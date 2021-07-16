import { ActionsTypes } from './redux-store'


export const followAc = (userID: number) => ({type: 'Follow', userID} as const)
export const unFollowAC = (userID: number) => ({type: 'Un-Follow', userID} as const)
export const setUsers = (users: UserType[]) => ({type: 'Set-Users', users} as const)
export type UserType={
   /* id: number
    followed: boolean
    status: string
    photos: {
        small:string
        large:string
    }
    name: string
    country: {
        title: string
        city: string
    }*/
    name: string
    id: number,
    photos: {
        small: string
        large: string
    }
    status: boolean
    followed: boolean

}
export type PageGlobalType = {
    totalCount: number
    pageSize: number
    currentPage: number
}
export type DataUsersTye = {
    dataUsers:Array<UserType>
    pageGlobal: PageGlobalType
}
const initialState:DataUsersTye = {
    dataUsers: [],
    pageGlobal: {
        totalCount: 100,
        pageSize: 5,
        currentPage: 1
    }


}

 function UsersReducer(state:DataUsersTye = initialState, action: ActionsTypes) {
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
            debugger
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
            return {
                ...state,
                dataUsers: [...state.dataUsers, ...action.users]
            }
        default:
            return state
    }
}
export default UsersReducer