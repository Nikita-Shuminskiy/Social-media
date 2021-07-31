import React from 'react';
import './App.css'
import Musick from './components/Musick/Musick';
import NavBar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/Header_Container';



function App() {
    return (
        <div className={'app-wrapper'}>
           <HeaderContainer/>
            <NavBar />
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer />}/>
                <Route path={'/profile/:id?'}
                       render={() => <ProfileContainer />}/>
                <Route path={'/users'}
                       render={() => <UserContainer/>}/>
            </div>
            <Settings/>
        </div>
    );
}

export default App;
