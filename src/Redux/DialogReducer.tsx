import { ActionsTypes } from './store';


export const sendMessageAC = (textMessage: string) => ({type: 'SEND-MESSAGE', message: textMessage} as const)
export const messageValueAC = (textValue: string) => ({type: 'MESSEGE-VALUE', newMessage: textValue} as const)

export type MessegeType = {
    messege: string
    id: number
}
export type DialogType = {
    name: string
    id: number
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messege: Array<MessegeType>
    newMessage: string
}

let initialState = {
    dialogs: [
        {name: 'nick', id: 1,},
        {name: 'Leks', id: 2,},
        {name: 'Nastya', id: 3,},
        {name: 'Egor', id: 4,},
    ],
    newMessage: '',
    messege: [
        {messege: 'как дела', id: 1,}, {
            messege: 'как дела', id: 2,
        }, {
            messege: 'как дела', id: 3,
        }

    ]
}

export function dialogReducer(state:DialogPageType  = initialState , action: ActionsTypes) {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newPostMessage: MessegeType = {
                messege: action.message,
                id: new Date().getTime(),
            }
            state.messege.push(newPostMessage)
            return state
        case 'MESSEGE-VALUE':
            state.newMessage = action.newMessage
            return state
        default:
            return state

    }
}