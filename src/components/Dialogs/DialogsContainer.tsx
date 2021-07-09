import React, { ChangeEvent } from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Messege from './Messege/Messege'
import { ActionsTypes } from '../../Redux/store';
import { DialogPageType, messageValueAC, sendMessageAC } from '../../Redux/DialogReducer';
import Dialogs from './Dialogs';


export type DialogsType = {
    store: DialogPageType
    newMessage:string
    dispatch:(action:ActionsTypes) => void
}

export const DialogsContainer = (props:DialogsType) => {

    const addMessage = () => {
        let textMessage = (props.newMessage)
        props.dispatch(sendMessageAC(textMessage))
        props.dispatch(messageValueAC(''))
    }
    const changeMessageAdd = (body:string) => {
      /*  let textValue = (e.currentTarget.value)*/
        /* props.MessageADDpost(e.currentTarget.value)*/
        props.dispatch(messageValueAC(body))
    }
    return (
        <div className={s.dialogs}>
          <Dialogs store={props.store} changeMessageAdd={changeMessageAdd} addMessage={addMessage} />
        </div>)
}

