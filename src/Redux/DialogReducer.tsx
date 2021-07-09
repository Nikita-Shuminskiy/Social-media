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
            const newPostMessage: MessegeType = {
                message: action.message,
                id: new Date().getTime(),
            }
            const stateCopy = {...state}
            stateCopy.message.push(newPostMessage)
            stateCopy.newMessage = ''
            return stateCopy
        case 'MESSEGE-VALUE':
            const stateCopy2 = {...state}
            stateCopy2.newMessage = action.newMessagePost
            return stateCopy2
        default:
            return state

    }
}
