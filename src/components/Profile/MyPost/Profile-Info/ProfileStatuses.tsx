import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './ProfileStatuses.module.css'
import { TextField } from '@material-ui/core';

type ProfileStatusesType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export const ProfileStatuses = (props: ProfileStatusesType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditModeSpan = () => {
        setEditMode(true)
        setStatus(props.status)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    return <div  >
        {
            !editMode ?
                <div className={s.status} >
                   <b> Status:</b>  <span onDoubleClick={activateEditModeSpan}>{props.status || 'No Status'}</span>
                </div>
                :
                <div className={s.status}>
                    <TextField
                        onChange={onStatusChange}
                        placeholder={'Enter Post'}
                        onBlur={deactivateEditMode}
                        value={status}
                        autoFocus
                    />
                </div>
        }
    </div>

};
