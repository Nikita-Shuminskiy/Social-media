import React from 'react'
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    TextField
} from '@material-ui/core'
import { useFormik } from 'formik';
import { Redirect } from 'react-router-dom';
import { LoginUserDataType } from '../../Api/Api';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
type LoginPropsType = {
    loginThunk: (data:LoginUserDataType) => void
    captcha: string | null
    isAuth: boolean
}


export const Login = ({loginThunk, captcha, isAuth}: LoginPropsType) => {

    const formik = useFormik({
        initialValues:  {
            email: '',
            password: null as null | number,
            rememberMe: false,
            captcha: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            alert(values)
            loginThunk(values)
            formik.resetForm()
        },
    })

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <Grid container justify="center">
        <Grid item xs={4}>
            <FormLabel>
                <p>To log in get registered
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'}>here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </FormLabel>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}

                        />
                        {formik.errors.email ? <div> {formik.errors.email}</div> : null}
                        <TextField
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}

                        />
                        {
                            formik.touched.email &&
                            formik.errors.password ? <div> {formik.errors.password}</div> : null}

                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                checked={formik.values.rememberMe}
                                {...formik.getFieldProps('rememberMe')}
                            />}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                        {captcha && <img src={captcha}/>}
                        {captcha && <TextField
                            label="Captcha"
                            margin="normal"
                            placeholder={"Symbols from image"}
                            {...formik.getFieldProps('captcha')}

                        />}
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
