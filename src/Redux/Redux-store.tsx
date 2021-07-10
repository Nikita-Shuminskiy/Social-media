import { combineReducers, createStore, Dispatch } from 'redux';
import { dialogReducer, messageValueAC, sendMessageAC } from './DialogReducer';
import { addPostAC, postValueChangeAC,  profileReducer } from './ProfileReducer';
import { sideBarReducer } from './SideBar-Reduser';
import UsersReducer, { followAc, setUsers, unFollowAC } from './UsersReducer';

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof messageValueAC>
    | ReturnType<typeof postValueChangeAC>
    | ReturnType<typeof followAc>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsers>



const rootReducer = combineReducers({
    usersData: UsersReducer,
    dialogs: dialogReducer,
    profile: profileReducer,
    sideBar: sideBarReducer,

})

let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>

export type StoreType = typeof store;

export default store