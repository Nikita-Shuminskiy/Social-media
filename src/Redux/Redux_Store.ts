import { applyMiddleware, combineReducers, createStore, Dispatch } from 'redux';
import { Dialog_Reducer, messageValue, sendMessage } from './Dialog_Reducer';
import { addPost, postValueChange, Profile_Reducer, setProfileStatus, setProfileUser } from './Profile_Reducer';
import {
    setCurrentPages,
    follow,
    setUsers,
    unFollow,
    setTotalUserCount,
    UsersReducer,
    setIsFetching,
    userDissableButton
} from './UsersReducer';
import { AuthReducer, setUserDataAuthMe } from './Auth_Reducer';
import { SideBarReducer } from './SideBar_Reducer';
import ThunkMiddleware from 'redux-thunk'

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
    | ReturnType<typeof setUserDataAuthMe>
    | ReturnType<typeof userDissableButton>
    | ReturnType<typeof setProfileStatus>




const rootReducer = combineReducers({
    dialogs: Dialog_Reducer,
    profile: Profile_Reducer,
    sideBar: SideBarReducer,
    usersData: UsersReducer,
    authMe: AuthReducer,

})

let store = createStore(rootReducer,applyMiddleware(ThunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>

/*export type StoreType = typeof store;*/
// @ts-ignore
window.store = store

export default store

