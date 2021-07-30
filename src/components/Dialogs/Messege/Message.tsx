import React from 'react';
import s from '../Dialogs.module.css';

export type MessageType = {
    message: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.messages}>
            <span>{props.message}</span>
        </div>

    )
}


export default Message;