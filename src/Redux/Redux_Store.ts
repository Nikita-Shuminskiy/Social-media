import { applyMiddleware, combineReducers, compose, createStore, Dispatch } from 'redux';
import { DialogReducer, sendMessage } from './DialogReducer';
import { addPost, deletePost, ProfileReducer, setProfileStatus, setProfileUser, updatePhoto } from './ProfileReducer';
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
    | ReturnType<typeof updatePhoto>

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>

const rootReducer = combineReducers({
    dialogs: DialogReducer,
    profile: ProfileReducer,
    sideBar: SideBarReducer,
    usersData: UsersReducer,
    authMe: AuthReducer,
    form: formReducer,
    appReducer: AppReducer
})

// @ts-ignore
/*const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware) +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))

/*export type StoreType = typeof store;*/
// @ts-ignore
window.store = store

export default store

