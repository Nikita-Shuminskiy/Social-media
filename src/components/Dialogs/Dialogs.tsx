import React, { ChangeEvent } from 'react'
import DialogItem from './DialogItem/DiolagItem'
import s from './Dialogs.module.css'
import Message from './Messege/Message'
import { DialogPageType } from '../../Redux/React_Redux_StoreType/types/StateType';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../Utils/Validators/Validators';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';


export type DialogsType = {
    dialogsPage: DialogPageType
    sendMessage: (value:string) => void
}
type FormikErrorType = {
    valueMessage?:string
}


const Dialogs = (props: DialogsType) => {

    const formik = useFormik({
        initialValues:  {
            valueMessage:''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.valueMessage) {
                errors.valueMessage = 'Required';
            }
            return errors;
        },
        onSubmit: value => {
            value.valueMessage && props.sendMessage(value.valueMessage)
            formik.resetForm()
        }
    })

    let DialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let MessageElement = props.dialogsPage.message.map(m => <Message key={m.id} message={m.message}/>)



    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item + ' ' + s.active}>
                {DialogsElement}
            </div>
            <div className={s.messages_item}>
                {MessageElement}
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <TextField
                            placeholder={'Enter Message'}
                            {...formik.getFieldProps('valueMessage')}
                        />
                        {formik.errors.valueMessage ? <div><b> {formik.errors.valueMessage}</b></div> : null}
                        <button>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Dialogs