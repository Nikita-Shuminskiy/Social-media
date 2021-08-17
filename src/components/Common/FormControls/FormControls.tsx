import React from 'react'
import s from './FormControls.module.css'


export const TextControlForm = ({input, meta,children,  ...props}: any) => {

    const classFormControll = meta.error && meta.touched

    return <div className={classFormControll ? s.error : s.formControll}>
        {children === 'input' ? <input {...input} {...props}/> : <textarea {...input} {...props} /> }
        {classFormControll && <div><span className={s.errorText}>{meta.error} </span></div>}
    </div>
}
