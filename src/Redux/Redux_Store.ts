import { Action, applyMiddleware, combineReducers, createStore, Dispatch } from 'redux';
import { DialogReducer, sendMessage } from './DialogReducer';
import { addPost, deletePost, ProfileReducer, setProfileStatus, setProfileUser, updatePhoto } from './ProfileReducer';
import {
    follow,
    setCurrentPages,
    setIsFetching,
    setTotalUserCount,
    setUsers,
    unFollow,
    userDissableButton,
    UsersReducer
} from './UsersReducer';
import { AuthReducer, captchaUrl, setUserDataAuthMe } from './Auth_Reducer';
import { SideBarReducer } from './SideBar_Reducer';
import ThunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { AppReducer, initializedSuccess } from './App-reducer';

export type ActionsTypes =
    | ReturnType<typeof addPost>
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
    | ReturnType<typeof captchaUrl>

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



const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
window.store = store

export default store

