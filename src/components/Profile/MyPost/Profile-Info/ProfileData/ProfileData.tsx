import React from 'react';
import { ProfileUsersType } from '../../../../../Redux/React_Redux_StoreType/types/StateType';

type ProfileDataType = {
    profileUsers: ProfileUsersType
    openEditMenu: () => void
}

const ProfileData = (props: ProfileDataType) => {
    return (
        <div>
            <div><button onClick={props.openEditMenu} >Edit info</button></div>
            <b> Full Name:</b> {props.profileUsers.fullName}
            <b>looking For A Job:</b>{props.profileUsers.lookingForAJob}
            <b> My Profession Skills:</b>{props.profileUsers.lookingForAJobDescription}
            <b>About Me:</b>{props.profileUsers.aboutMe}
            <b>Contacts:</b>
        </div>
    );
};
type ContactType = {
    contactValue:any
}
export const Contact = ({contactValue}:ContactType) => {

    return <div><b>{contactValue[0]}</b>:{contactValue}</div>
}

export default ProfileData;