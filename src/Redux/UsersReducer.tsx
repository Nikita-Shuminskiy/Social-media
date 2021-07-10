import { ActionsTypes } from './redux-store'


export const followAc = (userID: number) => ({type: 'Follow', userID} as const)
export const unFollowAC = (userID: number) => ({type: 'Un-Follow', userID} as const)
export const setUsers = (users: UserType[]) => ({type: 'Set-Users', users} as const)
export type UserType={
    id: number
    followed: boolean
    status: string
    imgLogo: string
    name: string
    country: {
        title: string
        city: string
    }
}
export type DataUsersTye = {
    dataUsers:Array<UserType>
}
const initialState:DataUsersTye = {
    dataUsers: [

    ]
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