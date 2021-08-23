import { applyMiddleware, combineReducers, createStore, Dispatch } from 'redux';
import { DialogReducer, sendMessage } from './DialogReducer';
import { addPost, deletePost, ProfileReducer, setProfileStatus, setProfileUser } from './ProfileReducer';
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
import { reducer as formReducer } from 'redux-form'
import { AppReducer, initializedSuccess } from './App-reducer';

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof sendMessage>
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
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePost>





const rootReducer = combineReducers({
    dialogs: DialogReducer,
    profile: ProfileReducer,
    sideBar: SideBarReducer,
    usersData: UsersReducer,
    authMe: AuthReducer,
    form: formReducer,
    appReducer: AppReducer

})

let store = createStore(rootReducer,applyMiddleware(ThunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>

/*export type StoreType = typeof store;*/
// @ts-ignore
window.store = store

export default store

