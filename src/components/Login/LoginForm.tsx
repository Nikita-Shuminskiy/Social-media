import {InjectedFormProps, reduxForm } from 'redux-form'
import React from 'react'
import { required } from '../../Utils/Validators/Validators';
import { createField, TextControlForm } from '../Common/FormControls/FormControls';
import { connect } from 'react-redux';
import { loginThunk } from '../../Redux/Auth_Reducer';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../Redux/Redux_Store';
import s from './LoginForm.module.css'


type FormDataType = {
    email: string
    password: number
    rememberMe: boolean
    captcha:string
}
type LoginFormOwnPropsType = {
    captcha:string | null
}



const MyForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnPropsType> & LoginFormOwnPropsType >
    = ({captcha,handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
           {/* <div>
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
                    name={'rememberMe'}
                    component={'input'}
                    type="checkBox"
                />

                <span>Remember Me</span>
            </div>*/}
            {createField("Email", "email", [required], TextControlForm)}
            {createField("Password", "password", [required], TextControlForm, {type: "password"})}
            {createField(null, "rememberMe", [], TextControlForm, {type: "checkbox"}, "remember me")}

            <button>Send</button>
            {captcha && <img className={s.imgCaptcha} src={captcha} /> }
            {captcha && createField("Symbols from image", "captcha", [required], TextControlForm)}
            {error  && <div className={s.errorForm}>{error}</div>}
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType,LoginFormOwnPropsType>({form: 'login'})(MyForm)


type ConnectType = MapDispatchToPropsType & MapStatePropsType

const Login = ({loginThunk, isAuth,captcha}: ConnectType) => {
    const onSubmit = (formData: FormDataType) => {
        loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)

    }
   if(isAuth) {
       console.log('login')
      return <Redirect to={'/profile'}/>
   }


    return <div>
        <h1>Login</h1>
        <LoginReduxForm captcha={captcha}  onSubmit={onSubmit}/>
    </div>
}
type MapDispatchToPropsType = {
    loginThunk: (email: string, password: number, rememberMe: boolean, captcha: string | null) => void
}
type MapStatePropsType = {
    captcha:string | null
    isAuth: boolean
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captcha: state.authMe.captcha,
    isAuth: state.authMe.isAuth
})

export default connect(MapStateToProps, {loginThunk})(Login)