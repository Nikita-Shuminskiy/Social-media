import React from 'react';
import Header from './Header';
import axios from 'axios';
import { DataTypeAuth, setUserDataAuthMe } from '../../Redux/Auth_Reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/Redux_Store';


export type HeaderContainerType = {
    setUserDataAuthMe: (data: DataTypeAuth) => void
    login:string
    isAuth:boolean
}
export type State = {}

class HeaderContainer extends React.Component<HeaderContainerType, State> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
               if (response.data.resultCode === 0) {
                   this.props.setUserDataAuthMe(response.data.data)
               }
            })
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
export default connect(mapStateToProps, {setUserDataAuthMe})(HeaderContainer);