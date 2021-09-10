import React from 'react';
import { GetProfileUserType } from '../../../../../Api/Api';
import { Button, Grid, TextField } from '@material-ui/core';

type ProfileDataType = {
    profileUsers: GetProfileUserType
    openEditMenu: () => void
}

const ProfileData = (props: ProfileDataType) => {
    return (
       <Grid container
             direction="column"
             justifyContent="center"
             alignItems="center" >
           <Grid item
                 xs={4}
                 direction="column"
                 justifyContent="center" >
               <div>
                   <div>
                       <Button type={'submit'} onClick={props.openEditMenu} variant={'contained'} color={'secondary'}>Edit-Info</Button>
                   </div>
                   <b> Full Name:</b> {props.profileUsers.fullName}
                   <b>looking For A Job:</b>{props.profileUsers.lookingForAJob}
                   <b> My Profession Skills:</b>{props.profileUsers.lookingForAJobDescription}
                   <b>About Me:</b>{props.profileUsers.aboutMe}
                   <b>Contact:</b>{
                   props.profileUsers.contacts !== null && props.profileUsers.contacts !== undefined && Object.keys(props.profileUsers.contacts).map((key) => {
                       return <div key={key}>
                           <b>{key}:{
                               //@ts-ignore
                               props.profileUsers.contacts[key]
                           }</b>
                       </div>
                   })}
               </div>
           </Grid>
       </Grid>
    );
};
type ContactType = {
    contactValue:any
}
export const Contact = ({contactValue}:ContactType) => {

    return <div><b>{contactValue[0]}</b>:{contactValue}</div>
}

export default ProfileData;