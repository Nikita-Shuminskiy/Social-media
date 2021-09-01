import React from 'react';
import Header from './Header';
import {logoutThunk } from '../../Redux/Auth_Reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';


export type HeaderContainerType = {
    login: string | null
    logoutThunk: () => void
    isAuth:boolean
}
export type State = {}

class HeaderContainer extends React.Component<HeaderContainerType, State> {


    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logoutThunk={this.props.logoutThunk}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    login: state.authMe.login,
    isAuth: state.authMe.isAuth
})
export default connect(mapStateToProps, { logoutThunk})(HeaderContainer);