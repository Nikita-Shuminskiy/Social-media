import React from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import s from './ProfileDataForm.module.css'
import { useStyles } from '../../../MyPost';
import { PhotosProfileType, ProfileType } from '../../../../../../Api/Api';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../../../Redux/Redux_Store';


type FormDataProfileType = {
    setEditMode:(edit:boolean) => void
    updProfileData:(value:ProfileType) => void
}

const ProfileFormikDataForm = (props:FormDataProfileType) => {
    const classes = useStyles();
    // @ts-ignore
    const photos = useSelector<AppStateType,PhotosProfileType>(state => state.profile.profileUsers.photos)

    const formik = useFormik({
        initialValues: {
            aboutMe: '',
            contacts:{
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 0,
        },
        onSubmit: values => {
            props.updProfileData({...values, photos})
            props.setEditMode(false)
        }
    })

    return<form className={s.container} onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <div>
                        <Button type={'submit'} size={'small'} variant={'outlined'} color={'secondary'}>Save Form</Button>
                    </div>
                    <b> Full Name:</b> <TextField
                    InputProps={{
                        className: classes.input,
                    }}
                    placeholder={'Name'}
                    type={'input'}
                    {...formik.getFieldProps('fullName')}
                />

                    <b>looking For A Job:</b> <FormControlLabel
                    label={'looking For A Job'}
                    control={<Checkbox
                        checked={formik.values.lookingForAJob}
                        {...formik.getFieldProps('lookingForAJob')}
                    />}
                />

                    <b> My Profession Skills:</b> <TextField
                    InputProps={{
                        className: classes.input,
                    }}
                    placeholder={'Profession skills'}
                    {...formik.getFieldProps('lookingForAJobDescription')}
                />

                    <b>About Me:</b> <TextField
                    InputProps={{
                        className: classes.input,
                    }}
                    placeholder={'About Me'}
                    type={'input'}
                    {...formik.getFieldProps('aboutMe')}
                />
                </FormGroup>
            </FormControl>
                <div>
            </div>
        </form>
}
export default ProfileFormikDataForm
