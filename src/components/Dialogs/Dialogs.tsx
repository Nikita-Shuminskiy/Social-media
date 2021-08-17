import React, { ChangeEvent } from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Message from './Messege/Message'
import { DialogPageType } from '../../Redux/React_Redux_StoreType/types/StateType';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../Utils/Validators/Validators';
import { TextControlForm } from '../Common/FormControls/FormControls';


export type DialogsType = {
    dialogsPage: DialogPageType
    sendMessage: (value:string) => void
}

const Dialogs = (props: DialogsType) => {
    let DialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let MessageElement = props.dialogsPage.message.map(m => <Message key={m.id} message={m.message}/>)


    const onSubmit = (value: FormDataType) => {
            value.messageBodyNew &&   props.sendMessage(value.messageBodyNew)
            value.messageBodyNew = ''
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item + ' ' + s.active}>
                {DialogsElement}
            </div>
            <div className={s.messages_item}>
                {MessageElement}
                <FormReduxMessageAdd onSubmit={onSubmit} />
            </div>
        </div>
    )
}

 type FormDataType = {
    messageBodyNew:string
}
const maxLengthValidator = maxLengthCreator(10)

const AddMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Enter Message'}
                    component={TextControlForm}
                    name='messageBodyNew'
                    validate={[required, maxLengthValidator]}
                />
                <button>Send</button>
            </div>
        </form>
    )
}
const FormReduxMessageAdd = reduxForm<FormDataType>({form:'DialogAddMessageForm'})(AddMessageForm)

export default Dialogs