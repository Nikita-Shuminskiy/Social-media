import React, { ComponentType } from 'react';
import './App.css'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { connect, Provider } from 'react-redux';
import store, { AppStateType } from './Redux/Redux_Store';
import { compose } from 'redux';
import { initializeAppThunk } from './Redux/App-reducer';
import Loader from './components/Common/Loader/Loader';
import Login from './components/Login/LoginForm';
import HeaderContainer from './components/Header/Header_Container';
import NavBar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const UserContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Musick = React.lazy(() => import( './components/Musick/Musick'))

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
                    <React.Suspense fallback={<Loader/>}>
                        <Switch>
                            <Route path={'/dialogs'} component={DialogsContainer}/>
                            <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                            <Route path={'/users'} component={UserContainer}/>
                            <Route path={'/login'} component={Login}/>
                            <Route path={'/musick'} component={Musick}/>
                        </Switch>
                    </React.Suspense>
                </div>
                <Settings/>

            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.appReducer.initialized
})

const AppContainer = compose<ComponentType>(connect(mapStateToProps, {initializeThunk: initializeAppThunk}), withRouter)(App)

const GlobalAppComponent = () => {
    return (<BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>)
}
export default GlobalAppComponent