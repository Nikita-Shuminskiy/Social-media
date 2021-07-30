import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Musick from './components/Musick/Musick';
import NavBar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UserContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



function App() {
    return (
        <div className={'app-wrapper'}>
            <Header
                img={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}
                alt={'logo'}/>
            <NavBar />
            <div className={'app-wrapper-content'}>
                <Route path={'/dialogs'}
                       render={() => <DialogsContainer />}/>
                <Route path={'/profile/:userId?'}
                       render={() => <ProfileContainer />}/>
                <Route path={'/users'}
                       render={() => <UserContainer/>}/>
            </div>
            <Settings/>
        </div>
    );
}

export default App;
