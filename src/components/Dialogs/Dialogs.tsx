import React, { ChangeEvent } from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Messege from './Messege/Messege'
import { ActionsTypes, DialogPageType} from '../../Redux/store';
import { messageValueAC, sendMessageAC } from '../../Redux/Dialog-Reduser';


export type DialogsType = {
    store: DialogPageType
    newMessage:string
    dispatch:(action:ActionsTypes) => void
}

const Dialogs = (props:DialogsType) => {
    let DialogsElement = props.store.dialogs.map(d => <DialogItem  id={d.id} name={d.name}/>)
    let MessegeElement = props.store.messege.map(m => <Messege messege={m.messege}/>)
    const addMessage = () => {
        let textMessage = (props.newMessage)
        props.dispatch(sendMessageAC(textMessage))
        props.dispatch(messageValueAC(''))
    }
    const changeMessageAdd = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let textValue = (e.currentTarget.value)
        /* props.MessageADDpost(e.currentTarget.value)*/
        props.dispatch(messageValueAC(textValue))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item + ' ' + s.active}>
                {DialogsElement}
            </div>
            <div className={s.meseges_item}>
                {MessegeElement}
                <div>
                     <textarea onChange={changeMessageAdd}
                               cols={10} value={props.newMessage}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>)
}

export default Dialogs