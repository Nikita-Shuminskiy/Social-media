import React from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Messege from './Messege/Messege'
import { addPost, stateType } from '../../Redux/state';


export type DialogsType = {
   state: stateType
    addPost: (message:string) => void
    addMessage:(message:string) => void
    MessageADDpost:(newMessahe:string) => void
    newMessage:string
}

const Dialogs = (props:DialogsType) => {
    let DialogsElement = props.state.dialogPage.dialogs.map(d => <DialogItem  id={d.id} name={d.name}/>)
    let MessegeElement = props.state.dialogPage.messege.map(m => <Messege newMessage={props.newMessage} MessageADDpost={props.MessageADDpost} addMessage={props.addMessage} addPost={addPost} messege={m.messege}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item + ' ' + s.active}>
                {DialogsElement}
            </div>
            <div className={s.meseges_item}>
                {MessegeElement}
            </div>
        </div>)
}

export default Dialogs