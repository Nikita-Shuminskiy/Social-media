import React, { ChangeEvent } from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Message from './Messege/Message'
import { DialogPageType } from '../../Redux/React_Redux_StoreType/types/StateType';
import { messageValue, sendMessage } from '../../Redux/DialogReducer';


export type DialogsType = {
    dialogsPage: DialogPageType
    messageValue: (body: string) => void
    sendMessage: (text:string) => void
    newValue:string
}

const Dialogs = (props: DialogsType) => {
    let DialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let MessageElement = props.dialogsPage.message.map(m => <Message message={m.message}/>)

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.messageValue(body)
    }
    const onAddMessage = () => {
        props.sendMessage(props.newValue)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item + ' ' + s.active}>
                {DialogsElement}
            </div>
            <div className={s.messages_item}>
                {MessageElement}
                <div>
                     <textarea value={props.newValue} onChange={onChangeMessage}
                               cols={10}/>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>

        </div>)
}

export default Dialogs