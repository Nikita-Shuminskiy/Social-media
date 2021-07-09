import React, { ChangeEvent } from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Messege from './Messege/Messege'
import { DialogPageType } from '../../Redux/DialogReducer';


export type DialogsType = {
    store: DialogPageType
    changeMessageAdd: (body:string) => void
    addMessage: () => void
}

const Dialogs = (props: DialogsType) => {
    let DialogsElement = props.store.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let MessegeElement = props.store.messege.map(m => <Messege messege={m.messege}/>)

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.changeMessageAdd(body)
    }
    const onAddMessage = () => {
        props.addMessage()
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item + ' ' + s.active}>
                {DialogsElement}
            </div>
            <div className={s.meseges_item}>
                {MessegeElement}
                <div>
                     <textarea onChange={onChangeMessage}
                               cols={10} value={props.store.newMessage}/>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>

        </div>)
}

export default Dialogs