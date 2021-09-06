import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { TextControlForm } from '../../../../Common/FormControls/FormControls';
import { GetProfileUserType } from '../../../../../Api/Api';

type FormData = {
    profileUsers: GetProfileUserType
    initialValues:GetProfileUserType
}

const ProfileDataForm: React.FC<FormData & InjectedFormProps<{}, FormData>> = (props: FormData & InjectedFormProps<{}, FormData>) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>Save Form</button>
        </div>
        <b> Full Name:</b> <Field name={'FullName'}
                                  placeholder={'Name - Profile'}
                                  type={'input'}
                                  component={TextControlForm}
    />

        <b>looking For A Job:</b> <Field name={'LookingForAJob'}
                                         type={'checkbox'}
                                         component={TextControlForm}/>

        <b> My Profession Skills:</b> <Field name={'LookingForAJobDescription'}
                                             placeholder={'Profession skills'}
                                             component={TextControlForm}/>

        <b>About Me:</b> <Field name={'AboutMe'}
                                placeholder={'About - Me'}
                                type={'input'}
                                component={TextControlForm}
    />
        <b>Contact:</b>{Object.keys(props.profileUsers.contacts).map((key) => {
        return <div key={key}>
            <b>{key}:{<Field name={ 'Contact ' + key}
                             placeholder={key}
                             type={'input'}
                             component={TextControlForm}/>} </b>
        </div>
    })}
    </form>

};

// @ts-ignore
const ProfileDataReduxForm = reduxForm<FormData>({form: 'Edit-Profile-Data'})(ProfileDataForm)

export default ProfileDataReduxForm
