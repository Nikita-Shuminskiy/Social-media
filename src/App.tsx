import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Musick from './components/Musick/Musick';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import { stateType } from './Redux/state';

 type AppType = {
    state: stateType
 }



function App(props:AppType) {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header
                    img={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}
                    alt={'logo'}/>
                <NavBar Pro={'Profile'} Mess={'Message'} News={'News'} Music={'Musick'} Set={'Setting'}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs state={props.state}/>}/>
                    <Route path={'/profile'} render={() => <Profile state={props.state}/>}/>
                </div>
                <Settings/>
            </div>
        </BrowserRouter>
    );
}

export default App;
