import React  from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { TextControlForm } from '../../../../Common/FormControls/FormControls';
import { maxLengthCreator, required } from '../../../../../Utils/Validators/Validators';
import { ProfileUsersType } from '../../../../../Redux/React_Redux_StoreType/types/StateType';

type FormData = {
    profileUsers: ProfileUsersType
}

const ProfileDataForm: React.FC<FormData & InjectedFormProps<{}, FormData>> = (props: FormData & InjectedFormProps<{}, FormData>) => {

    const maxLengthValidator = maxLengthCreator(10)

    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>Save Form</button>
        </div>
        <b> Full Name:</b> <Field name={'fullName'}
                                  placeholder={'Name - Profile'}
                                  type={'input'}
                                  component={TextControlForm}
                                  validate={[required, maxLengthValidator]}/>

        <b>looking For A Job:</b> <Field name={'lookingForAJob'}
                                         type={'checkbox'}
                                         component={TextControlForm}/>

        <b> My Profession Skills:</b> <Field name={'lookingForAJobDescription'}
                                             placeholder={'Profession skills'}
                                             component={TextControlForm}/>

        <b>About Me:</b> <Field name={'aboutMe'}
                                placeholder={'About - Me'}
                                type={'input'}
                                component={TextControlForm}
                                validate={[required]}/>
        <b>Contact:</b>{Object.keys(props.profileUsers.contacts).map((key) => {
        return <div key={key}>
            <b>{key}:{<Field name={key}
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
