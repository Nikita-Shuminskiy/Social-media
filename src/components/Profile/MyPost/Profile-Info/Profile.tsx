import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import { ProfilePageType } from '../../../../Redux/React_Redux_StoreType/types/StateType';
import Photos
    from '../../../../img/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png';
import { ProfileStatuses } from './ProfileStatuses';
import { GetProfileUserType } from '../../../../Api/Api';
import Button from '@material-ui/core/Button';
import { CircularProgress, Grid, makeStyles } from '@material-ui/core';
import ProfileData from './ProfileData/ProfileData';
import ProfileFormikDataForm from './ProfileData/ProfileFormikDataForm';


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
        return <CircularProgress/>
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
                        src={props.profileUsers.photos.small
                            ? props.profileUsers.photos.small
                            : Photos}/>
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
                               <Button variant="contained" color="primary" component="span">
                                   Upload
                               </Button>
                           </label>
                       </div>}
                   </div>
               </div>
               <div className={s.info}>
                   <div>
                       {editMode ?
                           <ProfileFormikDataForm setEditMode={setEditMode} updProfileData={props.updProfileData}/>
                           :
                           <ProfileData openEditMenu={openEditMenu} profileUsers={props.profileUsers.profileUsers} />}
                   </div>
               </div>
        </div>
    )
}
