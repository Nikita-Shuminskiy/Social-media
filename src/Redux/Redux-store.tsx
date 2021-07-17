import { combineReducers, createStore, Dispatch } from 'redux';
import { DialogReducer, messageValueAC, sendMessageAC } from './DialogReducer';
import { addPostAC, postValueChangeAC,  ProfileReducer } from './ProfileReducer';
import { SideBarReducer } from './SideBar-Reduser';
import {
    setCurrentPagesAC,
    followAc,
    setUsersAC,
    unFollowAC,
    setTotalUserCountAC,
    UsersReducer,
    setIsFetchingAC
} from './UsersReducer';

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof messageValueAC>
    | ReturnType<typeof postValueChangeAC>
    | ReturnType<typeof followAc>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPagesAC>
    | ReturnType<typeof setTotalUserCountAC>
    | ReturnType<typeof setIsFetchingAC>



const rootReducer = combineReducers({
    dialogs: DialogReducer,
    profile: ProfileReducer,
    sideBar: SideBarReducer,
    usersData: UsersReducer,

})

let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>

export type StoreType = typeof store;

export default store