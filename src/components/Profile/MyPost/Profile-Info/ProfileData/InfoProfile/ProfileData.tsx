import React from 'react';
import { GetProfileUserType } from '../../../../../../Api/Api';
import { Button } from '@material-ui/core';
import s from './ProfileData.module.css'

type ProfileDataType = {
    profileUsers: GetProfileUserType
    openEditMenu: () => void
}

const ProfileData = (props: ProfileDataType) => {
    return <div className={s.container} >
        <div>
            <Button type={'submit'} onClick={props.openEditMenu} size={'small'} variant={'contained'}
                    color={'secondary'}>Edit-Info</Button>
        </div>

        <div><b> Full Name:</b> <span>{props.profileUsers.fullName}</span></div>
        <div><b>looking For A Job:</b> <span> {props.profileUsers.lookingForAJob ? 'true' : 'false'}</span> </div>
        <div><b> My skills:</b> <span>{props.profileUsers.lookingForAJobDescription}</span></div>
        <div><b>About Me:</b> <span>{props.profileUsers.aboutMe}</span></div>
    </div>
}

export default ProfileData;