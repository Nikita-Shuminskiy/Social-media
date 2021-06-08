import React from 'react';
import s from '../Dialogs.module.css';

export type MesageType = {
    messege: string
}


const Messege: React.FC<MesageType> = (props) => {
    return <div className={s.messeges}>{props.messege}</div>
}


export default Messege;