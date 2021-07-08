import { combineReducers, createStore } from 'redux';
import { dialogReducer, messageValueAC, sendMessageAC } from './DialogReducer';
import { addPostAC, postValueChangeAC, profileReducer } from './ProfileReducer';
import { DialogPageType, ProfilePageType, SidBarType } from './store';

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof messageValueAC>
    | ReturnType<typeof postValueChangeAC>

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sideBar: SidBarType
}

export type StoreType = {
    _state: StateType
    /* _change: () => void*/
    // _subscribe: (observer: () => void) => void
    subscribe?: any
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

 const rootReducer = combineReducers({
    dialogs:dialogReducer,
    profile:profileReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store: StoreType = createStore(rootReducer)

export default store