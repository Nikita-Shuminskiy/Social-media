import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Musick from './components/Musick/Musick';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom'
import Dialogs from './components/Dialogs/Dialogs';
import { StoreType } from './Redux/state';

type AppType = {
    store: StoreType
    /*newMessage:string
    addPost: (m:string) => void*/
}

function App(props: AppType) {
        const state = props.store.getState
    return (
            <div className={'app-wrapper'}>
                <Header
                    img={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}
                    alt={'logo'}/>
                <NavBar state={props.store._state}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() => <Dialogs newMessage={props.store._state.dialogPage.newMessage}
                                                                    MessageADDpost={props.store.MessageADDpost.bind(props.store)}
                                                                    addMessage={props.store.addMessage.bind(props.store)}
                                                                    addPost={props.store.addPost.bind(props.store)}
                                                                    state={props.store._state.dialogPage}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile newChangePost={props.store.newChangePost.bind(props.store)}
                                                  newValue={props.store._state.profilePage.newValue}
                                                  addPost={props.store.addPost.bind(props.store)}
                                                  profilePage={props.store._state.profilePage}/>}/>
                </div>
                <Settings/>
            </div>
    );
}

export default App;
