import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import React from 'react'
import { maxLengthCreator, required } from '../../Utils/Validators/Validators';
import { TextControlForm } from '../Common/FormControls/FormControls';
import { connect } from 'react-redux';
import { loginThunk } from '../../Redux/Auth_Reducer';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../Redux/Redux_Store';


type FormDataType = {
    login: string
    password: number
    rememberMe: boolean
}
const maxLengthValidator = maxLengthCreator(30)

const MyForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLengthValidator]}
                    placeholder={'Login'}
                    name={'login'}
                    component={TextControlForm}
                    children={'input'}/>
            </div>
            <div>
                <Field
                    validate={[required, maxLengthValidator]}
                    placeholder={'Password'}
                    name={'password'}
                    component={TextControlForm}
                    type="password"
                    children={'input'}
                />
            </div>
            <div>
                <Field
                    validate={[required, maxLengthValidator]}
                    name={'rememberMe'}
                    component={'input'}
                    type="checkBox"/>
                <span>Remember Me</span>

            </div>

            <button>Send</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(MyForm)

type MapDispatchToPropsType = {
    loginThunk: (email: string, password: number, rememberMe: boolean) => void
}
type MapStatePropsType = {
    isAuth: boolean
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.authMe.isAuth
})

type ConnectType = MapDispatchToPropsType & MapStatePropsType

const Login = ({loginThunk, isAuth}: ConnectType) => {
    const onSubmit = (formData: FormDataType) => {
        loginThunk(formData.login, formData.password, formData.rememberMe)
    }
    if (isAuth) return <Redirect to={'/profile'}/>
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(MapStateToProps, {loginThunk})(Login)