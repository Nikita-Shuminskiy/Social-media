import React, { ChangeEvent, useEffect, useState } from 'react';

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


    return <div>
        {
            !editMode ?
                <div>
                    <span onDoubleClick={activateEditModeSpan}>{props.status || 'No Status'}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                           value={status}/>
                </div>
        }
    </div>

};
