import { combineReducers, createStore, Dispatch } from 'redux';
import { DialogReducer, messageValue, sendMessage } from './DialogReducer';
import { addPost, postValueChange, ProfileReducer, setProfileUser } from './ProfileReducer';
import { SideBarReducer } from './SideBar-Reduser';
import {
    setCurrentPages,
    follow,
    setUsers,
    unFollow,
    setTotalUserCount,
    UsersReducer,
    setIsFetching
} from './UsersReducer';

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof messageValue>
    | ReturnType<typeof postValueChange>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPages>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setProfileUser>



const rootReducer = combineReducers({
    dialogs: DialogReducer,
    profile: ProfileReducer,
    sideBar: SideBarReducer,
    usersData: UsersReducer,

})

let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>

/*export type StoreType = typeof store;*/
/*window.store = store*/

export default store