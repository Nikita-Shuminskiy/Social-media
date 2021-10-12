import React, { ChangeEvent, useState } from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Message from './Messege/Message'
import { DialogPageType } from '../../Redux/React_Redux_StoreType/types/StateType';
import { TextField } from '@material-ui/core';
import FriendsContainer from '../Navbar/FriendsBlock/FriendsBlockContainer';
import { useStyles } from '../Profile/MyPost/MyPost';
import Button from '@material-ui/core/Button';


export type DialogsType = {
    dialogsPage: DialogPageType
    sendMessage: (value: string) => void
}


const Dialogs = (props: DialogsType) => {
    const classes = useStyles();
    const [value, setValue] = useState('')

    const onChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const addNewMessage = () => {
        if (value !== '') {
            props.sendMessage(value)
            setValue('')
        }
    }
    let DialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let MessageElement = props.dialogsPage.message.map(m => <Message key={m.id} message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item + ' ' + s.active}>
                {DialogsElement}
            </div>
            <div className={s.messages_item}>
                {MessageElement}
                <div className={s.textFieldBlock}>
                    <TextField
                        InputProps={{
                            className: classes.input,
                        }}
                        placeholder={'Enter Message'}
                        onChange={onChangeMessage}
                        value={value}
                    />
                    <Button type={'submit'} variant="contained" color="secondary" size={'small'}
                            onClick={addNewMessage}>Send</Button>
                </div>
            </div>
            <FriendsContainer/>
        </div>
    )
}



export default Dialogs