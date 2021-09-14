import React from 'react';
import { GetProfileUserType } from '../../../../../Api/Api';
import { Button } from '@material-ui/core';

type ProfileDataType = {
    profileUsers: GetProfileUserType
    openEditMenu: () => void
}

const ProfileData = (props: ProfileDataType) => {
    return <div>
        <div>
            <Button type={'submit'} onClick={props.openEditMenu} size={'small'} variant={'contained'}
                    color={'secondary'}>Edit-Info</Button>
        </div>

        <div><b> Full Name:</b> {props.profileUsers.fullName}</div>
        <div><b>looking For A Job:</b> {props.profileUsers.lookingForAJob ? 'true' : 'false'}</div>
        <div><b> My Profession Skills:</b> {props.profileUsers.lookingForAJobDescription}</div>
        <div><b>About Me:</b> {props.profileUsers.aboutMe}</div>
    </div>
}

export default ProfileData;