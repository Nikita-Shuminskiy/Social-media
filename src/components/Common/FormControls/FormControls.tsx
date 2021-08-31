import React from 'react'
import s from './FormControls.module.css'


export const TextControlForm = ({input, meta,children,  ...props}: any) => {

    const classFormControl = meta.error && meta.touched

    return <div className={classFormControl ? s.error : s.formControl}>
        {children === 'input' ? <input {...input} {...props}/> : <input className={s.fromPostProfile} {...input} {...props} /> }
        {classFormControl && <div><span className={s.errorText}>{meta.error} </span></div>}
    </div>
}
