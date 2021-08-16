import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm/*: React.FC<InjectedFormProps<FormDataType>> */= () => {
    return (
        <form >
            {/*<div>
                <Field placeholder={'Login'} name={'login'} component='input'/>
            </div>

            <div>
                <Field placeholder={'Password'} name={'pasword'} compoment='input'/>
            </div>

            <div>
                <Field type={'checkBox'} name={'RememberMe'} component='input'/> <span>Remember Me</span>
            </div>*/}
            <div>
                <button>Sumbit</button>
            </div>
        </form>
    );
};

/*const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)*/

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm />
        </div>
    )
}
