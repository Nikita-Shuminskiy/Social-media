import { DialogPageType } from './React_Redux_StoreType/types/StateType';
import { ActionsTypes } from './Redux_Store';
import { v1 } from 'uuid';



export const sendMessage = (value: string) => ({type: 'SEND-MESSAGE',   value} as const)


let initialState:DialogPageType = {
    dialogs: [
        {name: 'nick', id: 1,},
        {name: 'Leks', id: 2,},
        {name: 'Nastya', id: 3,},
        {name: 'Egor', id: 4,},
    ],
    message: [
        {
            message: 'как дела', id: 1,
        }, {
            message: 'как дела', id: 2,
        }, {
            message: 'как дела', id: 3,
        }
    ]
}

export function DialogReducer(state:DialogPageType  = initialState , action: ActionsTypes) {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const body = action.value
            return {
             ...state,
                message: [...state.message, {message:body, id:v1()}]
            }

        default:
            return state

    }
}
