import React from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Messege from './Messege/Messege'
import { ActionsTypes, dialogPageType } from '../../Redux/state';


export type DialogsType = {
    store: dialogPageType
    newMessage:string
    dispatch:(action:ActionsTypes) => void
}

const Dialogs = (props:DialogsType) => {
    let DialogsElement = props.store.dialogs.map(d => <DialogItem  id={d.id} name={d.name}/>)
    let MessegeElement = props.store.messege.map(m => <Messege newMessage={props.newMessage}
                                                               dispatch={props.dispatch.bind(props.store)}
                                                                   messege={m.messege}/>)

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