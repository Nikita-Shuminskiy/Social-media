import React from 'react';
import Header from './Header';
import { autMeThunk, logoutThunk } from '../../Redux/Auth_Reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';


export type HeaderContainerType = {
    login: string | null
    isAuth: boolean
    autMeThunk: () => any
    logoutThunk: () => void
}
export type State = {}

class HeaderContainer extends React.Component<HeaderContainerType, State> {
    componentDidMount() {
        this.props.autMeThunk()
    }

    render() {
        return <Header login={this.props.login} logoutThunk={this.props.logoutThunk} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authMe.isAuth,
    login: state.authMe.data?.login,
})
export default connect(mapStateToProps, {autMeThunk, logoutThunk})(HeaderContainer);