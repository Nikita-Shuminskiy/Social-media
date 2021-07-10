import React, { ChangeEvent } from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Messege from './Messege/Messege'
import { DialogPageType } from '../../Redux/React_Redux_StoreType/types/StateType';


export type DialogsType = {
    dialogsPage: DialogPageType
    changeMessageAdd: (body: string) => void
    addMessage: (text:string) => void
    newValue:string
}

const Dialogs = (props: DialogsType) => {
    let DialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let MessegeElement = props.dialogsPage.message.map(m => <Messege messege={m.message}/>)

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.changeMessageAdd(body)
    }
    const onAddMessage = () => {
        props.addMessage(props.newValue)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item + ' ' + s.active}>
                {DialogsElement}
            </div>
            <div className={s.meseges_item}>
                {MessegeElement}
                <div>
                     <textarea value={props.newValue} onChange={onChangeMessage}
                               cols={10}/>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>

        </div>)
}

export default Dialogs