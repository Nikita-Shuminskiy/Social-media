import React, { ComponentType } from 'react';
import './App.css'
import Musick from './components/Musick/Musick';
import NavBar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import { NavLink, Route, withRouter } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/Header_Container';
import Login from './components/Login/LoginForm';
import { connect } from 'react-redux';
import { AppStateType } from './Redux/Redux_Store';
import { compose } from 'redux';
import { initializeAppThunk } from './Redux/App-reducer';
import Loader from './components/Common/Loader/Loader';

type AppPropsType = {
    initializeThunk: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/users'}
                           render={() => <UserContainer/>}/>
                    <Route path={'/login'}
                           render={() => <Login/>}/>
                </div>
                <Settings/>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.appReducer.initialized
})

export default compose<ComponentType>(connect(mapStateToProps, {initializeThunk: initializeAppThunk}), withRouter)(App)
