import { ActionsTypes, DialogPageType, MessegeType } from './store';


export const sendMessageAC = (textMessage: string) => ({type: 'SEND-MESSAGE', message: textMessage} as const)
export const messageValueAC = (textValue: string) => ({type: 'MESSEGE-VALUE', newMessage: textValue} as const)


export function dialogReduser(dialogPage: DialogPageType, action: ActionsTypes):DialogPageType {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newPostMessage: MessegeType = {
                messege: action.message,
                id: new Date().getTime(),
            }
            dialogPage.messege.push(newPostMessage)
            return dialogPage
        case 'MESSEGE-VALUE':
            dialogPage.newMessage = action.newMessage
            return dialogPage
        default:
            return dialogPage

    }
}