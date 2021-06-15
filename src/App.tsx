import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Musick from './components/Musick/Musick';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import { addMessage, addPost, MessageADDpost, newChangePost, stateType } from './Redux/state';

type AppType = {
    state: stateType
    newMessage:string
}

function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header
                    img={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}
                    alt={'logo'}/>
                <NavBar state={props.state}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs newMessage={props.newMessage} MessageADDpost={MessageADDpost} addMessage={addMessage} addPost={addPost} state={props.state}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile newChangePost={newChangePost} newValue={props.state.profilePage.newValue} addPost={addPost}
                                                  state={props.state}/>}/>
                </div>
                <Settings/>
            </div>
        </BrowserRouter>
    );
}

export default App;
