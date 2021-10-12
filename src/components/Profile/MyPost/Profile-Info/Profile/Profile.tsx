import React, { useState } from 'react';
import s from './Profile.module.css';
import { ProfilePageType } from '../../../../../Redux/React_Redux_StoreType/types/StateType';
import Photos
    from '../../../../../img/user.png';
import { ProfileStatuses } from '../ProfileStatuses';
import { GetProfileUserType } from '../../../../../Api/Api';
import Button from '@material-ui/core/Button';
import {  makeStyles } from '@material-ui/core';
import ProfileData from '../ProfileData/InfoProfile/ProfileData';
import ProfileFormikDataForm from '../ProfileData/ProfileDataForm/ProfileFormikDataForm';
import Box from '@material-ui/core/Box/Box';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';


export type ProfileType = {
    profileUsers: ProfilePageType
    status: string
    updateStatusThunk: (status: string) => void
    updatePhoto: (photo: string) => void
    owner: number
    updProfileData: (data: GetProfileUserType) => void
}
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export const Profile: React.FC<ProfileType> = (props) => {
    const classes = useStyles();
    const [editMode, setEditMode] = useState(false)
    if (!props.profileUsers) {
        return <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    }
    const uploadPhoto = (e: any) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    }
    const openEditMenu = () => setEditMode(true)

    return (
        <div className={s.container} >
               <div>
                   <img className={s.img_avatar}
                        src={props.profileUsers?.profileUsers?.photos?.large !== undefined ? props.profileUsers?.profileUsers?.photos?.large : Photos}/>
                   <ProfileStatuses updateStatusThunk={props.updateStatusThunk} status={props.status}/>
                   <div>
                       {!props.owner &&
                       <div>
                           <input
                               accept="image/*"
                               className={classes.input}
                               id="contained-button-file"
                               multiple
                               type="file"
                               onChange={uploadPhoto}
                           />

                           <label htmlFor="contained-button-file">
                               <Button variant="contained" color="secondary" component="span">
                                   Upload Photo
                               </Button>
                           </label>
                       </div>}
                   </div>
               </div>
               <div className={s.info}>
                       {editMode ?
                           <ProfileFormikDataForm setEditMode={setEditMode} updProfileData={props.updProfileData}/>
                           :
                           <ProfileData openEditMenu={openEditMenu} profileUsers={props.profileUsers.profileUsers} />}
               </div>
        </div>
    )
}
