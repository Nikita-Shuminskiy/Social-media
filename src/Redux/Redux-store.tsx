import { combineReducers, createStore, Dispatch } from 'redux';
import { dialogReducer, messageValueAC, sendMessageAC } from './DialogReducer';
import { addPostAC, postValueChangeAC,  profileReducer } from './ProfileReducer';
import { sideBarReducer } from './SideBar-Reduser';

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof messageValueAC>
    | ReturnType<typeof postValueChangeAC>


const rootReducer = combineReducers({
    dialogs: dialogReducer,
    profile: profileReducer,
    sideBar: sideBarReducer
})

let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = Dispatch<ActionsTypes>

export type StoreType = typeof store;

export default store