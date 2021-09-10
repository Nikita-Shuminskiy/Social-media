import { AppStateType } from '../../Redux/Redux_Store';
import { connect } from 'react-redux';
import { loginThunk } from '../../Redux/Auth_Reducer';
import { Login } from './Login';
import React from 'react';
import { LoginUserDataType } from '../../Api/Api';



class LoginContainer extends React.Component<LoginContainerType> {

    render() {

        return (
            <>
                <Login loginThunk={this.props.loginThunk}
                       captcha={this.props.captcha}
                       isAuth={this.props.isAuth} />
            </>
        )
    }
}
const MapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captcha: state.authMe.captcha,
    isAuth: state.authMe.isAuth
})

//types
type LoginContainerType = MapDispatchToPropsType & MapStatePropsType
type MapDispatchToPropsType = {
    loginThunk: (data:LoginUserDataType) => void
}
type MapStatePropsType = {
    captcha:string | null
    isAuth: boolean
}

export default connect(MapStateToProps, {loginThunk})(Login)