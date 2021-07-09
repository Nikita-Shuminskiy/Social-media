import React from 'react';
import s from '../Dialogs.module.css';

export type MesageType = {
    messege: string
}

const Messege: React.FC<MesageType> = (props) => {
    return (
        <div className={s.messeges}>
            <span>{props.messege}</span>
        </div>

    )
}


export default Messege;