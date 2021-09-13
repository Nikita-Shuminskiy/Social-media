import React from 'react';
import { GetProfileUserType, ProfileContactsType } from '../../../../../Api/Api';
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
              >
           <Grid item
                 xs={10}
                 direction="column"
                 justifyContent="center" >
               <div>
                   <div>
                       <Button type={'submit'} onClick={props.openEditMenu} variant={'contained'} color={'secondary'}>Edit-Info</Button>
                   </div>
                   <div><b> Full Name:</b> {props.profileUsers.fullName}</div>
                   <div><b>looking For A Job:</b> {props.profileUsers.lookingForAJob ? 'true' : 'false'}</div>
                   <div><b> My Profession Skills:</b> {props.profileUsers.lookingForAJobDescription}</div>
                  <div> <b>About Me:</b> {props.profileUsers.aboutMe}</div>
               </div>
           </Grid>
       </Grid>
    );
};

export default ProfileData;