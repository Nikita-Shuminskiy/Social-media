import { DialogPageType, MessegeType } from './React_Redux_StoreType/types/StateType';
import { ActionsTypes } from './redux-store';


export const sendMessageAC = (textMessage: string) => ({type: 'SEND-MESSAGE', message: textMessage} as const)
export const messageValueAC = (textValue: string) => ({type: 'MESSEGE-VALUE', newMessagePost: textValue} as const)


let initialState:DialogPageType = {
    newMessage: '',
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

export function dialogReducer(state:DialogPageType  = initialState , action: ActionsTypes) {
    switch (action.type) {
        case 'SEND-MESSAGE':
         const body = state.newMessage
            return {
             ...state,
                newMessage: '',
                message: [...state.message, {id:4, message:body}]
            }
        case 'MESSEGE-VALUE':
           return {
                ...state,
                newMessage: action.newMessagePost
            }
        default:
            return state

    }
}
