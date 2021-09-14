import React from 'react';
import { GetProfileUserType, ProfileContactsType } from '../../../../../Api/Api';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { AppStateType } from '../../../../../Redux/Redux_Store';
import { useSelector } from 'react-redux';


type FormDataProfileType = {
    setEditMode:(edit:boolean) => void
    updProfileData:(value:GetProfileUserType) => void
}

const ProfileFormikDataForm = (props:FormDataProfileType) => {
  /*  const contact = useSelector<AppStateType,ProfileContactsType>(state => state.profile.profileUsers.contacts)*/

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
            props.updProfileData(values)
            props.setEditMode(false)
        }
    })

    return<form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <div>
                        <Button type={'submit'} size={'small'} variant={'outlined'} color={'secondary'}>Save Form</Button>
                    </div>
                    <b> Full Name:</b> <TextField
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
                    placeholder={'Profession skills'}
                    {...formik.getFieldProps('lookingForAJobDescription')}
                />

                    <b>About Me:</b> <TextField
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
