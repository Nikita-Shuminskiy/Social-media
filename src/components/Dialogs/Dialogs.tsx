import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

type MesageType = {
    messege: string
}
type dialogsType = {
    name: string
    id: number
}
type DialogsArray = {
    name:string
    id:number
}
type MessegeType = {
    messege: string
}
const DialogItem: React.FC<dialogsType> = (props) => {
    let path = '/dialogs/' + props.id // склеиваем что бы айди присвоилось в путь /dialog/1
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}
const Messege: React.FC<MesageType> = (props) => {
    return <div className={s.messeges}>{props.messege}</div>
}



const Dialogs = () => {
    let dialogs:Array<DialogsArray> = [
        {
            name: 'nick',
            id: 1,
        },   {
            name: 'Leks',
            id: 2,
        },   {
            name: 'Nastya',
            id: 3,
        },   {
            name: 'Egor',
            id: 4,
        },
    ]
    let messege:MessegeType[] = [
        {
            messege: 'Hello= )',
        },   {
            messege: 'как дела',
        },   {
            messege: '12',
        },   {
            messege: '12113',
        }, {
            messege: '12113',
        }, {
            messege: '12113',
        },
    ]
    let DialogsElement = dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> )
    let MessegeElement = messege.map(mesege => <Messege messege={mesege.messege}/>)

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