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
    // @ts-ignore
    const contact = useSelector<AppStateType,ProfileContactsType>(state => state.profile.profileUsers.contacts)

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
        validate: (values) => {
        },

        onSubmit: values => {
            alert(values)
            props.setEditMode(false)
            props.updProfileData(values)
            formik.resetForm()
        },
    })

    return <Grid  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center" >
        <Grid item xs={4}>
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <b> Full Name:</b> <TextField
                    placeholder={'Name - Profile'}
                    type={'input'}
                    {...formik.getFieldProps('fullName')}
                />

                    <b>looking For A Job:</b> <FormControlLabel
                    label={'loking'}
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
                    placeholder={'About - Me'}
                    type={'input'}
                    {...formik.getFieldProps('aboutMe')}
                />
                    <b>Contact:</b>{
                   contact !== null && contact !== undefined && Object.keys(contact).map((key) => {
                    return <div key={key}>
                        <b>{key}:{<TextField
                                                name={'contacts'}
                                             placeholder={key}
                                             type={'input'}

                        />} </b>
                    </div>
                })}
                </FormGroup>
            </FormControl>
                <div>
                <Button type={'submit'} variant={'contained'} color={'default'}>Save Form</Button>
            </div>
        </form>
        </Grid>
    </Grid>


};
export default ProfileFormikDataForm
