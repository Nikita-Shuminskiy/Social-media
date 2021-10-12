import React, { ComponentType } from 'react';
import './App.css'
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { connect, Provider } from 'react-redux';
import store, { AppStateType } from './Redux/Redux_Store';
import { compose } from 'redux';
import { initializeAppThunk } from './Redux/App-reducer';
import NavBar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Loader from './components/Common/Loader/Loader';


const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const UserContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Musick = React.lazy(() => import( './components/Musick/Musick'))
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'))

type AppPropsType = {
    initializeAppThunk: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {

    catchAllErrors = ( () => {
        alert('Errors Global')
    })
    componentDidMount() {
        this.props.initializeAppThunk()
        window.addEventListener('unhandledrejection', this.catchAllErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }


        return (
            <div className={'app-wrapper'}>

                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <React.Suspense fallback={<CircularProgress/>}>
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                            <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                            <Route path={'/dialogs'} component={DialogsContainer}/>
                            <Route path={'/users'} component={UserContainer}/>
                            <Route path={'/login'} component={LoginContainer}/>
                            <Route path={'/musick'} component={Musick}/>
                            <Route path={'*'} render={() => <div>404 not found</div>}/>
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

const AppContainer = compose<ComponentType>
(connect(mapStateToProps,
    {initializeAppThunk}),
    withRouter)(App)

const GlobalAppComponent = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default GlobalAppComponent