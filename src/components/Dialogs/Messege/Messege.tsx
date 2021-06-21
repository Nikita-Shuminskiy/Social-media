import React, { ChangeEvent } from 'react';
import s from '../Dialogs.module.css';
import { ActionsTypes, AddPostAC, MessageAddPostAC } from '../../../Redux/state';

export type MesageType = {
    messege: string
    newMessage:string
    dispatch:(action:ActionsTypes) => void
}

const Messege: React.FC<MesageType> = (props) => {
    const MessegeRef = React.createRef<HTMLTextAreaElement>()


    const sendMessage = () => {
       if(MessegeRef.current) {
           let text = (MessegeRef.current?.value)
        /*   const textMessage = MessegeRef.current?.value*/
          /* props.addMessage(MessegeRef.current?.value)*/
           props.dispatch(AddPostAC(text))
       }
    }
    const changeMessageAdd = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = (e.currentTarget.value)
       /* props.MessageADDpost(e.currentTarget.value)*/
        props.dispatch(MessageAddPostAC(text))
    }
    return (<div className={s.messeges}>
            <span>{props.messege}</span>
            <textarea onChange={changeMessageAdd}
             cols={10} ref={MessegeRef} value={props.newMessage}/>
            <button onClick={sendMessage}>Send</button>
    </div>

    )
}


export default Messege;