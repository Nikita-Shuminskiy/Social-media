import { DialogPageType } from './React_Redux_StoreType/types/StateType';
import { ActionsTypes } from './Redux_Store';
import { v1 } from 'uuid';


export const sendMessage = (value: string) => ({type: 'DIALOG/SEND-MESSAGE', value} as const)


let initialState: DialogPageType = {
    dialogs: [
        {name: 'nick', id: v1(),},
        {name: 'Leks', id: v1(),},
        {name: 'Nastya', id: v1(),},
        {name: 'Egor', id: v1(),},
    ],
    message: [
        {message: 'как дела', id: v1(),},
        {message: 'как дела', id: v1(),},
        {message: 'как дела', id: v1(),},
        {message: 'как дела', id: v1(),},
    ]
}

export function DialogReducer(state: DialogPageType = initialState, action: ActionsTypes): DialogPageType {
    switch (action.type) {
        case 'DIALOG/SEND-MESSAGE':
            const body = action.value
            return {
                ...state,
                message: [...state.message, {message: body, id: v1()}]
            }

        default:
            return state

    }
}
