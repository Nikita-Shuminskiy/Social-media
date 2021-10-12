import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './ProfileStatuses.module.css'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


type ProfileStatusesType = {
    status: string
    updateStatusThunk: (status: string) => void
}

const useStyles = makeStyles((theme) => ({
    input: {

       color: "white",
    },
}));
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
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)
    const classes = useStyles();
    return <div className={s.container}>
        {
            !editMode ?
                <div onDoubleClick={activateEditModeSpan} className={s.status}>
                    <b> status:</b> <span>{props.status || 'No Status'}</span>
                </div>
                :
                <div className={s.status}>
                    <TextField
                        InputProps={{
                            className: classes.input,
                        }}
                        onChange={onStatusChange}
                        placeholder={'Set Status'}
                        onBlur={deactivateEditMode}
                        value={status}
                        autoFocus
                    />
                </div>
        }
    </div>

};
