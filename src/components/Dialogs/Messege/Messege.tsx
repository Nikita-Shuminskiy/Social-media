import React, { ChangeEvent } from 'react';
import s from '../Dialogs.module.css';

export type MesageType = {
    messege: string
    addPost:(message:string) => void
    addMessage:(message:string) => void
    MessageADDpost:(newMessage:string) => void
    newMessage:string
}


const Messege: React.FC<MesageType> = (props) => {
    const MessegeRef = React.createRef<HTMLTextAreaElement>()


    const sendMessage = () => {
       if(MessegeRef.current) {
        /*   const textMessage = MessegeRef.current?.value*/
           props.addMessage(MessegeRef.current?.value)
       }
    }
    const changeMessageAdd = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.MessageADDpost(e.currentTarget.value)
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