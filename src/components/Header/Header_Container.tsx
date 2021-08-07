import React from 'react';
import Header from './Header';
import axios from 'axios';
import { DataTypeAuth, setUserDataAuthMe,autMeThunk } from '../../Redux/Auth_Reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';
import { authMeAPI, usersAPI } from '../../Api/Api';


export type HeaderContainerType = {
    login:string
    isAuth:boolean
    autMeThunk:() => any
}
export type State = {}

class HeaderContainer extends React.Component<HeaderContainerType, State> {
    componentDidMount() {
        this.props.autMeThunk()
    }

    render() {
        return <Header
            img={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}
            alt={'logo'} login={this.props.login}  isAuth={this.props.isAuth}/>
    }
}

export const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authMe.isAuth,
    login: state.authMe.data.login,
})
export default connect(mapStateToProps, {autMeThunk})(HeaderContainer);