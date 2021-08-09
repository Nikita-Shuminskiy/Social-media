import React from 'react';
import Header from './Header';
import axios from 'axios';
import { autMeThunk } from '../../Redux/Auth_Reducer';
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
        return <Header login={this.props.login}  isAuth={this.props.isAuth}/>
    }
}

export const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authMe.isAuth,
    login: state.authMe.data.login,
})
export default connect(mapStateToProps, {autMeThunk})(HeaderContainer);